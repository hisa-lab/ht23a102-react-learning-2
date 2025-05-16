{
    class Rectangle {
        name = 'reactangle';
        sideA: number;
        sideB: number;

        constructor(sideA: number, sideB: number) {
            this.sideA = sideA;
            this.sideB = sideB;
        }

        getArea = () => this.sideA * this.sideB;
    }

    class Square extends Rectangle {
        readonly name = 'square';
        side: number;

        constructor(side: number) {
            super(side, side);
        }
    }

    const sq = new Square(2);
    console.log(sq.getArea());
}