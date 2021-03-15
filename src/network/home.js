import {request} from "./network";

export function getMultiData() {
  return request({
    url: '/api/m5/home/multidata'
  })
}

export function getProductData(type, page) {
  return request({
    url: '/api/m5/home/data',
    params: {
      type,
      page
    }
  })
}