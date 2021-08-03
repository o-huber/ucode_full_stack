let firstUpper = (str) => {
    if (str === null) {
        return ''
    }
    str = str.trim()
    str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    return str
}

module.exports.firstUpper = firstUpper


//------TEST-----//
// const i = require('./index');

// console.log(`"testing String": ${i.firstUpper("testing String")}`);
// console.log(`"   testing   String":${i.firstUpper("   testing   String")}`);
// console.log(`"07": ${i.firstUpper("07")}`);
// console.log(`"":${i.firstUpper("")}`);
// console.log(`null:${i.firstUpper(null)}`);
// console.log(i.firstUpper('   ...I Will Rebuild Krypton Atop His Bones.'));
// console.log(i.firstUpper(' 300room FOR yoUr   DESTiny'));