class cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        returnvolume.toFixed(4);
    }

}
const cyl = new cylinder(4, 5);
console.log(cyl.getVolume());