// 导入es6语法支持
var head = document.getElementsByTagName('head')[0];
var es6script = document.createElement('script');
es6script.setAttribute('type','text/javascript');
es6script.setAttribute('src','./js/bluebird.min.js');
head.appendChild(es6script);


// 网站公共方法、对象、初始化
var CONFIG = {
  pathName: window.location.pathname,
  headHtml: '',
  copyrightHtml: '',
  qqkefuHtml: '',
  // 玩法对象
  _payGameList: [
    // 重庆时时彩
    {
      key: 1,
      icon: '<i class="iconfont icon-cqssc"></i>',
      name: "重庆时时彩",
      list: [
        { key: 1 , name: '前二复式'},
        { key: 2 , name: '后二复式'},
        { key: 3 , name: '前三复式'},
        { key: 4 , name: '中三复式'},
        { key: 5 , name: '后三复式'},
        { key: 6 , name: '五星定1胆'},
        { key: 7 , name: '五星双胆'},
        { key: 8 , name: '万位定位6码'},
        { key: 9 , name: '万位定位5码'},
        { key: 10 , name: '千位定位6码'},
        { key: 11 , name: '千位定位5码'},
        { key: 12 , name: '个位定位6码'},
        { key: 13 , name: '个位定位5码'},
        { key: 14 , name: '后二单式平刷'},
        { key: 15 , name: '后三单式平刷'}
      ]
    },
    {
      key: 26,
      icon: '<i class="iconfont icon-tengxunfenfencai"></i>',
      name: "腾讯分分彩",
      list: [
        { key: 1 , name: '前二复式'},
        { key: 2 , name: '后二复式'},
        { key: 3 , name: '前三复式'},
        { key: 4 , name: '中三复式'},
        { key: 5 , name: '后三复式'},
        { key: 6 , name: '五星定1胆'},
        { key: 7 , name: '五星双胆'},
        { key: 8 , name: '万位定位6码'},
        { key: 9 , name: '万位定位5码'},
        { key: 10 , name: '千位定位6码'},
        { key: 11 , name: '千位定位5码'},
        { key: 12 , name: '个位定位6码'},
        { key: 13 , name: '个位定位5码'},
        { key: 14 , name: '后二单式平刷'},
        { key: 15 , name: '后三单式平刷'}
      ]
    },
    {
      key: 20,
      icon: '<i class="iconfont icon-tengxunfenfencai"></i>',
      name: "北京PK10",
      list: [
        { key: 16 , name: '猜冠军'},
        { key: 17 , name: '猜亚军'},
        { key: 18 , name: '猜季军'},
        { key: 19 , name: '冠军大小'},
        { key: 20 , name: '亚军大小'},
        { key: 21 , name: '冠军单双'},
        { key: 22 , name: '亚军单双'},
        { key: 23 , name: '猜冠亚军'},
        { key: 24 , name: '猜冠亚季军'}    
      ]
    },
    {
      key: 14,
      icon: '<i class="iconfont icon-tengxunfenfencai"></i>',
      name: "山东11选5",
      list: [
        { key: 25 , name: '任选1中1'},
        { key: 26 , name: '任选2中2'},
        { key: 27 , name: '任选3中3'},
        { key: 28 , name: '任选4中4'},
        { key: 29 , name: '任选5中5'},
      ]
    },
    {
      key: 7,
      icon: '<i class="iconfont icon-tengxunfenfencai"></i>',
      name: "江苏快3",
      list: [
        { key: 30 , name: '号码类型'},
        { key: 31 , name: '胆码玩法'},
        { key: 32 , name: '2码玩法'},
        { key: 33 , name: '2不同号玩法'},
        { key: 34 , name: '合值玩法'},
        { key: 35 , name: '合值大小'},
        { key: 36 , name: '合值单双'},
        { key: 37 , name: '二同号'},
        { key: 38 , name: '三连号'},
      ]
    },
  ],

  // 显示弹出框
  _showDialog: function (path, width, height) {
    if(!arguments[1]) width = 410;
    if(!arguments[2]) height = 380;
    $(".dialog").layerModel({
      init: function () {},
      title: "提示",
      drag: false,
      locked: true,
      head: true,
      width: width,
      height: height,
      isClose: true,
    });
    $(".dialog").load('./dialog-' + path + '.html');
  },
  
  // 显示msg
  _showMsg: function (msg) {
    layer.open({
      content: msg
      ,skin: 'msg'
      ,anim: "scale"
      ,time: 3 //3秒后自动关闭
    });
  },

  // 显示警告框
  _showAlert: function (title,msg) {
    layer.open({
      title: [title,'background-color: #0088dd; color:#fff;']
      ,content: msg
    });
  },

  // 收藏
  _addFavorite: function () {
    var url = window.location;
    var title = document.title;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("360se") > -1) {
      alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
    } else if (ua.indexOf("msie 8") > -1) {
      window.external.AddToFavoritesBar(url, title); //IE8
    } else if (document.all) { //IE类浏览器
      try {
        window.external.addFavorite(url, title);
      } catch (e) {
        alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
      }
    } else if (window.sidebar) { //firfox等浏览器；
      window.sidebar.addPanel(title, url, "");
    } else {
      alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
    }
  },

  // 退出登录
  _logout: function () {
    Cookies.remove("isLogin");
    Cookies.remove("guid");
    Cookies.remove("userInfo");
    Cookies.remove("isVip");
    this._showMsg("退出成功!")
    _Base.isLogin();
    window.location.href = "./index.html";
  },
  
  // 判断是否已经登录
  _isLoginSuccess: function(){
		if(!Cookies.get("isLogin")){
      CONFIG._showMsg("请先登录!");
      window.location.href = './login.html'
			return;
		}
  },

  // 检查提现金额函数
  _checkDrawMoney: function (dom) {
    if(dom.val() == ''){
      this._showMsg("请输入提款金额!");
      return false;
    }
    if(isNaN(dom.val())){
      this._showMsg("请输入正确的金额!");
      return false;
    }
    if(dom.val() < 0){
      this._showMsg("提现金额不能低于10元!");
      return false;
    }
    if(dom.val() > Cookies.getJSON("userInfo").u_money){
      this._showMsg("提现金额不能大于可用余额!");
      return false;
    }
    return true;
  },
  
  // 检查提现支付密码
  _checkPayWord: function (dom) {
    if(dom.val() == ''){
      this._showMsg("请输入提款密码!");
      return false;
    }
    return true;
  },

  // 检查用户名
  _checkUserName: function (dom) {
    if(dom.val() == ''){
      this._showMsg("请输入用户名!");
      return false;
    }
    if(!/^[a-zA-Z0-9_-]{4,16}$/.test(dom.val())){
      this._showMsg("用户名长度为4到16位（字母，数字，下划线，减号）");
      return false;
    }
    if(!/[a-zA-Z]+/.test(dom.val())){
      this._showMsg("必须包含字母");
      return false;
    }
    if(!/[0-9]+/.test(dom.val())){
      this._showMsg("必须包含数字");
      return false;
    }
    return true;
  },

  // 检查注册密码
  _checkRegisterWord: function (dom) {
    if(dom.val() == ''){
      this._showMsg("请输入密码!");
      return false;
    }
    if(!/[a-zA-Z]+/.test(dom.val())){
      this._showMsg("密码必须包含字母!");
      return false;
    }
    if(!/[0-9]+/.test(dom.val())){
      this._showMsg("密码必须包含数字!");
      return false;
    }
    if(!/([a-zA-Z0-9]){6,18}/.test(dom.val())){
      this._showMsg("密码长度为6-18位!");
      return false;
    }
    return true;
  },

  init: function () {
    
  }
}

