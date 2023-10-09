/**
 * 函数节流是指在一个单位时间内，只能有一次触发事件的回调函数执行
 */

function throttle(fn, wait) {
  let pre = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();

    if (now - pre >= wait) {
      pre = Date.now();
      return fn.apply(context, args);
    }
  };
}
