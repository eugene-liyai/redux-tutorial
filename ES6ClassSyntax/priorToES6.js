function Car(color) {
  this.color = color;
};

Car.prototype.getColor = function () {
  return this.color;
};

// to use this we instantiate the car with a color
var myCar = new Car('blue');

console.log(myCar.getColor());