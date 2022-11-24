import { get } from "../../utils/request";

/*该API为store挂载的中间件
拥有该标识的action将会通过中间件进行处理*/
export const API_DATA = "API_DATA";

//执行网络请求
const fetchData = (finalUrl, transformationalSchema) => {
  return get(finalUrl).then((data) => {
    return standardizationData(data, transformationalSchema);
  });
};

//根据cacheSchema提供的id和name,name代表不同领域实体的名字，将数据生成为标准化的数据格式
const standardizationData = (data, transformationalSchema) => {
  const { id, name } = transformationalSchema;
  //以id为key的新数据载体
  let dataObj = {};
  //新的数据载体对应的id
  let dataIds = [];
  if (data instanceof Array) {
    //map返回是一个数组，所有的id
    dataIds = data.map((item) => {
      //将每一组数据对应上id,并挂载在dataObj里
      dataObj[item[id]] = item;
      return item[id];
    });
  } else {
    //如果是其他数据类型，并且是data[id]有值,就直接赋值,其他情况不做处理
    if(data[id]){
      dataObj[data[id]] = data;
      dataIds.push(data[id]);
    }
  }
  return {
    [name]: dataObj,
    ids: dataIds,
  };
};

const apiMiddleware = (store) => (next) => (action) => {
  const apiData = action[API_DATA];
  //判断是不是接口请求，不是直接进行下一步，直接终止之后的操作
  if (apiData === undefined) {
    return next(action);
  }
  //解构apiData数据的携带数据
  const { finalUrl, transformationalSchema, types } = apiData;
  //分别将typs预设的状态，分别给结构出来并赋值重命名
  const [request, success, failure] = types;
  //保证了action中若有其他的数据都可被传递下去
  const finalAction = (data) => {
    //将额外数据data合并进action
    const finalActionData = { ...action, ...data };
    //将原有action基础上将API_DATA属性删除
    delete finalActionData[API_DATA];
    //返回处理后的数据
    return finalActionData;
  };
  //接口马上调用，新增请求状态
  next(finalAction({ type: request }));
  return fetchData(finalUrl, transformationalSchema).then(
    (res) =>
      //接口调用成功，并新增成功状态和响应数据
      next(
        finalAction({
          type: success,
          response: res,
        })
      ),
    (error) =>
      //接口调用失败，并新增失败状态和错误信息
      next(
        finalAction({
          type: failure,
          error: error.message || "获取数据失败",
        })
      )
  );
};

export default apiMiddleware;
