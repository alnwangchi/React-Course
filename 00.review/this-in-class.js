//  class 中的方法都會是"嚴格模式"
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };

  log() {
    console.log(this);
  }
}

console.log(new Person('AA',9).log()); // undefined

// class 非傳入的變動值 可以直接賦值在 constructor 外
class Car {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
  // 如果在 class 中直接賦值及代表對該實例添加一個名為 wheel 的屬性值為 4
  wheel = 4
}

const c1 = new Car('Toyota', 500000)
const c2 = new Car('Benz', 1000000)
console.log(c1);
console.log(c2);