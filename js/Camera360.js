/*************************************

APP Crack： Camera360-Selfie Editor
Phien Ban: 10.02.00
Links: https://apps.apple.com/us/app/camera360-selfie-editor/id443354861
**************************************

[rewrite_local]
^https?:\/\/.*\.camera360\.com\/(api\/(order\/purchase|iap\/check-receipt)|v\d\/operational-positions) url script-response-body https://gitlab.com/duyvinh09/ohb/-/raw/main/Script/camera360.js

[mitm]
hostname = *.camera360.com

*************************************/


var duyvinh09 = JSON.parse($response.body);

const vip1 = '/api/order/purchase';
const vip2 = '/api/iap/check-receipt';
const ad = '/operational-positions';

if ($request.url.indexOf(vip1) != -1){
    duyvinh09["data"] = {
        "originalTransactionId" : "490001464780901",
        "errorCode" : 0,
        "purchaseTime" : 1105228800,
        "isTrialPeriod" : 1,
        "expireTime" : 4071600000,
        "sandbox" : 0
    };
}

if ($request.url.indexOf(vip2) != -1){
    duyvinh09["data"] = {
        "sandbox" : 0,
        "purchaseTime" : 1105228800,
        "isTrialPeriod" : 1,
        "originalTransactionId" : "490001464780901",
        "appleExpireTime" : 4071600000,
        "productId" : "vip_yearly_3daysfree",
        "appleVip" : 1,
        "expireTime" : 4071600000,
        "giftVip" : 1,
        "operationVip" : 1,
        "errorCode" : 0
    };
}

if ($request.url.indexOf(ad) != -1){
    duyvinh09.Boot = [];
}

$done({body : JSON.stringify(duyvinh09)});