CONFIG.init();

/*
 * ///////////////封装ajax///////////////
 * type              请求的方式  默认为get
 * url               发送请求的地址
 * param             发送请求的参数
 * isShowLoader      是否显示loader动画  默认为false
 * dataType          返回JSON数据  默认为JSON格式数据
 * callBack          请求的回调函数
 */
(function () {
  function ajaxRequest(opts) {
    this.type = opts.type || "get";
    this.url = opts.url;
    this.param = Cookies.get("guid") ? $.extend({pwd_guid: Cookies.get("guid")}, opts.param) : opts.param || {};
    this.isShowLoader = opts.isShowLoader || false;
    this.dataType = opts.dataType || "jsonp";
    this.callBack = opts.callBack;
    this.init();
  }
  ajaxRequest.prototype = {
    //初始化
    init: function () {
      this.sendRequest();
    },
    //渲染loader
    showLoader: function () {
      if (this.isShowLoader) {
        var loader = '<div class="ajaxLoader"><div class="loader">加载中...</div></div>';
        $("body").append(loader);
      }
    },
    //隐藏loader
    hideLoader: function () {
      if (this.isShowLoader) {
        $(".ajaxLoader").remove();
      }
    },
    //发送请求
    sendRequest: function () {
      var self = this;
      $.ajax({
        type: this.type,
        url: this.url,
        data: this.param,
        dataType: this.dataType,
        beforeSend: this.showLoader(),
        success: function (res) {
          self.hideLoader();
          if (res != null && res != "") {
            if (self.callBack) {
              //Object.prototype.toString.call方法--精确判断对象的类型
              if (Object.prototype.toString.call(self.callBack) === "[object Function]") { 
                self.callBack(res);
              } else {
                console.log("callBack is not a function");
              }
            }
          }
        }
      });
    }
  };
  window.ajaxRequest = ajaxRequest;
})();