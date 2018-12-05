let WG = (function () {

  // 获取随机数字字符串, 每次获取到的结果都是指定位数的, 默认返回10位
  function getRandomNumber(length = 10) {
    let number = Math.random();
    number = number + new Array(length).fill(0).join('');
    return number.substr(2, 10);
  }

  return {
    getRandomNumber
  };
})();