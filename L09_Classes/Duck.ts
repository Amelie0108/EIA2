namespace lake {

    export class Duck {
        x: number;
        y: number;
        color: string;
        
        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color

            this.draw();
        }
        move(){
            this.x += 1
            if (this.x > crc2.canvas.width) {
                this.x = 0;
            }
        }

        draw(): void{
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

            crc2.restore();
        }
    }

}