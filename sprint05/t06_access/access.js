module.exports = class Access {
    #mark_LXXXV
    get mark_LXXXV() {
        return this.#mark_LXXXV === undefined
            ? 'undefined'
            : this.#mark_LXXXV === null
                ? 'null'
                : this.#mark_LXXXV
    }
    set mark_LXXXV(value) {
        this.#mark_LXXXV = value
    }
}


//------TEST-----//


// const Access = require('./access');

// const o = new Access;
// console.log(o.mark_LXXXV);

// o.mark_LXXXV = 'null';
// console.log(o.mark_LXXXV);

// o.mark_LXXXV = 'INACTIVE';
// console.log(o.mark_LXXXV);