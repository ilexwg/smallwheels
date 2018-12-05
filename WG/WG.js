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

  return {
    getRandomNumber,
    forEach
  };
})();