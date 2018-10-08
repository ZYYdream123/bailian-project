
$(function(){
    $.ajax({
        "url": "json/listnav.json",
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
   
