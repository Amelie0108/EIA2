namespace lake {

    export class Cloud {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        move() {
            this.x += 1
            if (this.x > crc2.canvas.width) {
                this.x = -100;
            }

        }

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y)

            crc2.fillStyle = "#D8EAF2";
            this.drawCloudPart(0, 0, 25);
            this.drawCloudPart(30, 20, 30);
            this.drawCloudPart(50, 10, 30);
            this.drawCloudPart(80, 10, 20);

            crc2.restore();

        }

        drawCloudPart(x: number, y: number, radius: number): void {
            crc2.beginPath();
            crc2.arc(x, y, radius, 0, 2 * Math.PI);
            crc2.fill();
    }
}
}