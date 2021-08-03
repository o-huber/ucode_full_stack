function Calculator(){
  this.result = 0
  this.init = (x) => {
     this.result = x;
     return this;
  }
  this.add = (x) => {
    this.result += x;
    return this;
  }
  this.mul = (x) => {
      this.result *= x;
      return this;
  }
  this.div = (x) => {
      this.result /= x;
      return this;
  }
  this.sub = (x) => {
      this.result -= x;
      return this;
  }
  this.alert = () => {
      setTimeout(() => {alert(calc.result)}, 5000)
  }
};

const calc = new Calculator();

console.log(
  calc
    .init(2)
    .add(2) // 2*2=4
    .mul(3) // 4*3=12
    .div(4) // 12/4=3
    .sub(2) // 3-2=1
    .result // 1
);

calc.alert();