import {request} from './request';

export function getDetailsData(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend',
  })
}

export class detailGoods {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title;
    this.discountDesc = itemInfo.discountDesc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.columns = columns;

    this.services = shopInfo.services;
  }
}

export class shopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.score = shopInfo.score;
    this.shopUrl = shopInfo.shopUrl;
  }
}
