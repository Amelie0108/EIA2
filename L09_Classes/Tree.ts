namespace lake {

     export class Tree extends Moveable {
    
        constructor (_x:number, _y:number, _color: string){
            super (_x, _y, _color)
        }

        draw(): void {
            
            crc2.save();
            crc2.translate(this.x, this.y);

         
            crc2.fillStyle = "#583E26";
            crc2.fillRect(-10, 40, 20, -70);

           
            crc2.fillStyle = this.color;
            this.drawFoliage(0, -40, 35);
            this.drawFoliage(-20, -20, 30);
            this.drawFoliage(20, -20, 30);
            this.drawFoliage(0, -50, 20);

            crc2.restore();
        }

        drawFoliage(x: number, y: number, radius: number): void {
            crc2.beginPath();
            crc2.arc(x, y, radius, 0, 2 * Math.PI);
            crc2.fill();
        }
    }
}