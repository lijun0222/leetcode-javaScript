/**
 * 防抖函数
 * 事件触发n秒后再执行回调，如果在n秒内事件又被触发，则重新计时，避免用户过多点击请求
 */

function debounce(fn, wait) {
  let timer = null;

  return function () {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}


