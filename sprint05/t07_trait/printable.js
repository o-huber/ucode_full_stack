let print = () => {
    console.log([
        '2 x Repulsors',
        'M134 7.62mm Minigun',
        '2 x FN F2000 Tacticals',
        'Sidewinder"Ex-Wife" Self-Guided Missile',
        'M24 Shotgun',
        'Milkor MGL 40mm Grenade Launcher'
    ].join('\n'));
}

module.exports.print = print;

//------TEST----//
// const MarkII = require('./markii');
// const Printable = require('./printable');

// class WarMachine extends MarkII {}
// Object.assign(WarMachine.prototype, Printable);

// const wm = new WarMachine;
// wm.print()