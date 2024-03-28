// 装饰器函数，它的第一个参数是目标类
function classDecorator1(target) {
  target.hasDecorator1 = true;
  return target;
}

function classDecorator2(bool) {
  return function (target) {
    target.hasDecorator2 = bool;
    return target;
  };
}

// 将装饰器“安装”到Button类上
@classDecorator1
@classDecorator2(false)
class Button {
  // Button类的相关逻辑
}

// 验证装饰器是否生效
console.log(
  "Button 是否被装饰了：",
  Button.hasDecorator1,
  Button.hasDecorator2
);
