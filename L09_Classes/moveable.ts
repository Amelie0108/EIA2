namespace lake {

    export class Moveable {
        public x: number;
        public y: number;
        public color: string;

        constructor(_x:number, _y:number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;

            this.draw();
            this.move();
        }
        
        public move(){
            this.x -= 1
            if (this.x > crc2.canvas.width) {
                this.x = -100;
            }
        }

        public draw(): void {}
    }
}
