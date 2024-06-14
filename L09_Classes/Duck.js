"use strict";
var lake;
(function (lake) {
    class Duck extends lake.Moveable {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
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