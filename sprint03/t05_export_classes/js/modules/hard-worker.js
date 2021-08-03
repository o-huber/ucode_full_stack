
class HardWorker {
    get age(){
        return this._years;
    }
    set age(value) {
        if(value >= 1 && value < 100){
            this._years = value;
        } 
    }
    get salary(){
      return this._salary
  }
    set salary(value){
      if(value >= 100 && value < 10000){
          this._salary = value;
      }
      
  }
  toObject() {
    return {name: this.name, age: this.age, salary: this.salary};
     
  }
}

export{HardWorker};