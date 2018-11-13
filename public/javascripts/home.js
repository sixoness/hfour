$().ready(function () {
	var basePath = "";
	var jsPath = "";
	$(function () {
		var location = (window.location + '').split('/');
		jsPath = location[0] + '//' + location[2];
	});
	//计算导航的宽度 并设置值
	$(function () {
		var win_width = $(window).width();
		if ($(window).width() >= 980) {
			$(".g_out .g_bg2").css("width", "1200px");
			$(".g_out").css("width", "100%");
		} else {
			$(".g_out .g_bg2").css("width", "980px");
			$(".g_out").css("width", "980px");
		}
	});
	//窗口改变时 重新计算导航的宽度 并设置值
	window.onresize = function () {
		var win_width = $(window).width();
		if ($(window).width() >= 980) {
			$(".g_out .g_bg2").css("width", "1200px");
			$(".g_out").css("width", "100%");
		} else {
			$(".g_out .g_bg2").css("width", "980px");
			$(".g_out").css("width", "980px");
		}
	}
	//模拟select的处理js
	$(function () {
		$.ajaxSetup({
			cache: false //关闭AJAX相应的缓存
		});

		$(".arrow").click(function () {
			var arrow = $(this),
				arrow_box = arrow.parent(".arrow_box"),
				arrow_i = arrow.find("i"),
				arrow_ul = arrow_box.find(".arrow_ul"),
				arrow_span = arrow_box.find(".select_value"),
				hidden_input = arrow_box.find(".hidden_input"),
				box = arrow_box.parent(".box"),
				by_day = $("#byDay");

			if (by_day.attr("type") != undefined) {
				if (document.getElementById("byDay").checked == true) {
					$('#day').show();
					$('#moth').hide();
					var cla = arrow_i.attr("class");
					if (cla == "arrow_down") {
						arrow_i.removeClass("arrow_down").addClass("arrow_up");
						$('#day').css("display", "block").mouseleave(function () {
							$(this).css("display", "none");
							box.css("z-index", "0");
							arrow_i.removeClass("arrow_up").addClass("arrow_down");
						});
						box.css("z-index", "101");
						$('#day').find("li").click(function () {
							var text = $(this).text();
							var value = $(this).attr("value");
							$('#day').css("display", "none");
							arrow_box.css("z-index", "0");
							arrow_i.removeClass("arrow_up").addClass("arrow_down");
							arrow_span.text(text);
							hidden_input.val(value);
						});
					} else {
						arrow_i.removeClass("arrow_up").addClass("arrow_down");
						$('#day').css("display", "none");
						box.css("z-index", "0");
					}

					arrow_box.mouseleave(function () {
						$('#day').css("display", "none");
						box.css("z-index", "0");
						arrow_i.removeClass("arrow_up").addClass("arrow_down");
					});
				} else {
					$('#day').hide();
					$('#moth').show();
					var cla = arrow_i.attr("class");
					if (cla == "arrow_down") {
						arrow_i.removeClass("arrow_down").addClass("arrow_up");
						$('#moth').css("display", "block").mouseleave(function () {
							$(this).css("display", "none");
							box.css("z-index", "0");
							arrow_i.removeClass("arrow_up").addClass("arrow_down");
						});
						box.css("z-index", "101");
						$('#moth').find("li").click(function () {
							var text = $(this).text();
							var value = $(this).attr("value");
							$('#moth').css("display", "none");
							arrow_box.css("z-index", "0");
							arrow_i.removeClass("arrow_up").addClass("arrow_down");
							arrow_span.text(text);
							hidden_input.val(value);
						});
					} else {
						arrow_i.removeClass("arrow_up").addClass("arrow_down");
						$('#moth').css("display", "none");
						box.css("z-index", "0");
					}

					arrow_box.mouseleave(function () {
						$('#moth').css("display", "none");
						box.css("z-index", "0");
						arrow_i.removeClass("arrow_up").addClass("arrow_down");
					});
				}
			} else {
				var cla = arrow_i.attr("class");
				if (cla == "arrow_down") {
					arrow_i.removeClass("arrow_down").addClass("arrow_up");
					arrow_ul.css("display", "block").mouseleave(function () {
						$(this).css("display", "none");
						box.css("z-index", "0");
						arrow_i.removeClass("arrow_up").addClass("arrow_down");
					});
					box.css("z-index", "101");
					arrow_ul.find("li").click(function () {
						var text = $(this).text();
						var value = $(this).attr("value");
						arrow_ul.css("display", "none");
						arrow_box.css("z-index", "0");
						arrow_i.removeClass("arrow_up").addClass("arrow_down");
						arrow_span.text(text);
						hidden_input.val(value);
					});
				} else {
					arrow_i.removeClass("arrow_up").addClass("arrow_down");
					arrow_ul.css("display", "none");
					box.css("z-index", "0");
				}

				arrow_box.mouseleave(function () {
					arrow_ul.css("display", "none");
					box.css("z-index", "0");
					arrow_i.removeClass("arrow_up").addClass("arrow_down");
				});
			}
		});

	});

	$(function () {

		$("#weibo").mouseenter(function () {
			$(this).find("img").first().attr("src", "/themes/images/weibol.png");
		});
		$("#weibo").mouseleave(function () {
			$(this).find("img").first().attr("src", "/themes/images/weibo.png");
		});

		$("#weixin").mouseenter(function () {
			$(this).find("img").first().attr("src", "/themes/images/weixinl.png");
		});
		$("#weixin").mouseleave(function () {
			$(this).find("img").first().attr("src", "/themes/images/weixin.png");
		});
	});


	var needReloadPage = false;
	var needReloadUrl = "";
	/*  显示错误提示弹出框 */
	function showErrorMessageDialog(mes) {
		$("#temp_prop").siblings("span").html(mes);
		$("#errorMessageDialog").show();
		//setTimeout(wait,5000);
	}

	/* 关闭错误提示弹出框 */
	function closeErrorMessageDialog() {
		$("#errorMessageDialog").hide();
		//是否需要刷新页面 true刷新
		if (needReloadPage) {
			window.location.reload();
		}
		//如果传入了加载页面则直接加载
		if (needReloadUrl != "") {
			location.href = needReloadUrl;
		}
	}
	var basePath = "";
	var url = getUrl();
	var lis = $("#zsd_nav").find("li");
	var index_nav = document.getElementById("index_nav");
	var financing_nav = document
		.getElementById("financing_nav");
	var borrow_nav = document.getElementById("borrow_nav");
	var new_nav = document.getElementById("new_nav");
	var xbox_nav = document.getElementById("xbox_nav");
	var activity_nav = document.getElementById("activity_nav");
	if (url.indexOf("borrowList") != -1 || (url.indexOf("toborrow") != -1)) {
		lis.removeClass(" active");
		borrow_nav.className = borrow_nav.className + " active";
	} else if (url.indexOf("queryData") != -1 || (url.indexOf("tender") != -1)) {
		lis.removeClass(" active");
		financing_nav.className = financing_nav.className +
			" active";
	} else if (url.indexOf("getPageNew") != -1) {
		lis.removeClass(" active");
		//new_nav.className = new_nav.className + " active";
	} else if (url.indexOf("product/box") != -1) {
		lis.removeClass(" active");
		xbox_nav.className = xbox_nav.className + " active";
	} else if (url.indexOf("activity") != -1) {
		lis.removeClass(" active");
		activity_nav.className = activity_nav.className + " active";
	} else {
		lis.removeClass(" active");
		index_nav.className += "active";
	}

	/**
	 * 得到请求的url地址 去除参数
	 * @returns {Array}
	 */
	function getUrl() {
		var url = window.location.href;
		var index = url.indexOf('?');
		if (-1 != index) {
			return url.substring(0, index);
		}
		return url;
	}
	$('#slider').nivoSlider();
		var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
		document.write(unescape("%3Cscript src='" + _bdhmProtocol +
			"hm.baidu.com/h.js%3F72da47e93f114fd22a380c72f142d731' type='text/javascript'%3E%3C/script%3E"
	));
	var _mvq = window._mvq || [];
	window._mvq = _mvq;
	_mvq.push(['$setAccount', 'm-136753-0']);

	_mvq.push(['$setGeneral', '', '', /*用户名*/ '', /*用户id*/ '']); //如果不传用户名、用户id，此句可以删掉
	_mvq.push(['$logConversion']);
	(function () {
		var mvl = document.createElement('script');
		mvl.type = 'text/javascript';
		mvl.async = true;
		mvl.src = ('https:' == document.location.protocol ? 'https://static-ssl.mediav.com/mvl.js' :
			'http://static.mediav.com/mvl.js');
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(mvl, s);
	})();
	var _py = _py || [];
	_py.push(['a', 'zTs..3Jk4Kk9zkGw41pYbgLxwtX']);
	_py.push(['domain', 'stats.ipinyou.com']);
	_py.push(['e', '']); -
	function (d) {
		var s = d.createElement('script'),
			e = d.body.getElementsByTagName('script')[0];
		e.parentNode.insertBefore(s, e),
			f = 'https:' == location.protocol;
		s.src = (f ? 'https' : 'http') + '://' + (f ? 'fm.ipinyou.com' : 'fm.p0y.cn') + '/j/adv.js';
	}(document);
	$.getScript("http://wpa.b.qq.com/cgi/wpa.php?key=XzkzODA0Nzk3NF8xMDU3NzdfNDAwODU1NTA1Nl8", function () {
		BizQQWPA.addCustom({
			aty: '0',
			a: '0',
			nameAccount: 4008555056,
			selector: 'BizQQWPA4'
		});
	})

	$(function () {
		var lis = $("#bid_normal").find(".clearfix").find(".status");
		var borrrowNew = $("#bid_new").find(".clearfix").find(".status");
		for (var i = 0; i < lis.length; i++) {
			var countDown = $(lis.get(i)).find("a").attr("countDown")
			if (countDown > 0) {
				timer(lis.get(i));
			}
		}

		for (var i = 0; i < borrrowNew.length; i++) {
			var countDown = $(borrrowNew.get(i)).find("a").attr("countDown")
			if (countDown > 0) {
				timer(borrrowNew.get(i));
			}
		}
		$('#partner').carousel({
			'auto': 'flase',
			'interval': 3000,
			'triggers': '#ppoint',
			'scroll': 500,
			'space': 10,
			'number': 2,
			'big': 7,
			'prev': '#pprev',
			'next': '#pnext'
		});
	});

	/**
	 * 打开链接
	 * @param key
	 */
	function openLink(key) {
		var classId = $(key).parent().parent().find("s[class='ashow']").data("class");
		if (classId == 15)
			window.open("/article/getNewsList.html?classId=" + classId);
		else
			window.open("/article/getMediaList.html?classId=" + classId);
	}
})