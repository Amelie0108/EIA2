"use strict";
var lake;
(function (lake) {
    class Moveable {
        x;
        y;
        color;
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        move() {
            this.x -= 1;
            if (this.x < 0) {
                this.x = lake.crc2.canvas.width;
            }
        }
        draw() { }
    }
    lake.Moveable = Moveable;
})(lake || (lake = {}));
//# sourceMappingURL=moveable.js.map