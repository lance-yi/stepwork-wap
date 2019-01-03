/**
 * @author Lance YI 
 * @date 2018年10月20日
 * @description 网站公共通用方法和属性
 */
var _Base = {
  userInfo: Cookies.getJSON("userInfo") || {},

  // 更具索引返回中文字
  returnChinese: function (index) {
    switch (index) {
      case 1: return "一";
      case 2: return "二";
      case 3: return "三";
      case 4: return "四";
      case 5: return "五";
      case 6: return "六";
      case 7: return "七";
      case 8: return "八";
      case 9: return "九";
      case 10: return "十";
    }
  },

  // 随机准确率
  mathRound: function(){
    var num = (Math.random() * 100).toFixed(2);
    if(num >= 90 && num < 100){
      return num + '%';
    }else{
      return '98%';
    }
  },

  // 将数值四舍五入(保留2位小数)后格式化成金额形式
  formatCurrency: function(num) {
    num = num.toString().replace(/\$|\,/g,'');
    if(isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10)
    cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
    num = num.substring(0,num.length-(4*i+3))+','+
    num.substring(num.length-(4*i+3));
    return (((sign)?'':'-') + num + '.' + cents);
  },

  // 获取地址栏参数
  getQueryString: function(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
  },

  // 级别类型中文
  filterRank: function (type) {
    switch (type) {
      case 10000: return "总代理";
      default: return "代理";
    }
  },

  // 返回银行类型
  filterBankType: function(number) {
    switch (number) {
        case 0: return '未绑定';
        case 1: return '支付宝';
        case 2: return '微信';
    }
  },
  
  // 彩种转换
  filterLottery_zh: function (key) {
    switch (parseInt(key)) {
      case 1: return '重庆时时彩';
      case 2: return '天津时时彩';
      case 3: return '福彩3D';
      case 4: return '体彩P3';
      case 5: return '广东11选5';
      case 6: return '江西11选5';
      case 7: return '江苏快3';
      case 8: return '新疆时时彩';
      case 10: return '5分彩';
      case 11: return '分分彩';
      case 12: return '3分彩';
      case 13: return '体彩P5';
      case 14: return '山东11选5';
      case 15: return '上海11选5';
      case 16: return '韩国1点5分彩';
      case 17: return '吉林快3';
      case 18: return '广西快3';
      case 19: return '安徽快3';
      case 20: return '北京PK10';
      case 21: return '北京5分彩';
      case 22: return '重庆幸运农场';
      case 23: return '香港六合彩';
      case 24: return '幸运28';
      case 26: return '腾讯分分彩';
      case 28: return '重庆牛牛';
      case 29: return '5分牛牛';
      case 30: return '3分PK10';
      default: return '未知';
    }
  },

  // 彩种玩法转换
  filterPayGame_zh: function (gmkey) {
    switch (parseInt(gmkey)) {
      case 1: return '定位胆个位杀';
      case 2: return '龙虎玩法';
      case 3: return '定位胆双胆杀';
      case 4: return '体彩P3';
      case 5: return '广东11选5';
      case 6: return '江西11选5';
      case 7: return '江苏快3';
      case 8: return '新疆时时彩';
      case 10: return '5分彩';
      case 11: return '分分彩';
      case 12: return '3分彩';
      case 13: return '体彩P5';
      case 14: return '山东11选5';
      case 15: return '上海11选5';
      case 16: return '韩国1点5分彩';
      case 17: return '吉林快3';
      case 18: return '广西快3';
      case 19: return '安徽快3';
      case 20: return '北京PK10';
      case 21: return '北京5分彩';
      case 22: return '重庆幸运农场';
      case 23: return '香港六合彩';
      case 24: return '幸运28';
      case 28: return '重庆牛牛';
      case 29: return '5分牛牛';
      case 30: return '3分PK10';
      default: return '未知';
    }
  },

  // 彩种玩法转换
  filterPayGame_zh: function (gmkey) {
    switch (parseInt(gmkey)) {
      case 1: return '万位杀1码';
      case 2: return '千位杀1码';
      case 3: return '百位杀1码';
      case 4: return '十位杀1码';
      case 5: return '个位杀1码';
      case 6: return '万位杀2码';
      case 7: return '千位杀2码';
      case 8: return '百位杀2码';
      case 9: return '十位杀2码';
      case 10: return '个位杀2码';
      case 11: return '万位杀3码';
      case 12: return '千位杀3码';
      case 13: return '百位杀3码';
      case 14: return '十位杀3码';
      case 15: return '个位杀3码';
      case 16: return '前二杀1码';
      case 17: return '后二杀1码';
      case 18: return '前二杀2码';
      case 19: return '后二杀2码';
      case 20: return '前三杀1码';
      case 21: return '中三杀1码';
      case 22: return '后三杀1码';
      case 23: return '前四杀1码';
      case 24: return '后四杀1码';
      case 25: return '五星杀1码';
      case 27: return '五星定位1胆';
      case 28: return '五星定位2胆';
      case 29: return '龙虎';
      case 30: return '万位定胆';
      case 31: return '千位定胆';
      case 32: return '百位定胆';
      case 33: return '十位定胆';
      case 34: return '个位定胆';
      case 35: return '万位大小';
      case 36: return '千位大小';
      case 37: return '百位大小';
      case 38: return '十位大小';
      case 39: return '个位大小';
      case 40: return '万位单双';
      case 41: return '千位单双';
      case 42: return '百位单双';
      case 43: return '十位单双';
      case 44: return '个位单双';
      case 45: return '后二直选';
      case 46: return '前二直选';
      case 47: return '前三直选';
      case 48: return '中三直选';
      case 49: return '后三直选';
      case 50: return '前二012路';
      case 51: return '后二012路';
      case 52: return '前二合值';
      case 53: return '后二合值';
      case 54: return '前二跨度';
      case 55: return '后二跨度';
      case 26: return '前三组三';
      case 56: return '中三组三';
      case 57: return '后三组三';
      case 58: return '前三组六';
      case 59: return '中三组六';
      case 60: return '后三组六';
      default: return '未知';
    }
  },
  // 判断是否登录显示对应的资料
  isLogin: function () {
    if(Cookies.get("isLogin")){
      $("#yesLogin").show();
      $("#noLogin").hide();
      this.userInfo = Cookies.getJSON("userInfo");
      $("#nickName").html(this.userInfo.u_name)
    }else{
      $("#noLogin").show();
      $("#yesLogin").hide();
    }
  },

  /**
   * 全局声明函数
   */
  submitLogin: function (){
    if ($("#username").val() == '') {
      CONFIG._showMsg("请输入账号")
      return
    }
    if($("#password").val() == ''){
      CONFIG._showMsg("请输入密码")
      return
    }
    Api.login($("#username").val(),$("#password").val());
  },
  
  // 相应回车键
  enterPress: function(e) {
    var e = e || window.event;
    if(e.keyCode == 13){
      _Base.submitLogin();
    }
  },

  // 随机号码生成
  getMoble: function() {
    var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
    var i = parseInt(10 * Math.random());
    var prefix = prefixArray[i];
    for (var j = 0; j < 8; j++) {
      if(j < 5){
        prefix = prefix + "*";
      }else{
        prefix = prefix + Math.floor(Math.random() * 10);
      }
    }
    return prefix;
  },
  
  showKefu:function(e){
    $("#online_qq_tab").click();
  },
  // 初始化
  init: function(){   
    /**
     * 顶部用户名显示判断
     */
    this.isLogin();

  },
  
}

_Base.init();