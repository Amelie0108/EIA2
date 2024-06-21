"use strict";
var lake;
(function (lake) {
    class Duck extends lake.Moveable {
        speed;
        direction;
        target;
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
            this.speed = 2;
            this.direction = -1;
            this.target = null;
        }
        move() {
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
                if (this.x > lake.crc2.canvas.width || this.x < 0) {
                    this.direction *= -1;
                }
            }
        }
        draw() {
            lake.crc2.save();
            lake.crc2.beginPath();
            lake.crc2.translate(this.x, this.y);
            lake.crc2.fillStyle = this.color;
            lake.crc2.beginPath();
            lake.crc2.ellipse(0, 0, 15, 30, Math.PI / 2, 0, 2 * Math.PI);
            lake.crc2.fill();
            lake.crc2.fillStyle = this.color;
            lake.crc2.beginPath();
            lake.crc2.arc(-15, -20, 12, 0, 2 * Math.PI);
            lake.crc2.fill();
            lake.crc2.fillStyle = "#FFA500";
            lake.crc2.beginPath();
            lake.crc2.moveTo(-25, -20);
            lake.crc2.lineTo(-35, -18);
            lake.crc2.lineTo(-25, -15);
            lake.crc2.closePath();
            lake.crc2.fill();
            lake.crc2.fillStyle = "black";
            lake.crc2.beginPath();
            lake.crc2.arc(-20, -22, 2, 0, 2 * Math.PI);
            lake.crc2.fill();
            lake.crc2.closePath();
            lake.crc2.restore();
        }
    }
    lake.Duck = Duck;
})(lake || (lake = {}));
//# sourceMappingURL=Duck.js.map