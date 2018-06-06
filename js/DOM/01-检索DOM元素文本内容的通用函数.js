// 由于有些浏览器不支持innerText所以只能使用nodeValue来检索元素的文本内容
let getText = function (e) {
  let text = '';
  // 如果e已经是一个文本节点了,那么e.childNodes为undefined,就让e保持原样就好
  e = e.childNodes || e;
  for (let i = 0; i < e.length; i++) {
    text += e[i].nodeType != 1 ? e[i].nodeValue : getText(e[i]);
  }
  return text;
}