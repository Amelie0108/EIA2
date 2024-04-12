namespace L02_Load {

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);

        let divs: NodeListOf<HTMLDivElement> = document.querySelectorAll("div");

        console.log(divs);

        divs[0].addEventListener("click",logInfo);
        divs[0].addEventListener("keyup",logInfo);
        divs[1].addEventListener("click",logInfo);
        divs[1].addEventListener("keyup",logInfo);

        let button:HTMLElement = <HTMLElement>document.querySelector("button");
        button.addEventListener("click", customEvent);
    }


    function customEvent() {
        let customEvent = new CustomEvent("hello");
        let button:HTMLElement = <HTMLElement>document.querySelector("button");
        button.dispatchEvent(customEvent)
        document.addEventListener("hello", <EventListener> newFunction)
      }
    
      function newFunction(_event:CustomEvent) {
        console.log(_event);
      }


    function setInfoBox(_event: MouseEvent): void {

        let x: number= _event.pageX
        let y: number= _event.pageY

        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");

        span.style.left = x + 10 + "px"
        span.style.top = y + 10 +"px"

        span.innerHTML = "mouseposition: " + x + " " + y + "target" + _event.target
    }

    function logInfo(_event: Event): void {
        
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
}