"use strict";
let $ = jQuery;
class onFocus {
    constructor() {
        let $this = this;
        $this.run = $this.init();
    }
    init() {
        let $this = this;
        $(document).ready(function () {
            $this.addFocusClass();
            $this.keyUpObserve();
            $this.clickLink();
        });
        return 0;
    }
    addFocusClass() {
        $(".form-control").focus(function () {
            $(this).prev().addClass("on-focus");
        }).focusout(function () {
            $(".form-label").removeClass("on-focus");
        });
    }
    keyUpObserve() {
        $(".form-control").keyup(function () {
            if ($(this).val().length > 0) {
                $(this).prev().addClass("filled");
            }
            else {
                $(this).prev().removeClass("filled");
            }
        });
    }
    clickLink() {
        $(".link").click(function () {
            let open = $(this).data("open");
            let close = $(this).data("close");
            $("#" + close).animate({
                'opacity': 0,
                'top': +100
            }, 500, function () {
                $(this).removeClass("open").addClass("close").removeAttr("style");
                $("#" + open).removeClass("close").addClass("open");
            });
        });
    }
}
let run = new onFocus();





window.addEventListener("resize", AutoScale); //Масштабируем страницу при растягивании окна

AutoScale(); //Масштабируем страницу после загрузки

function AutoScale()
{
    let width = window.innerWidth; //Ширина окна
    //Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width

    if(width > 1280)
    {
   	 ChangeScale("big");
    }
    else if(width <= 1280 && width > 720)
    {
   	 ChangeScale("normal");
    }
    else if(width < 720)
    {
   	 ChangeScale("small");
    }
}
