/**
 * 实现发布-订阅模式
 */

class EventCenter {
  // 1. 定义事件容器
  constructor() {
    this.handlers = {};
  }
  // 2. 添加事件方法，参数：事件名 事件方法
  addEventListener(type, handler) {
    // 创建新数组容器
    if (!this.handlers[type]) {
      this.handlers[type] = [];
    }
    this.handlers[type].push(handler);
  }

  // 3. 触发事件
  dispatchEvent(type, params) {
    if (!this.handlers[type]) {
      return new Error("该事件未注册");
    }
    this.handlers[type].forEach((handler) => {
      handler(...params);
    });
  }

  // 4. 事件移除
  removeEventListener(type, handler) {
    if (!this.handler[type]) {
      return new Error("事件无效");
    }
    if (!handler) {
      delete this.handlers[type];
    } else {
      const index = this.handlers[type].findIndex((el) => el === handler);
      if (index === -1) {
        return new Error("无该绑定事件");
      }
      this.handlers[type].splice(index, 1);
      if (this.handlers[type].length === 0) {
        delete this.handlers[type];
      }
    }
  }
}
