import Axios, { AxiosResponse } from 'axios'

const connection = Axios.create({})

export function get<T = any, R = AxiosResponse<T>>( url:string, options?: Object) :Promise<R>{
  return connection.get(url, options || {})
}

export function post ( url:string, body?: Object, header?: object ){
  return connection.post(url, body || {}, header || {})
}