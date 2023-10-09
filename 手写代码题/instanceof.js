/**
 * 实现步骤：
 * 1. 首先获取类型的原型
 * 2. 获取对象的原型
 * 3. 一直循环判断对象的原型是否等于类型的原型，直到对象原型为null
 */

function MyInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;

  while (true) {
    if (!proto) return false;
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
}
