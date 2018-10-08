$(function(){
    $.ajax({
        "url": "json/like2.json",
        "type": "get",
        success:function(res){
                console.log(res)
                var html = "";
                for(var i=0;i<res.img.length;i++){
                    html = html+`
                    <li>
                    <img src="${res.img[i].src}"/>
                    <p><a href="#">
                    ${res.img[i].title}     
                    </a></p>
                    <div><span>￥</span>${res.img[i].price}<a href="#">${res.img[i].collect}</a></div>
                    </li>
                 `;
                }
                $(".container-ul").html(html)
        }
    })
    
})