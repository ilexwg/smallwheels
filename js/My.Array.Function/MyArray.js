function MyArray(length) {
  // single numeric argument means length
  if (typeof length === 'number' && arguments[1] === undefined) {
    this.length = length;
    return length;
  }

  // usual case
  this.length = arguments.length;
  for (var i = 0, len = arguments.length; i < len; i++) {
    this[i] = arguments[i];
  }
  return this;
}

MyArray.prototype = {
  constructor: MyArray,
  join: function join(glue) {
    var result = '';
    if (glue === undefined) {
      glue = ',';
    }
    for (var i = 0; i < this.length - 1; i++) {
      result += (this[i] === undefined) ? '' : this[i];
      result += glue;
    }
    result += (this[i] === undefined) ? '' : this[i];
    return result;
  },
  toString: function toString() {
    return this.join();
  },
  push: function push() {
    var len = arguments.length;
    for (var i = 0; i < len; i++) {
      this[this.length + i] = arguments[i];
    }
    this.length += len;
    return this.length;
  },
  pop: function pop() {
    var popped = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return popped;
  }
};


// testing codes below
var a = new MyArray(1, 2, 3, 'four');
console.log(a.toString());
console.log(a.length);
console.log(a[a.length-1]);
console.log(a.push('foo'));
console.log(a);
console.log(a.pop());
console.log(a);
console.log(a.join('*'));
