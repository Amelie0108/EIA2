namespace lake {

     export class Cloud extends Moveable {

        constructor(_x: number, _y: number, _color: string) {
            super(_x,_y,_color)
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y)

            crc2.fillStyle = "#D8EAF2";
            this.drawCloudPart(0, 0, 25);
            this.drawCloudPart(30, 20, 30);
            this.drawCloudPart(50, 10, 30);
            this.drawCloudPart(80, 10, 20);

            crc2.restore();

        }

        public drawCloudPart(x: number, y: number, radius: number): void {
            crc2.beginPath();
            crc2.arc(x, y, radius, 0, 2 * Math.PI);
            crc2.fill();
    }
}
}