// 定义观察者对象
class Observer {
  constructor() {
    this.observers = [];
  }

  // 订阅方法
  subscribe(fn) {
    this.observers.push(fn);
  }

  // 取消订阅方法
  unsubscribe(fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn);
  }

  // 通知方法
  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

// 定义被观察的对象
class Subject {
  constructor() {
    this.observers = new Observer();
    this.data = null;
  }

  // 设置数据并通知观察者
  setData(data) {
    this.data = data;
    this.observers.notify(data);
  }

  // 添加观察者
  addObserver(observer) {
    this.observers.subscribe(observer);
  }

  // 移除观察者
  removeObserver(observer) {
    this.observers.unsubscribe(observer);
  }
}

// 创建被观察的对象
const subject = new Subject();

// 创建多个观察者
const observer1 = (data) => {
  console.log('观察者1收到数据变化通知：', data);
};
const observer2 = (data) => {
  console.log('观察者2收到数据变化通知：', data);
};

// 添加观察者
subject.addObserver(observer1);
subject.addObserver(observer2);

// 设置数据，触发通知
subject.setData({ message: 'Data has changed!' });