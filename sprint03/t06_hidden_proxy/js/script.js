const validator = {
    get(target, PropertyKey) {
        if(PropertyKey in target){
           console.log(`Trying to access the property '${PropertyKey}' ...`)
           return  target[PropertyKey] 
        }
        return false
    },
    set(target, PropertyKey, value) {
        console.log(`Setting value '${value}' to '${PropertyKey}'`)
        target[PropertyKey] = value
        if (PropertyKey === 'age') {
            if (!Number.isInteger(value)) {
                throw new Error(`Uncaught TypeError: The '${PropertyKey}' is not an integer`)
            }
            if (value > 200 || value == 0) {
                throw new Error(`Uncaught RangeError: The '${PropertyKey}' is invalid`)
            }
        }
    }
};

let person = new Proxy({}, validator)

person.age = 100;
// Setting value '100' to 'age'
console.log(person.age)
// Trying to acess the property 'age' ...
// 100
person.gender = 'male';
// Setting value 'male' to 'gender'
person.age = 'young';
// Uncaught TypeError: The age is not an integer
person.age = 330;
// Uncaught RangeError: The age is invalid
