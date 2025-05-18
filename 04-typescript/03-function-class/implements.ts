{
    interface shape {
        readonly name: string;
        getArea: () => number;
    }

    interface Quadrangle {
        sideA: number;
        sideB?: number;
        sideC?: number;
        sideD?: number;
    }

    class Rectangle implements shape, Quadrangle {
        readonly name = 'rectangle';
        sideA: number;
        sideB: number;

        constructor(sideA: number, sideB: number) {
            this.sideA = sideA;
            this.sideB = sideB;
        }

        getArea() {
            return this.sideA * this.sideB;
        }
    }

    const ra = new Rectangle(10, 15);
    console.log(ra.getArea());
}