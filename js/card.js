$(function(){
    $(".right-3 ul li").mouseenter(function(){
        $(this).addClass("hover").siblings().removeClass("hover");
        $(".right-3 ol li").eq($(this).index()).show().siblings().hide()
    })
    
    $(".right-4 li a").mouseenter(function(){
        $(".right-4 li a").removeClass("hover")
        $(this).addClass("hover")
    })    
})

$(function(){
    $(".scale-img").mouseenter(function(){
        // console.log(1)
        $("#big").stop().animate({
            left:-10,
            width:"270px",
            height:"300px"
        },500)
    })
    $(".scale-img").mouseleave(function(){
    //  console.log(1)
     $("#big").stop().animate({
          width:"224px",
          height:"250px"
     },500)
    })
})
$(function(){
    $(".uc").width(2200)
    var index=0;
    $("#left-c").click(function(){
        // console.log(1)
        index=index+6;
        if(index >= 12){
            $(".uc").stop()
            index = 0;
            // console.log(1)
            $("#left-c").toggle()
        }else if(index == 6){
            console.log(index)
            $(".uc").stop().animate({
                left:-index*160
            },500)
            $("#left-c").toggle()
            $("#right-c").show()
        }
    })
    $("#right-c").click(function(){
        // console.log(1)
        console.log(index)
        if(index == 0){
            $(".uc").stop()
            index = 0;
            // console.log(1)
        }else if(index == index){
            $(".uc").stop().animate({
                left:0
            },500)
            $("#left-c").show()
        }
    })
})

//f3-ul

$(function(){
    $(".f3-ul").width(1220);
    function img(){
        this.index = 0;
        this.init()
    }
    img.prototype = {
        init(){
            setInterval($.proxy(function(){
                this.change(),
                this.slice()
            },this),1000)
        },
        slice(){

        },
        change(){
            this.index++;
            if(this.index == 3){
                $(".f3-ul").css({
                    left:0
                })
                this.index=1;
            }
            $(".f3-ul").stop().animate({
                left:-this.index*305
            },500)
        }
    }
    new img()
})


//f4-fruit
$(function(){
    $(".f4-list").width(1220);
    function img(){
        this.index = 0;
        this.init()
    }
    img.prototype = {
        init(){
            setInterval($.proxy(function(){
                this.change(),
                this.slice()
            },this),3000)
        },
        slice(){
            
        },
        change(){
            this.index++;
            if(this.index == 4){
                $(".f4-list").css({
                    left:0
                })
                this.index=1;
            }
            $(".f4-list").stop().animate({
                left:-this.index*305
            },400)
        }
    }
    new img()
})


// f6

$(function(){
    $(".f6-bot a").mouseenter(function(){
        $(this).stop().animate({
            opacity:0.3
        },300)
        $(this).siblings().animate({
            opacity:1
        },300)
    })
})

// xiding

$(function(){
    var offsetTop = $(".in-top").offset().top
    $(document).scroll(function(){
        if($(document).scrollTop() > offsetTop){
            if($(".in-top").hasClass("active")) return; 
            $(".in-top").addClass("active");
            $(".in-top").show();
        }else{
            $(".in-top").hide();
            if(!$(".in-top").hasClass("active")) return; 
            $(".in-top").removeClass("active");
        }
    })
})

// floor
$(function(){
    $(window).scroll(function(){
        // console.log( $(this).scrollTop() )
        if($(this).scrollTop() >= 1000) {
            $(".floor").show();
        } else {
            $(".floor").hide();
        }
            var index = Math.floor(($(this).scrollTop() - 1000)/430);
            console.log(index);
            $(".floor-list li").siblings().children().removeClass("hover")
            $(".floor-list li a").eq(index).addClass("hover").siblings().removeClass("hover");     
    })
    $(".floor-list li:last").click(function(){
        $("html,body").animate({scrollTop:0}, 1000);
    }) 
})

// 右侧nav

$(function(){
	$(".one-none").hover(function(){
		$(".user").css({"display":"block"})
	},function(){
		$(".user").css({"display":"none"})
	})
	
	$(".two-none").hover(function(){
		$(".dong-one").css({"display":"block"}).animate({"left":-90},300)
	},function(){
		$(".dong-one").css({"display":"none"}).animate({"left":-134},300)
	})
	
	$(".there-none").hover(function(){
		$(".dong-two").css({"display":"block"}).animate({"left":-90},300)
	},function(){
		$(".dong-two").css({"display":"none"}).animate({"left":-134},300)
	})
	
	$(".four-none").hover(function(){
		$(".dong-there").css({"display":"block"}).animate({"left":-90},300)
	},function(){
		$(".dong-there").css({"display":"none"}).animate({"left":-134},300)
	})
	$(".five-none").hover(function(){
		$(".dong-four").css({"display":"block"})
	},function(){
		$(".dong-four").css({"display":"none"})
	})
	
	$(".six-none").hover(function(){
		$(".dong-five").css({"display":"block"})
	},function(){
		$(".dong-five").css({"display":"none"})
	})
	
	$(".seven-none").hover(function(){
		$(".dong-six").css({"display":"block"}).animate({"left":-90},300)
	},function(){
		$(".dong-six").css({"display":"none"}).animate({"left":-134},300)
	})
	
	
})
//置顶
$(window).scroll(function(){
	if($(document).scrollTop()>=1000){
		$(".seven-none").show();
		$(".seven-none").click(function(){
			$("html,body").animate({scrollTop:0},3000)
			setTimeout(function(){
				window.location.reload()
			},3000)
		})
	}else{
		$(".seven-none").hide();
		
	}
})
//位置改变
$(function(){
	$(".wei").click(function(){
		$(".fex-right").animate({"right":300},1,function(){
			$(".car").fadeIn()
		})
		
		
	})
	$("html").not(".car").click(function(){
		$(".fex-right").css({"right":0})
		$(".car").fadeOut()
    })
})


