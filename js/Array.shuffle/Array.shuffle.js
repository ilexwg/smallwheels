if (typeof Array.prototype.shuffle !== 'function') {
  Array.prototype.shuffle = function () {
    return this.sort(function () {
      return Math.random() - 0.5;
    });
  };
}

// testing codes below
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a.shuffle();
console.log(a);