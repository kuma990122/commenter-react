import { get } from "../../utils/request"


/*该API为store挂载的中间件
拥有该标识的action将会通过中间件进行处理*/
export const FETCH_DATA = 'FETCH DATA';

//执行网络请求
const fetchData = (endpoint, schema) => {
    return get(endpoint).then(data => {
      return normalizeData(data, schema)
    })
}

//根据schema, 将获取的数据扁平化处理
const normalizeData = (data, schema) => {
    const {id, name} = schema;
    let kvObj = {};
    let ids = [];
    if(Array.isArray(data)) {
      data.forEach(item => {
        kvObj[item[id]] = item; //让kvObj获得item的属性随后赋值
        ids.push(item[id]);
      })
    } else {
      kvObj[data[id]] = data;
      ids.push(data[id]);
    }
    return {
      [name]: kvObj, //name代表不同领域实体的名字，比如（products），把kvObj挂载到name（products）意味着我们获得的是product数据
      ids
    }
  }

export default store => next => action =>{
    const callAPI = action[FETCH_DATA];
    if(typeof callAPI === 'undefined') {
        return next(action)
    }
    //解构
    const { endpoint, schema, types } = callAPI;
    //赋值
    const [requestType, successType, failureType] = types;

    //增强版action，带有额外数据data的action也可以被处理，在获得的原有action基础上将FETCH_DATA属性剔除后返回进行处理
    //保证了action中若有其他的数据都可被传递下去
    const actionWith = data => {
        const finalAction = {...action, ...data}
        delete finalAction[FETCH_DATA]
        return finalAction
    }

    //代表有一个请求即将被发送
    next(actionWith({type: requestType}))
    return fetchData(endpoint, schema).then(
        response => next(actionWith({
          type: successType,
          response 
        })),
        error => next(actionWith({
          type: failureType,
          error: error.message || '获取数据失败'
        }))
      )
}