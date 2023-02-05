class Human {
  constructor(name, age) {
    this._name = name;
    this._age = age;

    this.getHumanInfo = function () {
      return `${this._name} is ${this._age} years old.`;
    };
  }
}

const Leo = new Human("Leonardo", "35");

console.log(Leo.getHumanInfo());
