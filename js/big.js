$(function(){
    $.ajax({
        "url": "../json/listnav.json",
        "type": "get",
        success:function(json){
            // console.log(json)
            var str = [" "," "," "," "," "," "," "," "," "," "," "," ","","",""];
            var atr = ["id","id1","id2","id3","id4","id5","id6","id7","id8","id9","id10","id11","id12","id13","id14"];
            for(let j=0;j<14;j++){
            for(var i=0;i<json[atr[j]].length;i++){
                // console.log(1);
            var item = json[atr[j]][i];  
            // console.log(atr[j]) 				
            str[j]+=`<li>
                    <a href="#">${item.a}</a>
                </li>`; 
                // console.log(str[j])
            }
            $(".container1").eq(j).html(str[j]);
            // console.log($(".container1").eq(j))
        }
     }
    })
})

$(function(){
    $(".showtime a").hover(function(){
        console.log(1)
        $(".Lnav").show();
    })
    $(".Lnav").hover(function(){
        $(".Lnav").show();
    },function(){
        $(".Lnav").hide();
    })
})
$(function(){
    $(".select .card li").mouseenter(function(){
        $(".small img").eq($(this).index()).show().siblings().hide()
        $(".big img").eq($(this).index()).show().siblings().hide()
        $(".wrap").show()
    })
})

$(function(){
    function Buy(){

    }
    $.extend(Buy.prototype,{
        init(){
            this.small = $(".small");
            this.graybox = $(".grayBox");
            this.big = $(".big");
            this.bigimg = $(".big").find("img");
            this.handleEvent()
        },
        handleEvent(){
            this.small.on("mouseenter",$.proxy(this.movein,this))
            this.small.on("mouseleave",$.proxy(this.moveout,this))
            this.small.on("mousemove",$.proxy(this.movepos,this))
        },
        movein(){
            this.graybox.fadeIn();
            this.big.fadeIn();
        },
        moveout(){
            this.graybox.fadeOut();
            this.big.fadeOut();
        },
        movepos(event){
            var evt = event || window.event;
            this.position = {
                x:evt.offsetX - this.graybox.width()/2,
                y:evt.offsetY - this.graybox.height()/2
            }
            this.move(this.position)
        },
        move(res){
            // console.log(res)
            var maxleft = this.small.width() - this.graybox.width();
            var maxtop = this.small.height() - this.graybox.height();
            res.x = res.x <=0?0:res.x;
            res.x = res.x >maxleft?maxleft:res.x;
            res.y = res.y <=0 ?0:res.y;
            res.y = res.y >= maxtop?maxtop:res.y;
            this.graybox.css({
                left:res.x,
                top:res.y
            })
            var smwprop = this.big.width()/this.graybox.width();
            var smhprop = this.big.height()/this.graybox.height();
            this.bigimg.width(smwprop*this.small.width())
            this.bigimg.height(smwprop*this.small.height())

            //图片移动
            //small move
            var dsmwidth = this.small.width()-this.graybox.width();
            var dsmheight = this.small.height() - this.graybox.height();

            var dsmpropw = parseInt(res.x/dsmwidth*100)/100;
            var dsmproph = parseInt(res.y/dsmheight*100)/100;
            // console.log(dsmpropw,dsmproph)
            var bigwidth = this.bigimg.width() - this.big.width();
            var bigheight = this.bigimg.height() - this.big.height();
            this.bigimg.css({
                left:-bigwidth*dsmpropw,
                top:-bigheight*dsmproph
            })
        }
    })
    var buy = new Buy()
    buy.init()
})

$(function(){
    var index=0;
    $("#left-c").click(function(){
        // console.log(1)
        index++;
        if(index >= 3){
            $(".card").stop()
            index = 3;
            // console.log(1)
        }else if(index >= 0){
            console.log(index)
            $(".card").stop().animate({
                left:-index*80
            },500)
        }
    })
    $("#right-c").click(function(){
        // console.log(1)
        index--;
        console.log(index)
        if(index < -3){
            $(".card").stop()
            $(".card").css({
                left:0
            })
            // console.log(1)
        }else if(index <=0){
            $(".card").stop().animate({
                left:-index*80
            },500)
            index--;
        }
    })
})

