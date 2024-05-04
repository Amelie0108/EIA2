namespace art {
    window.addEventListener("load", handleLoad);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas")
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")

        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";

        let strokeColor: string;
        let fillColor: string;

        drawBackground();


        for (let i: number = 0; i < 4; i++) {
            for (let z: number = 0; z < 3; z++) {
                let x: number = Math.random() * 200;
                let y: number = (Math.random() * i * 50) * z;
                

                switch (i) {
                    case 0:
                        strokeColor = "#686461";
                        break;
                    case 1:
                        strokeColor = "	#9E9B98";
                        break;
                    case 2:
                        strokeColor = "#E1DCE0";
                        break;
                    case 3:
                        strokeColor = "#BACBDB";
                        break;
                    default:
                        strokeColor = "#CEAD6D";
                }

                switch (z) {
                    case 0:
                        fillColor = "#90AFC5";
                        break;
                    case 1:
                        fillColor = "#336B87";
                        break;
                    case 2:
                        fillColor = "#2A3132";
                        break;
                    default:
                        fillColor = "#763626";
                }


                drawRectangle1(x, y, strokeColor, fillColor);
                drawRectangle2(x, y, strokeColor, fillColor);
                
            }
        }
    }

    function drawRectangle1(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;

        crc2.strokeRect(_x, _y, 30, 30);
        crc2.fillRect(_x, _y, 30, 30);
    }

    function drawRectangle2(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;

        crc2.strokeRect(_x, _y, 10, 10);
        crc2.fillRect(_x, _y, 10, 10);
    }

    function drawBackground() {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height)

        gradient.addColorStop(0, "blue");
        gradient.addColorStop(0.4, "lightblue")
        gradient.addColorStop(1, "white")

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, window.innerWidth, window.innerHeight)
    }
}