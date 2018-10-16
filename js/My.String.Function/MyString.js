function MyString(input) {
  var index = 0;

  // cast to string
  this._value = '' + input;

  // set all numeric properties for array access
  while (input[index] !== undefined) {
    this[index] = input[index];
    index++;
  }

  // add length property
  this.length = index;
}

MyString.prototype = {
  constructor: MyString,
  valueOf: function valueOf() {
    return this._value;
  },
  toString: function toString() {
    return this.valueOf();
  },
  charAt: function charAt(index) {
    return this[parseInt(index, 10) || 0];
  },
  concat: function concat() {
    var prim = this.valueOf();
    var len = arguments.length;
    for (var i = 0; i < len; i++) {
      prim += arguments[i];
    }
    return prim;
  },
  slice: function slice(from, to) {
    var result = '';
    var original = this.valueOf();
    if (from === undefined) {
      return original;
    }
    if (from > this.length) {
      return result;
    }
    if (from < 0) {
      from = this.length + from;
    }
    if (to === undefined || to > this.length) {
      to = this.length;
    }
    if (to < 0) {
      to = this.length + to;
    }
    for (var i = from; i < to; i++) {
      result += original[i];
    }
    return result;
  },
  split: function split(re) {
    var index = 0;
    var result = [];
    var original = this.valueOf();
    var match;
    var pattern = '';
    var modifiers = 'g';

    if (re instanceof RegExp) {
      pattern = re.source;
      modifiers += re.multiline ? 'm' : '';
      modifiers += re.ignoreCase ? 'i' : '';
    } else {
      pattern = re;
    }
    re = RegExp(pattern, modifiers);

    while (match = re.exec(original)) {
      result.push(this.slice(index, match.index));
      index = match.index + new MyString(match[0]).length;
    }
    result.push(this.slice(index));
    return result;
  }
};

// testing codes below

var s = new MyString('hello');

console.log(s.length);
console.log(s[0]);
console.log(s.toString());
console.log(s.valueOf());
console.log(s.charAt(1));
console.log(s.charAt(2));
console.log(s.charAt(3));
console.log(s.concat(' world!'));
console.log(s.slice(1, 3));
console.log(s.slice(0, -1));
console.log(s.split('e'));
console.log(s.split('l'));