/**
 * call函数的实现步骤：
 * 1. 判断调用对象是否为函数
 * 2. 判断传入上下文是否存在，不存在则设置为window
 * 3. 处理传入的参数，截取第一个参数后所有参数
 * 4. 将函数作为上下文对象的一个属性
 * 5. 使用上下文对象来调用这个方法，并保存返回结果
 * 6. 删除刚才新增的属性
 * 7. 返回结果
 */

Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    console.error("type error");
  }
  let args = [...arguments].slice(1);
  let result = null;
  context = context || window;
  context.fn = this;
  result = context.fn(...args);
  delete context.fn;
  return result;
};
