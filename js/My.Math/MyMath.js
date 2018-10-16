var MyMath = (function () {
  function isArray(ar) {
    return Object.prototype.toString.call(ar) === '[object Array]';
  }
  function sort(numbers) {
    return Array.prototype.sort.call(numbers, function (a, b) {
      if (a === b) {
        return 0;
      }
      return 1 * (a > b) - 0.5;
    });
  }
  return {
    PI:   3.141592653589793,
    E:    2.718281828459045,
    LN10: 2.302585092994046,
    LN2: 0.6931471805599453,
    max: function max() {
      var numbers = arguments;
      if (isArray(numbers[0])) {
        numbers = numbers[0];
      }
      return sort(numbers)[numbers.length - 1];
    },
    min: function min() {
      if (isArray(numbers)) {
        return this.min.applay(this, numbers[0]);
      }
      var min = numbers[0];
      for (var i = 1; i < numbers.length; i++) {
        if (min > numbers[i]) {
          min = numbers[i];
        }
      }
      return min;
    },
    rand: function rand(min, max, inclusive) {
      if (inclusive) {
        return Math.round(Math.random() * (max - min) + min);
      }
      return Math.floor(Math.random() * (max - min - 1) + min + 1);
    }
  };
})();

console.log(MyMath.PI);
console.log(MyMath.rand(1, 10));