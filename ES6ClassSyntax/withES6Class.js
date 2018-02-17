class Car{
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

var myCar = new Car('blue');

console.log(myCar.getColor());