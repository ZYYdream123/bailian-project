$(function(){
    function Lunbo(selector){
        this.container = $(selector);
        this.index = 0;
        this.move()
    }
    Lunbo.prototype = {
        move(){
            clearInterval(this.timer)
            this.timer = setInterval(function(){
                this.sport()
            }.bind(this),1000)
        },
        sport(){
            // console.log(this.index)
            this.index++;
            if(this.index==6){
                this.index = 0
                this.move()
            }
            $(".imgs>li").eq(this.index).fadeIn().siblings().fadeOut()
        }
    }
    new Lunbo(".scrollImg")
})

