"use strict";
var lake;
(function (lake) {
    class Bee {
        x;
        y;
        color;
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.draw();
        }
        move() {
            this.x += 1;
            this.y -= 1;
            if (this.x > lake.crc2.canvas.width) {
                this.x = 0;
            }
        }
        draw() {
            lake.crc2.save();
            lake.crc2.beginPath();
            lake.crc2.translate(this.x, this.y);
            lake.crc2.fillStyle = "yellow";
            lake.crc2.beginPath();
            lake.crc2.ellipse(0, 0, 10, 20, Math.PI / 2, 0, 2 * Math.PI);
            lake.crc2.fill();
            lake.crc2.fillStyle = "black";
            for (let i = -1; i <= 1; i++) {
                lake.crc2.beginPath();
                lake.crc2.rect(-5 + i * 7, -10, 4, 20);
                lake.crc2.fill();
            }
            lake.crc2.fillStyle = "yellow";
            lake.crc2.beginPath();
            lake.crc2.arc(-20, 0, 7, 0, 2 * Math.PI);
            lake.crc2.fill();
            lake.crc2.fillStyle = "black";
            lake.crc2.beginPath();
            lake.crc2.arc(-22, -2, 2, 0, 2 * Math.PI);
            lake.crc2.fill();
            lake.crc2.fillStyle = "rgba(255, 255, 255, 0.5)";
            lake.crc2.beginPath();
            lake.crc2.ellipse(0, -10, 15, 8, Math.PI / 4, 0, 2 * Math.PI);
            lake.crc2.fill();
            lake.crc2.beginPath();
            lake.crc2.ellipse(0, -10, 15, 8, -Math.PI / 4, 0, 2 * Math.PI);
            lake.crc2.fill();
            lake.crc2.restore();
        }
    }
    lake.Bee = Bee;
})(lake || (lake = {}));
//# sourceMappingURL=Bee.js.map