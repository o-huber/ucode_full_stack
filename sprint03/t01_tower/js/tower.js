class Building {
  hasElevator;
  arcCapacity;
  height;
  getFloorHeight() {
    return this.height / this.floors;
  }
  constructor(floors, material, adress) {
    this.floors = floors;
    this.material = material;
    this.adress = adress;
  }
  toString() {
    return "";
  }
}
class Tower extends Building {
  constructor(floors, material, adress) {
    super(floors, material, adress);
  }
  toString() {
    return `Floors: ${this.floors}
Material: ${this.material}
Adress: ${this.adress}
Elevator: ${this.hasElevator ? "+" : "-"}
Arc reactor capacity: ${this.arcCapacity}
Height: ${this.height}
Floor height: ${this.getFloorHeight()}`;
  }
}


const starkTower = new Tower(93, "Different", "Manhattan, NY");
starkTower.hasElevator = true;
starkTower.arcCapacity = 70;
starkTower.height = 1130;
console.log(starkTower.toString());
/*
Floors: 93
Material: Different
Address: Manhattan, NY
Elevator: +
Arc reactor capacity: 70
Height: 1130
Floor height: Floor height: 12.150537634408602
*/