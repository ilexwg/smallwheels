let WG = (function () {

  // 获取随机数字字符串, 每次获取到的结果都是指定位数的, 默认返回10位
  // 参数: 字符串的长度
  function getRandomNumber(length = 10) {
    let number = Math.random();
    number = number + new Array(length).fill(0).join('');
    return number.substr(2, 10);
  }

  // 数组和对象通用的forEach
  // 第一个参数: 一个数组/对象
  // 第二个参数: 回调函数(index, item)/(key, value)
  function forEach(obj, fn) {
    if (Array.isArray(obj)) { // 如果是数组
      obj.forEach((item, index) => {
        fn(index, item);
      });
    } else { // 如果是对象
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          fn(key, obj[key]);
        }
      }
    }
  }

  // 节流函数
  // 第一个参数: 想要节流的函数
  // 第二个参数: 函数执行上下文
  function throttle(method, context) {
    if (method.tId) {
      clearTimeout(method.tId);
    }
    method.tId = setTimeout(function() {
      method.call(context);
    }, 200);
  }

  //通用事件处理函数
  let event = {
    addHandler(ele, type, handler) {
      if (ele.addEventListener) {
        ele.addEventListener(type, handler, false);
      } else if (ele.attachEvent) {
        ele.attachEvent('on' + type, handler);
      } else {
        ele['on' + type] = handler;
      }
    },
    removeHandler(ele, type, handler) {
      if (ele.removeEventListener) {
        ele.removeEventListener(type, handler, false);
      } else if (ele.detachEvent) {
        ele.detachEvent('on' + type, handler);
      } else {
        ele['on' + type] = null;
      }
    }
  };

  return {
    getRandomNumber,
    forEach,
    throttle,
    event
  };
})();