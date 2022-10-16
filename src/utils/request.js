//Capsulating the HTTP Request, for later using for creating actions
import axios from 'axios'
const headers = new Headers({
   "Accept": "application/json",
   "Content-Type": "application/json"
})

function get(url){
    return axios(url,{
        method: "GET",
        headers: headers
    }).then(response =>{
        const data = handleResponse(url,response);
        return Promise.resolve(data)
    }).catch(err => {
        console.error(`Request failed. Url=${url}. Message=${err}`)
        return Promise.reject({error:{message:"Request failed"}})
    })
}

function post(url,data){
    return axios(url,{
        method: "POST",
        headers: headers,
        body: data 
    }).then(response =>{
        handleResponse(url,response);
    }).catch(err => {
        console.error(`Request failed. Url=${url}. Message=${err}`)
        return Promise.reject({error:{message:"Request failed"}})
    })
}

function handleResponse(url,response){
    if(response.status === 200){
        return response.data;
    }else{
        console.error(`Request failed. Url=${url}}`)
        return Promise.reject({error:{message:"Request failed due to server error"}})
    }
}

export {get,post}