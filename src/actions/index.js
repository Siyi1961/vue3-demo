import axios from "axios";

export function fetchResources() {
    return axios.get("http://jsonplaceholder.typicode.com/users");
}

export function updateResource(id, resource) {
    return axios.patch(`/api/resource/${id}`, resource).then((res)=>res.data)
    .catch((error)=>{ console.log("1111111111111"+error.response.statusText);  return  Promise.reject(error?.response?.statusText)});
}

// CORS 跨域
/**
 * 跨域：只要不同源，即为跨域
 * > 协议头 http https file
 * > 域名 baidu.com  taobao.com 
 * > 端口号 8080 441 21 22
 * 
 * 域名不同 = 跨域
 * https://www.baidu.com:8888
 * https://www.taobao.com:8888
 * 
 * 协议不同 = 跨域
 * http://www.baidu.com:21
 * https://www.baidu.com:21
 * 
 * 端口不同 = 跨域
 * http://www.baidu.com:21
 * http://www.baidu.com:22
 * 
 * 同源
 * http://www.baidu.com:21
 * http://www.baidu.com:21/map/api/city
 */

/**
 * 解决跨域
 * > jsonp
 * > 服务器代理
 * > 后端允许跨域
 */