/**
 * 用的单例模试，
 * */

$(document).ready(function() {

	var bgcolor = localStorage.getItem('bgColor');
	if(bgcolor) {
		$("body").css({
			"background": bgcolor
		});
	}

	var index = {
		init: function(argument) {
			var me = this;
			me.render();
			me.bind();
		},
		render: function() {
			var me = this;
			me.btn = $("#moredProd");
			me.hidbtn = $("#moredProd1");
			me.li = $("#con_nav li");
		},
		bind: function() {
			var me = this;
			me.btn.mouseover(function() {
				$("#moredProd_panel").show(1000);
			});
			me.hidbtn.mouseout(function() {
				$("#moredProd_panel").hide(1000);
			});
			me.li.each(function() {
				$(this).click(function() {
					$("#con_nav li.current").removeClass("current");
					$(this).addClass("current");
					$("div.n_cont").hide();
					$("div.n_cont").eq(index).show();
				});
				$("#cs0").click(function() {
					$("body").css({
						"background": "#ffffff"
					});
					localStorage.setItem("bgColor", "#ffffff");
				});
				$("#cs1").click(function() {
					$("body").css({
						"background": "#FFCE44"
					});
					localStorage.setItem("bgColor", "#FFCE44");
				});
				$("#cs2").click(function() {
					$("body").css({
						"background": "#7ACB43"
					});
					localStorage.setItem("bgColor", "#7ACB43");
				});
				$("#cs3").click(function() {
					$("body").css({
						"background": "#D04323"
					});
					localStorage.setItem("bgColor", "D04323");
				});

			});
		}
	};
	index.init();
});