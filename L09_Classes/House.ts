namespace lake { 

    export class House {
        positionX: number;
        positionY: number;
        width: number;
        height: number;
        color: string;

        constructor(_positionX: number, _positionY: number, _width: number, _height: number, _color: string) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.width = _width;
            this.height = _height;
            this.color = _color;
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.positionX, this.positionY);

            crc2.fillStyle = this.color;
            crc2.fillRect(0, 0, this.width, this.height);

            crc2.fillStyle = "darkred";
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(this.width / 2, -this.height / 2);
            crc2.lineTo(this.width, 0);
            crc2.closePath();
            crc2.fill();

            this.drawWindow(this.width * 0.2, this.height * 0.2);

            this.drawWindow(this.width * 0.6, this.height * 0.2);

            this.drawDoor(this.width * 0.4, this.height * 0.6);

            this.drawChimney(this.width * 0.7, -this.height * 0.4);

            crc2.restore();
        }

        drawWindow(x: number, y: number): void {
            crc2.fillStyle = "lightblue";
            crc2.fillRect(x, y, this.width * 0.2, this.height * 0.3);
        }

        drawDoor(x: number, y: number): void {
            crc2.fillStyle = "brown";
            crc2.fillRect(x, y, this.width * 0.2, this.height * 0.4);
        }

        drawChimney(x: number, y: number): void {
            crc2.fillStyle = "gray";
            crc2.fillRect(x, y, this.width * 0.1, this.height * 0.3);
        }
    }
}