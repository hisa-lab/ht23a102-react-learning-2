"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrisisCompact = exports.CosmicCompact = exports.Brooch = void 0;
exports.transform = transform;
var Brooch = /** @class */ (function () {
    function Brooch() {
        this.pentagram = 'Silver Crystal';
    }
    return Brooch;
}());
exports.Brooch = Brooch;
var CosmicCompact = /** @class */ (function () {
    function CosmicCompact() {
        this.silverCrystal = true;
        this.cosmicPower = true;
    }
    return CosmicCompact;
}());
exports.CosmicCompact = CosmicCompact;
var CrisisCompact = /** @class */ (function () {
    function CrisisCompact() {
        this.silverCrystal = true;
        this.moonChalice = true;
    }
    return CrisisCompact;
}());
exports.CrisisCompact = CrisisCompact;
function transform(item) {
    if (item instanceof Brooch) {
        console.log('Moon crystal power💎, make up!!');
    }
    else if (item instanceof CosmicCompact) {
        console.log('Moon cosmic power💖, make up!!!');
    }
    else if (item instanceof CrisisCompact) {
        console.log('Moon crisis🏆, make up!');
    }
    else if (item === undefined) {
        console.log('Moon prisim power🌙, make up!');
    }
    else {
        console.log('Item is fake...😖');
    }
}
