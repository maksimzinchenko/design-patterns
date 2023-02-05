const transformer = {
  hasSpark: true,
  transformToCar() {
    return "Transformation to car begins...";
  },
  transformToRobot() {
    return "Transformation to robot begins..";
  },
};

const myOptimusPrime = Object.create(transformer, { isPrime: { value: true } });

console.log(myOptimusPrime.__proto__ === transformer);
