/**
 * Created by kelly on 2017/6/15.
 */
$(document).ready(function(){
    var bgColor =localStorage.getItem('bgColor');
    if(bgColor){
        $("body").css({"background":bgColor});
    }
    $("#moredProd").mouseover(function(){
        $("#moredProd_panel").show(1000);
    });

    $("#moredProd1").mouseout(function(){
        $("#moredProd_panel").hide(1000);
    });


    $("#con_nav li").each(function(index){
        $(this).click(function(){
            $("#con_nav li.current").removeClass("current");
            $(this).addClass("current");
            $("div.n_cont").hide();
            $("div.n_cont").eq(index).show();
        });
        $("#cs0").click(function(){
            $("body").css({"background":"#ffffff"});
            localStorage.setItem("bgColor","#ffffff");
        });
        $("#cs1").click(function(){
            $("body").css({"background":"#FFCE44"});
            localStorage.setItem("bgColor","#FFCE44");
        });
        $("#cs2").click(function(){
            $("body").css({"background":"#7ACB43"});
            localStorage.setItem("bgColor","#7ACB43");
        });
        $("#cs3").click(function(){
            $("body").css({"background":"#D04323"});
            localStorage.setItem("bgColor","D04323");
        });

    });
});