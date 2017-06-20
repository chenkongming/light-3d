// JavaScript Document
var score =0;
$("#t1").click(function(){
    var val=$('input:radio[name="wt1"]:checked').val();
    if(val==null){
        $("#li_tip1").css("display","block");
        $("#span_tip1").css("display","block");
    }else{
        $("#t1").attr("href","#div_t2");
        $("#div_t2").css("display","block");
        $("#div_t1").css("display","none");
        if(val=="04"){
            score=20;
        }else{
            score=0;
        }
    }
})

//第二题start
$("#t2").click(function(){
    var val=$('input:radio[name="wt2"]:checked').val();
    if(val==null){
        $("#li_tip2").css("display","block");
        $("#span_tip2").css("display","block");
    }else{
        $("#t2").attr("href","#div_t3");
        $("#div_t3").css("display","block");
        $("#div_t2").css("display","none");
        if(val=="11"){
            score +=20;
        }else{
            score +=0;
        }
    }
})

$("#prev1").click(function(){
    $("#div_t1").css("display","block");
    $("#div_t2").css("display","none");
})
//第二题end


//第三题start
$("#t3").click(function(){
    var val=$('input:radio[name="wt3"]:checked').val();
    if(val==null){
        $("#li_tip3").css("display","block");
        $("#span_tip3").css("display","block");
    }else{
        $("#t3").attr("href","#div_t4");
        $("#div_t4").css("display","block");
        $("#div_t3").css("display","none");
        if(val=="23"){
            score +=20;
        }else{
            score +=0;
        }
    }
})

$("#prev2").click(function(){
    $("#div_t2").css("display","block");
    $("#div_t3").css("display","none");
})
//第三题end

//第4题start
$("#t4").click(function(){
    var val=$('input:radio[name="wt4"]:checked').val();
    if(val==null){
        $("#li_tip4").css("display","block");
        $("#span_tip4").css("display","block");
    }else{
        $("#t4").attr("href","#div_t5");
        $("#div_t5").css("display","block");
        $("#div_t4").css("display","none");
        if(val=="32"){
            score +=20;
        }else{
            score +=0;
        }
    }
})

$("#prev3").click(function(){
    $("#div_t3").css("display","block");
    $("#div_t4").css("display","none");
})
//第4题end


//第5题start
$("#t5").click(function(){
    var val=$('input:radio[name="wt5"]:checked').val();
    var link80="https://wap.koudaitong.com/v2/goods/26yytkr9vpij3";
    var link100="https://wap.koudaitong.com/v2/goods/2ov6oykcx93xr";
    if(val==null){
        $("#li_tip5").css("display","block");
        $("#span_tip5").css("display","block");
    }else{
        $("#t5").attr("href","#div_t6");
        $("#div_t6").css("display","block");
        $("#div_t5").css("display","none");
        if(val=="44"){
            score +=20;
        }else{
            score +=0;
        }
		var link80="https://wap.koudaitong.com/v2/goods/26yytkr9vpij3";
var link100="https://wap.koudaitong.com/v2/goods/2ov6oykcx93xr"
$("#score").html(score);
	switch (score){
		case 80:
		$("#tips1").text("恭喜您！");
		$("#tips2").text("获取我们为您精心准备的二等奖！");
		$("#link").attr("href",link80);
		break;
		case 100:
		$("#tips1").text("恭喜您！");
		$("#tips2").text("获取我们为您精心准备的一等奖！");
		$("#link").attr("href",link100);
		break;
		 default:
		 $("#tips1").text("很遗憾！");
		$("#tips2").text("感谢您的参与！祝您生活愉快！");
		$("#tips3").css("display","none");
		 break;
		}
	  
			
    }
})




$("#prev4").click(function(){
    $("#div_t4").css("display","block");
    $("#div_t5").css("display","none");
})

$("#intogame").click(function(){ 
$("#into_game").css("display","none");
$("#competition").css("display","block");
})