import fetch from '@/utils/fetch'

/**
 * 获取商品列表
 */
 export function getGoodList(params) {
   return fetch({
     url: 'good/index',
     method: 'POST',
     data: {
       version: process.env.INTERFACE,
       token: params.token,
       q: params.q || '',
       page: params.page || 1,
       limit: params.limit
     }
   });
 }

 export function getGoodInfo(params) {
   return fetch({
     url: 'good/info',
     method: 'POST',
     data: {
       version: process.env.INTERFACE,
       token: params.token,
       good_id: params.id
     }
   });
 }
