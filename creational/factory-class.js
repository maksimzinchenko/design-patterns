class RobotFactory {
  constructor() {
    this.createRobot = function (robotType) {
      let robot;
      if (robotType === "R2D2") robot = new R2D2robot();
      else if (robotType === "WALLE") robot = new WALLErobot();
      robot.move = function () {
        return `The ${this._robotType} is moving.`;
      };

      return robot;
    };
  }
}

class R2D2robot {
  constructor() {
    this._robotType = "R2D2";
    this.hello = function () {
      return "***---*--*-***-***-***-";
    };
  }
}

class WALLErobot {
  constructor() {
    this._robotType = "WALLE";
    this.clear = function () {
      return "Ready to clean planet";
    };
  }
}

const factory = new RobotFactory();

const myR2D2 = factory.createRobot("R2D2");
const myWALLE = factory.createRobot("WALLE");

console.log(myR2D2.move());
console.log(myWALLE.move());
console.log(myR2D2.hello());
console.log(myWALLE.clear());
