let WG = (function () {

  // 可以同时处理数组和对象的 forEach
  function forEach(obj, fn) {
    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        fn(index, item);
      });
    } else {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          fn(key, obj[key]);
        }
      }
    }
  }

  // 返回长度一致的随机字符串
  function getRandom(width) {
    let random = Math.random();
    random = random + '0'.repeat(width);
    return random.slice(0, width);
  }

  // 格式化时间
  // 返回: '2019-01-02' 格式的时间
  formatDate(dt) {
    if (!dt) {
      dt = new Date();
    }

    const year = dt.getFullYear();
    let month = dt.getMonth() + 1;
    const day = dt.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    const date = `${year}-${month}-${day}`;

    return date;
  }

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

  // 给任意位的数字每3位添加逗号
  // 第一个参数: 想要转换的数字
  // return: 转换后的数字字符串
  // 遗留问题: 当数字很大的时候, 会以科学计数法显示数字, 此时会有问题
  function addComma(num) {
    if (typeof num === 'number') {
      num = String(num);
    }
    let length = num.length;
    let numOfCommas = parseInt(length / 4, 10);
    num = num.split('');
    for (var i = 0; i < numOfCommas; i++) {
      num.splice(length - 3 * (i + 1), 0, ',');
    }
    return num.join('');
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
    },
    getEvent(event) {
      return event ? event : window.event
    },
    getTarget(event) {
      return event.target || event.srcElement;
    },
    preventDefault(event) {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    },
    stopPropagation(event) {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    },
    getRelatedTarget(event) {
      if (event.relatedTarget) {
        return event.relatedTarget;
      } else if (event.toElement) {
        return event.toElement;
      } else if (event.fromElement) {
        return event.fromElement;
      } else {
        return null;
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