//server
// const SERVER = "http://hitao.dev.onebound.cn/api/app.php",
const SERVER = "/api",
      KEY = "key=test_api_key",
      SECRET = "&secret=ob8899.",
      TAOBAO_SERVER = `http://api.onebound.cn/taobao/api_call.php?${KEY + SECRET}`,
      ALIBABA_SERVER = `http://api.onebound.cn/1688/api_call.php?${KEY + SECRET}`,
      JD_SERVER = `http://api.onebound.cn/jd/api_call.php?${KEY + SECRET}`,
      AMAZON_SERVER = `http://api.onebound.cn/amazon/api_call.php?${KEY + SECRET}`;

const API =
{
    //首页
    HOME_INDEX: `${SERVER}?module=home&action=index`,
    HOME_HOTSEARCH: `${SERVER}?module=index&action=popularSearches`,
    INDEX_CATEGORY: `${SERVER}?module=index&action=category`,
    INDEX_CHILD_CATEGORY: `${SERVER}?module=index&action=childCategory`,
    INDEX_SHOPGOODSINFO: `${SERVER}?module=index&action=shopGoodsInfo`,
    INDEX_GOODSRECOMMEND: `${SERVER}?module=index&action=getTaobaogoodsRecommend`,
    INDEX_SHOPRECOMMEND: `${SERVER}?module=index&action=shopRecommend`,
    INDEX_CAROUSEL: `${SERVER}?module=index&action=carousel`,
    INDEX_HISTORY_RECORD: `${SERVER}?module=index&action=history_record`,
    INDEX_HOTBRAND: `${SERVER}?module=index&action=hotbrand`,
    INDEX_HOTGOODS: `${SERVER}?module=index&action=hotgoods`,
    //用户模块
    USER_LOGIN: `${SERVER}?module=user&action=login`,
    USER_LOGOUT: `${SERVER}?module=user&action=logout`,
    USER_REGISTER: `${SERVER}?module=user&action=register`,
    USER_INDEX: `${SERVER}?module=user&action=index`,
    USER_OPENSETTING: `${SERVER}?module=user&action=openSetting`,
    USER_SETTING: `${SERVER}?module=user&action=setting`,
    USER_FORGET: `${SERVER}?module=user&action=forget`,
    USER_SCORE: `${SERVER}?module=user&action=scoreRecords`,
    USER_RECORDS: `${SERVER}?module=user&action=recordsList`,
    USER_INVITEFRIENDS: `${SERVER}?module=user&action=inviteFriends`,
    USER_INVITELIST: `${SERVER}?module=user&action=inviteList`,
    USER_CASHBACK_RECORDS: `${SERVER}?module=user&action=cashbackRecords`,
    USER_NOTIFY: `${SERVER}?module=user&action=notify`,
    USER_SIGNINFO: `${SERVER}?module=user&action=signInfo`,
    USER_SIGN: `${SERVER}?module=user&action=sign`,
    //地址
    ADDRESS_LIST: `${SERVER}?module=user&action=address`,
    ADDRESS_ADD: `${SERVER}?module=user&action=addAddress`,
    ADDRESS_EDIT: `${SERVER}?module=user&action=editAddress`,
    ADDRESS_DEL: `${SERVER}?module=user&action=delAddress`,
    ADDRESS_DEFAULT: `${SERVER}?module=user&action=defaultAddress`,
    ADDRESS_GETREGIONSNAME: `${SERVER}?module=other&action=getRegionsName`,
    //第三方登录
    SYNC_LOGIN: `${SERVER}?module=user&action=synclogin`,
    SYNC_CHECK: `${SERVER}?module=user&action=synccheck`,
    //扫码登录
    SCAN_LOGIN: `${SERVER}?module=user&action=scanlogin`,
    CHECK_SCAN: `${SERVER}?module=user&action=checkscan`,
    //购物车
    CART_LIST: `${SERVER}?module=cart&action=lists`,
    CART_ADD: `${SERVER}?module=cart&action=add`,
    CART_EDIT: `${SERVER}?module=cart&action=edit`,
    CART_DEL: `${SERVER}?module=cart&action=del`,
    CART_CLEAR: `${SERVER}?module=cart&action=clear`,
    CART_PAY: `${SERVER}?module=cart&action=pay`,
    CART_PAYMENT: `${SERVER}?module=cart&action=payment`,
    CART_MOVE_FAVORITE: `${SERVER}?module=cart&action=moveFavorite`,
    //代购订单
    ORDER_LIST: `${SERVER}?module=order&action=lists`,
    ORDER_GOODS_LIST: `${SERVER}?module=order&action=productLists`,
    ORDER_DETAILS: `${SERVER}?module=order&action=details`,
    ORDER_DEL: `${SERVER}?module=order&action=del`,
    ORDER_CANCEL: `${SERVER}?module=order&action=cancel`,
    ORDER_ORDERPAY: `${SERVER}?module=order&action=orderPay`,
    ORDER_ORDERCONFIRM: `${SERVER}?module=order&action=orderConfirm`,
    ORDER_PAYMENT: `${SERVER}?module=order&action=payment`,
    ORDER_PAYCONFIRM: `${SERVER}?module=order&action=payconfirm`,
    ORDER_GETSHIPPING: `${SERVER}?module=order&action=getShipping`,
    ORDER_SHIPPING: `${SERVER}?module=order&action=shipping`,
    ORDER_BUYYOURSELF: `${SERVER}?module=order&action=buyYourself`,
    ORDER_REPLY: `${SERVER}?module=order&action=orderReply`,
    ORDER_ADDREPLY: `${SERVER}?module=order&action=addReply`,
    //收藏
    FAVORITES_LIST: `${SERVER}?module=favorites&action=lists`,
    FAVORITES_ADD: `${SERVER}?module=favorites&action=add`,
    FAVORITES_DEL: `${SERVER}?module=favorites&action=del`,
    FAVORITES_SHOPLIST: `${SERVER}?module=favorites&action=shopLists`,
    FAVORITES_SHOPADD: `${SERVER}?module=favorites&action=shopAdd`,
    FAVORITES_SHOPDEL: `${SERVER}?module=favorites&action=shopDel`,
    FAVORITES_SHOPRECOMMEND: `${SERVER}?module=favorites&action=shopRecommend`,
    //国际运单、包裹
    SENDORDER_LIST: `${SERVER}?module=sendorder&action=lists`,
    SENDORDER_RECEIPT: `${SERVER}?module=sendorder&action=receipt`,
    SENDORDER_DETAILS: `${SERVER}?module=sendorder&action=details`,
    SENDORDER_CANCEL: `${SERVER}?module=sendorder&action=cancel`,
    SENDORDER_ADDRESS: `${SERVER}?module=sendorder&action=address`,
    SENDORDER_REPLY: `${SERVER}?module=sendorder&action=sendOrderReply`,
    SENDORDER_ADDREPLY: `${SERVER}?module=sendorder&action=addReply`,
    SENDORDER_PAY: `${SERVER}?module=sendorder&action=sendorderPay`,
    SENDORDER_CONFIRM: `${SERVER}?module=sendorder&action=sendorderConfirm`,
    //商品_淘宝
    SEARCH_TAOBAO: `${TAOBAO_SERVER}&api_name=item_search`,
    DETAILS_TAOBAO: `${TAOBAO_SERVER}&api_name=item_get`,
    PASSWORD_TAOBAO: `${TAOBAO_SERVER}&api_name=item_password&title=yes`,
    SHOP_TAOBAO: `${TAOBAO_SERVER}&api_name=item_search_shop`,
    //上传图片到淘宝
    TAOBAO_UPLOADIMG: `${TAOBAO_SERVER}&api_name=upload_img`,
    //商品_1688
    DETAILS_ALIBABA: `${ALIBABA_SERVER}&api_name=item_get`,
    PASSWORD_ALIBABA: `${ALIBABA_SERVER}&api_name=item_password&title=yes`,
    //亚马逊商品
    DETAILS_AMAZON: `${AMAZON_SERVER}&api_name=item_get`,
    //商品_JD
    DETAILS_JD: `${JD_SERVER}&api_name=item_get`,
    //发送验证码
    SEND_VERFY_CODE: `${SERVER}?module=other&action=sendVerifyCode`,
    //匿名用户
    OTHER_ANONYMOUS: `${SERVER}?module=other&action=anonymous`,
    //语言
    OTHER_LANGUAGE: `${SERVER}?module=other&action=language`,
    //上传文件
    OTHER_UPLOADIMG: `${SERVER}?module=other&action=uploadImg`,
    //公告
    OTHER_ANNOUNCEMENT: `${SERVER}?module=other&action=announcement`,
    //获取汇率
    OTHER_RATE: `${SERVER}?module=other&action=exchange_rate`,
    //查看照片
    OTHER_VIEW_PHOTO: `${SERVER}?module=other&action=view_item_photo`,
    //获取配置
    OTHER_CONFIGLIST: `${SERVER}?module=other&action=configList`,
    //意见反馈
    OTHER_FEEDBACK: `${SERVER}?module=other&action=feedback`,
    //帮助文章
    ARTICLE_LIST: `${SERVER}?module=other&action=articleTitle`,
    ARTICLE_VIEW: `${SERVER}?module=other&action=article`,
    //获取物流公司
    OTHER_GETEXPRESSES: `${SERVER}?module=other&action=getExpress`,
    OTHER_ESTIMATES: `${SERVER}?module=other&action=estimates`,
    //国际化
    OTHER_LANGUAGES: `${SERVER}?module=other&action=languages`,
    //充值信息
    OTHER_RECHARGE_INFO: `${SERVER}?module=other&action=recharge_info`,
    //优惠卷
    COUPON_LIST: `${SERVER}?module=coupon&action=lists`,
    COUPON_ACTIVE: `${SERVER}?module=coupon&action=active`,
    COUPON_EXCHANGE: `${SERVER}?module=coupon&action=exchange`,
    COUPON_EXCHANGELIST: `${SERVER}?module=coupon&action=exchangelists`,
    //充值
    PAY_PAYPAL: `${SERVER}?module=pay&action=paypal`,
    PAY_DHPAY: `${SERVER}?module=pay&action=dhpay`,
    PAY_RMBRECHARGE: `${SERVER}?module=pay&action=rmbRecharge`,
    PAY_RECHARGE: `${SERVER}?module=pay&action=recharge`,
    PAY_CHINABANK_RECHARGE: `${SERVER}?module=pay&action=chinaBankRecharge`,
    //第三方支付接口
    PLUGINS_PAYMENT: `${SERVER}?module=pay&action=payment`,
}

export default API