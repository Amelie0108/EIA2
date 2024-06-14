namespace lake {

    export class Bee extends Moveable {

        constructor(_x: number, _y: number, _color: string) {
            super(_x,_y,_color)
        }

        public move() {
            this.x -= 1
            this.y -= 1
            if (this.x > crc2.canvas.width) {
                this.x = 0;
            }
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.x, this.y);

           
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.ellipse(0, 0, 10, 20, Math.PI / 2, 0, 2 * Math.PI);
            crc2.fill();

            crc2.fillStyle = "black";
            
            for (let i = -1; i <= 1; i++) {
                crc2.beginPath();
                crc2.rect(-5 + i * 7, -10, 4, 20);
                crc2.fill();
            }

            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.arc(-20, 0, 7, 0, 2 * Math.PI);
            crc2.fill();

            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(-22, -2, 2, 0, 2 * Math.PI);
            crc2.fill();

            crc2.fillStyle = "rgba(255, 255, 255, 0.5)";
            crc2.beginPath();
            crc2.ellipse(0, -10, 15, 8, Math.PI / 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.ellipse(0, -10, 15, 8, -Math.PI / 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
}