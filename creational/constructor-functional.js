function Human(name, age) {
  this.name = name;
  this.age = age;

  this.getHumanInfo = function () {
    return this.name + ". " + this.age + " years old.";
  };
}

const Leo = new Human("Leonardo", "35");

console.log(Leo.getHumanInfo());
