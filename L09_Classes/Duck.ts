namespace lake {

    export class Duck extends Moveable {

        speed: number;
        direction: number;
        target: Vector | null;

        constructor(_x: number, _y: number, _color: string) {
            super(_x,_y,_color)
            this.speed = 2;
            this.direction = -1
            this.target = null;
        }


        public move(): void {
            if (this.target) {
                let dx = this.target.x - this.x;
                let dy = this.target.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance > this.speed) {
                    this.x += (dx / distance) * this.speed;
                    this.y += (dy / distance) * this.speed;
                } 
                else {
                    this.x = this.target.x;
                    this.y = this.target.y;
                    this.target = null;
                }
            }
            else {
            this.x += this.direction * this.speed;

            if (this.x > crc2.canvas.width || this.x < 0) {
                this.direction *= -1; 
            }
        }
    }


        public draw(): void{
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.x, this.y);

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.ellipse(0, 0, 15, 30, Math.PI / 2, 0, 2 * Math.PI);
            crc2.fill();

          
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(-15, -20, 12, 0, 2 * Math.PI);
            crc2.fill();

            
            crc2.fillStyle = "#FFA500"; 
            crc2.beginPath();
            crc2.moveTo(-25, -20);
            crc2.lineTo(-35, -18);
            crc2.lineTo(-25, -15);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.arc(-20, -22, 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            crc2.restore();
        }
    }

}