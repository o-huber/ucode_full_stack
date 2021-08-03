/* -------------------------- WeakSet --------------------------  */
let guestList = new WeakSet();

let man1 = ["man_1"];
let man2 = ["man_2"];
let man3 = ["man_3"];
let man4 = ["man_4"];
let man5 = ["man_5"];

guestList.add(man1)
        .add(man2)
        .add(man3);

console.log(guestList.has(man1));

guestList.delete(man1);

console.log(guestList.has(man1));





/* -------------------------- WeakMap --------------------------  */
let menu = new WeakMap();

let borsh = { name: "borch"};
let sup = { name: "sup"};
let pasta = { name: "pasta"};
let makaroni = { name: "makaroni"};
let super_rulet = { name: "super_rulet"};

menu.set(borsh, "30$")
    .set(sup, "120$")
    .set(pasta, "130$")
    .set(makaroni, "150$")
    .set(super_rulet, "170$");


console.log(menu.get(borsh));







/* -------------------------- MAP --------------------------  */
let bankVault = new Map();

bankVault.set(1, "110$")
        .set(2, "120$")
        .set(3, "130$")
        .set(4, "140$")
        .set(5, "150$");

bankVault.forEach((value, valueAgain, set) => {
    console.log(value);
});

bankVault.delete(3);

bankVault.forEach((value, valueAgain, set) => {
    console.log(value);
});

console.log(bankVault.size);





/* -------------------------- SET --------------------------  */
let coinCollection = new Set();

coinCollection.add("1992 year")
            .add("1232 year")
            .add("2992 year")
            .add("1292 year")
            .add("1196 year");

coinCollection.forEach((value, valueAgain, set) => {
    console.log(value);
});

coinCollection.clear();

coinCollection.forEach((value, valueAgain, set) => {
    console.log(value);
});


