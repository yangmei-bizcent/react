import { aixospatch, aixosput, axiosget, axiospost } from "./config";

const applicationpost = (_url, data) => axiospost(`${_url}`, data);
const applicationput = (_url, data) => aixosput(`${_url}`, data);
const applicationpatch = (_url, data) => aixospatch(`${_url}`, data);
const applicationget = _url => axiosget(`${_url}`);

/**
 *  查询flowId
 */
export const getDemo11DataApi = () => applicationget(`https://api.github.com/users/octocat/gists`);
