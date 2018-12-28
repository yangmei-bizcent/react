import axios from "axios"
import { message } from 'antd'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    return config
}, function (error) {
    console.log('请求失败')
});

// 添加响应拦截器
axios.interceptors.response.use(function (config) {
    if (config.hasOwnProperty('data') && config.data.hasOwnProperty('code')) {
        if (401 == config.data.code) {
            return;
        }
        message.error(config.data.msg);
        return Promise.reject(config);
    }else{
        return config
    }

}, function (error) {
    console.log('error',error)
    if(error.response){
        errorFn(error);
        return Promise.reject(error)
    }else{
        message.error('请求服务器失败！') 
    }
});

export const errorFn = error => {
    switch (error.response.status) {
      case 400:
        message.error('请求错误(400)', '提示');
        break;
      case 403:
        message.error('拒绝访问(403)', '提示');
        break;
      case 404:
        message.error('请求出错(404)', '提示');
        break;
      case 405:
        message.error('拒绝访问(405)', '提示');
        break;
      case 408:
        message.error('请求超时(408)', '提示');
        break;
      case 500:
        message.error('请求服务器失败(500)', '提示');
        break;
      case 501:
        message.error('服务未实现(501)', '提示');
        break;
      case 502:
        message.error('网络错误(502)', '提示');
        break;
      case 503:
        message.error('服务不可用(503)', '提示');
        break;
      case 504:
        message.error('网络超时(504)', '提示');
        break;
      case 505:
        message.error('HTTP版本不受支持(505)', '提示');
        break;
      default:
        message.error('连接出错', '提示');
        break;
    }
  };

  
export const axiosConfig = {
    baseURL: `http://test.wfw.zwjk.com/`,
    headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Accept": "application/json",
        "X-SERVER-ID": "11111111",
    },
    timeout: 3000
};


/**
 * http post 请求
 * @param _url
 * @param obj
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const axiospost = (_url, obj) => {
    return axios.post(_url, obj, axiosConfig)
};

/**
 * http post 请求
 * @param _url
 * @param obj
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const axiospost_params = (_url, obj, params) => {
    return axios.post(_url, obj, Object.assign(params,axiosConfig))
};

/**
 * https 全部数据修改
 * @param _url
 * @param obj
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const aixosput = (_url, obj) => {
    return axios.put(_url, obj, axiosConfig)
};

/**
 *  https 局部数据修改
 * @param _url
 * @param obj
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const aixospatch = (_url, obj) => {
    return axios.patch(_url, obj, axiosConfig)
};

/**
 * https 获取数据资源
 * @param _url
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const axiosget = (_url) => {
    return axios.get(_url, axiosConfig)
};

/**
 * https 获取数据资源
 * @param _url
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const axiosget_params = (_url, params) => {
    return axios.get(_url, Object.assign({params:params},axiosConfig))
};

/**
 * https 数据删除
 * @param _url
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const axiosdel = (_url, obj) => {
    return axios.delete(_url, axiosConfig)
};