String.prototype.removeDuplicates = function() {
    const set = new Set(this.split(' '))
    return [...set].join(' ')
  }

let str = "Giant Spiders?  What's next? Giant Snakes?"
console.log(str)
// Giant Spiders?   What's next? Giant Snakes?
str = str.removeDuplicates();
console.log(str)
// Giant Spiders? What's next? Snakes?
str =  ". . . . ? . . . . . . . . . . . ";
console.log(str)
// . . . . ? . . . . . . . . . . . 
str = str.removeDuplicates()
console.log(str);
// .? 