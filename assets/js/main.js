var currentLanguage = $("body").attr("data-language");
var baseurl = $("body").attr("data-baseurl");
var currenturl = $("body").attr("data-currenturl");

function checkRelatorySize(){
	var browserHeight = $(window).height();
	var browserWidth = $(window).width();
	var containerHeight = $(".relatory-container").outerHeight();			
	var topNav = $(".nav.right").height();
	var botNav = $(".nav.bottom").height();
	var margin = 25;
	
	var totalHeight = containerHeight+topNav+botNav+margin;

	if(browserWidth > 640){
		if(browserHeight >= 600){
			if(totalHeight > browserHeight){
				var difference = totalHeight - browserHeight;
				$("div.relatory-container .scroller").height($("div.relatory-container .scroller").height() - difference);
				$("div.relatory-container .scroller").data("jsp").reinitialise();
			} else if($("div.relatory-container .scroller").height() < 480){
				$("div.relatory-container .scroller").height(480);
				containerHeight = $(".relatory-container").outerHeight();
				totalHeight = containerHeight+topNav+botNav+margin;
				if(totalHeight > browserHeight){
					var difference = totalHeight - browserHeight;
					$("div.relatory-container .scroller").height($("div.relatory-container .scroller").height() - difference);
				}
				$("div.relatory-container .scroller").data("jsp").reinitialise();
			}
		} else {
			if(totalHeight > 600){
				var difference = totalHeight - 600;
				$("div.relatory-container .scroller").height($("div.relatory-container .scroller").height() - difference);
				$("div.relatory-container .scroller").data("jsp").reinitialise();
			}
		}
	} else {
		topNav = $(".nav.right > ul.history li.relatory").outerHeight();
		
		var pHeight = $(".nav.right > ul > li > div.relatory-container p").outerHeight();
		var buttonsHeight = $(".nav.right > ul > li > div.relatory-container > ul li:first-child").outerHeight();
		
		totalHeight = topNav+pHeight+buttonsHeight;
		
		var difference = browserHeight - totalHeight;
		
		$("div.relatory-container .scroller").height(difference);
		$("div.relatory-container .scroller").data("jsp").reinitialise();
	}
}

function checkMenuToSetHeight(){
	var browserHeight = $(window).height();
	if($("body").hasClass("cookie"))
		browserHeight = browserHeight - 55;
		
	var logoContainerHeight = $("div.left").height();
	
	var difference = browserHeight - logoContainerHeight;
	
	$("nav.left > div").height(difference);
	
	checkMenuToFix();
}

function checkMenuToFix(){
	var browserHeight = $(window).height();
	if($("body").hasClass("cookie"))
		browserHeight = browserHeight - 55;
	var logoHeight = $("div.left .logo").height();
	var capitHeight = $("div.left p.capit").height();
	var mainMenuHeight = $("nav.left div.menu-container > ul").eq(0).outerHeight();
	var secondMenuHeight = $("nav.left div.menu-container > ul").eq(1).height();
	
	var browserWidth = $(window).width();
	
	//if(browserWidth > 640){
		var total = logoHeight + capitHeight + mainMenuHeight + secondMenuHeight + 40;
	
		if(total > browserHeight){
			$("nav.left div.menu-container > ul").eq(1).removeClass("fixed");
		} else if(total <= browserHeight){
			$("nav.left div.menu-container > ul").eq(1).addClass("fixed");
		}
		
		if(total > browserHeight && !$("nav.left > div").hasClass("mini")){
			initiateScroller();
		} else{
			destroyScroller();
		}
	//}
}

function initiateScroller(){
	var currentScroll = $("nav.left > div");
	if(!currentScroll.data("jsp"))
		currentScroll.jScrollPane({hideFocus:true,verticalGutter:0,mouseWheelSpeed:20});
	else
		currentScroll.data("jsp").reinitialise();
}

function destroyScroller(){
	var currentScroll = $("nav.left > div");
	if(currentScroll.data("jsp")){
		currentScroll.data("jsp").destroy();
		var windowWidth = $(window).width();

		if(windowWidth > 640){
			$("nav.left > div").unbind("mouseenter").on("mouseenter", mouseEnterMenuDiv);
			$("nav.left").unbind("mouseleave").on("mouseleave", mouseLeaveMenuDiv);
		}
		
		checkMenuToSetHeight();
	}
}

function mouseEnterMenuDiv(){
	showMenu();
}

function mouseLeaveMenuDiv(){
	if($("nav.left > div").data("jsp")){
		$("nav.left > div").data("jsp").scrollToY(0);
		$("nav.left > div").data("jsp").destroy();
		$("nav.left > div").on("mouseenter", mouseEnterMenuDiv);
	} 
	$(this).find("> div").addClass("mini");
	menuDelay = setTimeout( function(){
		hideMenu();
	}, 300);
}

function hideMenu(){
	clearTimeout(menuDelay);
	
	$("nav.left > div").stop(true,true).animate({width:"70px"}, 500);
	$("nav.left div.menu-container li.restrain > a").stop(true,true).css("text-transform", "none").css("font-size","9px").css("padding-right","4px").css("padding-left","2px").css("width", "249px");
	$("nav.left div.menu-container ul.second li.restrain > a").stop(true,true).css("padding-left","15px");
	$("nav.left div.menu-container li.restrain > a > span").stop(true,true).css("width", "65px").css("display","block");
	$("nav.left div.menu-container li.open > div").stop(true,true).animate({height: "0px"}, {duration:500, progress: checkMenuToSetHeight}, function(){
		checkMenuToSetHeight();
	});
	$("nav.left div.menu-container li.open").removeClass("open");
}

function showMenu(){
	clearTimeout(menuDelay);
	
	$("nav.left > div").stop(true,true).animate({width:"260px"}, 500, function(){
		$(this).removeClass("mini");
		checkMenuToFix();
	});
	$("nav.left div.menu-container li.restrain > a").stop(true,true).css("text-transform", "uppercase").css("font-size","10px").css("width", "211px").css("padding-right","9px").css("padding-left","40px");
	$("nav.left div.menu-container li.restrain > a > span").stop(true,true).css("width", "211px").css("display","block");
}

function getMoreVisibleElement(elements){
	var scrollPosition = $(document).scrollTop();
	var browserHeight = $(window).height();
	
	var elementVisibleAreas = new Array();
	
	$.each(elements, function(key, value){
		var currentElement = $("#"+elements[key].id);
		var topPosition = currentElement.position().top;
		var elementHeight = currentElement.height();
		var currentSize = 0;
		
		if(topPosition < scrollPosition){
			currentSize = (topPosition + elementHeight) - scrollPosition;
		} else {
			currentSize = (scrollPosition + browserHeight) - topPosition;
		}
		
		var currentElementInfo = new Array();
		currentElementInfo.push(elements[key].id);
		currentElementInfo.push(currentSize);
		elementVisibleAreas.push(currentElementInfo);
	})
	
	elementVisibleAreas.sort(function(a, b){return b[1]-a[1]});

	return elementVisibleAreas[0];
}

function updatePageNumber(){
	if($(".nav.bottom").length > 0){
		var visibleOnViewPort = $("div.page:in-viewport");
		var moreVisiblePage = getMoreVisibleElement(visibleOnViewPort);
		var pageNumber = moreVisiblePage[0].replace("p", "");
		var currentPageNumber = $(".nav.bottom .pagenumber").text();
		
		if(currentPageNumber != pageNumber){
			$(".nav.bottom .pagenumber").text(pageNumber);
			
			checkPageStar(pageNumber);
			
			var divIndex = $("#p"+pageNumber).index();
			$(".navigation a.next").removeClass("disabled");
			$(".navigation a.previous").removeClass("disabled");
	
			if(divIndex == 0){
		    	$(".navigation a.previous").addClass("disabled");
		    }
		    
		    if(divIndex >= $(".page-container > *").length - 1){
		    	$(".navigation a.next").addClass("disabled");
		    }
		    
		    if(parseInt(pageNumber) < 6 || parseInt(pageNumber) > 301){
		    	$(".nav.bottom ul li.star").stop(true,true).fadeOut(200);
		    } else {
		    	$(".nav.bottom ul li.star").stop(true,true).fadeIn(200);
		    }
		}
	}
}

function goToPage(pageIndex, isIndex){
	if(isIndex){
		$('html, body').animate({
	        scrollTop: $("#"+$(".page-container > *").eq(pageIndex).attr("id")).offset().top
	    }, 400);
	} else {
		$('html, body').animate({
	        scrollTop: $("#p"+pageIndex).offset().top
	    }, 400);
	}
}

function checkPageStar(pageIndex){
	$(".nav.bottom li.star > a").parent().removeClass("added").removeClass("selected");
	if($.inArray(parseInt(pageIndex), selectedHistory) != -1) $(".nav.bottom li.star > a").parent().addClass("selected");
}

function checkBodyWidth(){
	var browserWidth = $(window).width();
	var browserHeight = $(window).height();
	var bodyPadding = parseInt($("body").css("padding-left").replace("px", ""));
	
	$("body").width(browserWidth - bodyPadding);
	
	
	var initialImageWidth = 3508;
	var initialImageHeight = 2480;
	var initialImageRatio = (browserWidth - bodyPadding)/initialImageWidth;
	
	if(browserWidth <= 640){
		var bodyPadding = parseInt($("body").css("padding-top").replace("px", ""));
		$(".page").css("height", "auto").css("min-height", Math.round(initialImageHeight*initialImageRatio)+"px")
		
		var chapterHeight = 500;
		if(browserHeight > 500)
			chapterHeight = browserHeight - bodyPadding;
			
		$(".page.withBG").css("min-height", chapterHeight);
		$(".page.withBG > div").css("min-height", (browserHeight - bodyPadding)+"px").removeClass("hidden");
	} else {
		var imageHeight = Math.round(initialImageHeight*initialImageRatio);
		if(imageHeight < browserHeight)
			$(".page").css("min-height", browserHeight+"px").css("height", "auto");
		else
			$(".page").css("min-height", imageHeight+"px").css("height", "auto");
			
		var chapterHeight = 500;
		if(browserHeight > 500)
			chapterHeight = browserHeight;
		$(".page.withBG").css("min-height", chapterHeight+"px").css("height", "auto");
		$(".page.withBG > div").css("min-height", browserHeight+"px").removeClass("hidden");
	}
}

function checkSelectedMenu(){
	$("div.menu-container ul.first li").removeClass("selected");
	var currentPageNumber = parseInt($(".nav.bottom .pagenumber").text());
	
	var intervals = new Array(Array(11,25), Array(26,69), Array(70,147), Array(148,199), Array(200,241), Array(242,301));
	
	if(currentPageNumber == 2) $("div.menu-container ul.first li.indice").addClass("selected");
	else if(currentPageNumber == 6) $("div.menu-container ul.first > li").eq(0).addClass("selected");
	else if(currentPageNumber == 7 || currentPageNumber == 8) $("div.menu-container ul.first > li").eq(1).addClass("selected");
	else {
		$.each(intervals, function(key, value){
			if(currentPageNumber >= value[0] && currentPageNumber <= value[1]){
				$("div.menu-container ul.first > li").eq(key+2).addClass("selected");
				return false;
			}
		})
	}
}

function animateChapter(){
	$(".chapter-to-animate").each(function(){
		var chapterInitPos = $(this).position().top;
		var chapterHeight = $(this).height();
		var chapterEnd = chapterInitPos + chapterHeight;
		
		var currentScrollPosition = $(window).scrollTop();
		var windowHeight = $(window).height();
		var visibleViewPort = currentScrollPosition + windowHeight;
		
		var visiblePageArea = visibleViewPort - chapterInitPos;
		
		if(visiblePageArea < 0) visiblePageArea = 0;
		if(visiblePageArea > chapterHeight) visiblePageArea = chapterHeight;
		
		$(this).find(".animate-right-to-left").each(function(){
			var rightPosition = getAnimationWidthPosition($(this),visibleViewPort,chapterInitPos,chapterHeight);
			$(this).css("right", Math.round(rightPosition)+"px");
		})
		
		$(this).find(".animate-left-to-right").each(function(){
			var leftPosition = getAnimationWidthPosition($(this),visibleViewPort,chapterInitPos,chapterHeight);
			$(this).css("left", Math.round(leftPosition)+"px");
		})
		
		$(this).find(".animate-top-to-bottom").each(function(){
			var topPosition = getAnimationHeightPosition($(this),visibleViewPort,chapterInitPos,chapterHeight);
			$(this).css("top", Math.round(topPosition)+"px");
		})
	})
}

function getAnimationWidthPosition(element,visibleViewPort,chapterInitPos,chapterHeight){
	var elementTopPosition = element.position().top;
	if(element.parent().hasClass('elements-container'))
		elementTopPosition += element.parent().position().top;
	
	visiblePageArea = visibleViewPort - (chapterInitPos + elementTopPosition);
	
	if(visiblePageArea < 0) visiblePageArea = 0;
	if(visiblePageArea > chapterHeight - elementTopPosition) visiblePageArea = chapterHeight - elementTopPosition;
	
	var elementWidth = element.outerWidth();
	var perPixel = elementWidth/(chapterHeight - elementTopPosition);
	var position = - elementWidth + (visiblePageArea*perPixel);
	
	return position;
}

function getAnimationHeightPosition(element,visibleViewPort,chapterInitPos,chapterHeight){
	visiblePageArea = visibleViewPort - chapterInitPos;
	
	if(visiblePageArea < 0) visiblePageArea = 0;
	if(visiblePageArea > chapterHeight) visiblePageArea = chapterHeight;
	
	var elementHeight = element.outerHeight();
	
	if(elementHeight == chapterHeight){
		var perPixel = elementHeight/chapterHeight;
		var position = - elementHeight + (visiblePageArea*perPixel);
	} else {
		var perPixel = chapterHeight/chapterHeight;
		var position = - elementHeight + (visiblePageArea*perPixel);
	}
	
	return position;
}



var selectedHistory = new Array();

var menuDelay;

var windowWidth = $(window).width();

if(windowWidth > 640){
	$("nav.left > div").addClass("mini");
	menuDelay = setTimeout( function(){
		hideMenu();
	}, 3000);
	
	$("nav.left > div").on("mouseenter", mouseEnterMenuDiv);
	$("nav.left").on("mouseleave", mouseLeaveMenuDiv);
}

$(window).load(function(){
	checkBodyWidth();
	updatePageNumber();
	checkRelatorySize();
	checkMenuToSetHeight();
	
	$('.break-apart').columnize({ width: 200, lastNeverTallest: true, buildOnce: false});
	$('.break-apart').removeClass("invisible");
})

$(window).ready(function(){
	
	$('audio,video').mediaelementplayer({
		pluginPath: 'assets/player/',
		flashName: 'flashmediaelement.swf',
		silverlightName: 'silverlightmediaelement.xap',
		defaultVideoHeight: 315,
		success: function(player, node) {
			$('#' + node.id + '-mode').html('mode: ' + player.pluginType);
		}
	});
	
	$.cookie.json = true;
	$.cookie.defaults = { expires: 7, path: '/' };
	getSelectedPagesFromCookie(true);
	
	$(".navigation a.previous").click(function(){
		$(".navigation a.next").removeClass("disabled");
		var pageNumber = $(".nav.bottom .pagenumber").text();
		var divIndex = $("#p"+pageNumber).index();

		if(divIndex - 1 >= 0) goToPage(divIndex - 1, true);
	})
	
	$(".navigation a.next").click(function(){
		$(".navigation a.previous").removeClass("disabled");
		var pageNumber = $(".nav.bottom .pagenumber").text();
		var divIndex = $("#p"+pageNumber).index();
		
		if(divIndex + 1 <= $(".page-container > *").length - 1) goToPage(divIndex + 1, true);
	})
	
	$("a.gotopage").click(function(){
		var pageid = $(this).attr("page-id");
		
		if($(".menu-container").hasClass("blank")){
			window.location.href = baseurl+"#p"+pageid;
		} else {
			goToPage(parseInt(pageid), false);
		}
	})
	
	$("ul.languages a").click(function(){
		if(!$(this).hasClass("selected") && $(this).attr("href") == "javascript:;"){
			var pageNumber = $(".nav.bottom .pagenumber").text();
			var browserwidth = $(window).width(); 
			var selectedLanguage = $(this).attr("data-language");
			
			if($(".nav.bottom .pagenumber").length > 0 && browserwidth > 640){
				window.location.href = baseurl+selectedLanguage+"/#p"+pageNumber;
			} else {
				window.location.href = baseurl+selectedLanguage+"/";
			}
		}
	})
	
	
	$("div.page img").lazyload({
	    threshold : 200
	});
	
	$("body.cookie nav.left").each(function(){
		$(this).height($(window).height()-55);
	})
		
	
	$("div.relatory-container .scroller").each(function(){
		var currentScroll = $(this);
		currentScroll.jScrollPane({hideFocus:true,verticalGutter:0, verticalDragMinHeight:26, verticalDragMaxHeight:26});
	});
	
	$(".nav.right ul > li.relatory > a").click(function(){
		if(!$(this).parent().hasClass("open")){
			getSelectedPagesFromCookie(true);
		}
		$(this).parent().toggleClass("open");
		
	})

	function getSelectedPagesFromCookie(update){
		selectedHistory = new Array();
		var result = $.cookie('jm_history'); 
		
		if(result)
			$.each(result, function($key, $value){
				selectedHistory.push($value);
				$("#p"+$value).find("li.star").addClass("selected");
			})
		
		
		if(update) updatePagesList();
	}
	
	function addPageToCookie(page, update){
		if(page >= 6 && page <= 301){
			if($.inArray(page, selectedHistory) == -1){
				selectedHistory.push(page);
			}
			
			$.cookie('jm_history', selectedHistory);
			if(update) updatePagesList();
		}
	}
	
	function removePageFromCookie(page, update){
		var index = $.inArray(page, selectedHistory);
		if(index != -1)
			selectedHistory.splice(index, 1);
		
		$.cookie('jm_history', selectedHistory);
		$("#p"+page).find("li.star").removeClass("selected");
		if(update) updatePagesList();
	}
	
	function sortNumber(num1, num2) {
        return num1 - num2;
    }
	
	function updatePagesList(){
		$(".relatory-container .scroller ul").html("");
		var html = "";
		
		selectedHistory.sort(sortNumber);
		
		$.each(selectedHistory, function(key, value){
			html += "<li><label class='checked'><span><input type='checkbox' value='"+value+"' checked='checked' /></span>"+value+"</label></li>";
		})
		
		$(".relatory-container .scroller ul").html(html);
		
		if($("div.relatory-container .scroller").data("jsp")){
			$("div.relatory-container .scroller").data("jsp").reinitialise();
			if($(".nav.right li.relatory").hasClass("open")) $("div.relatory-container .scroller").data("jsp").scrollToBottom(); 
			else $("div.relatory-container .scroller").data("jsp").scrollToY(0);
		} 
		
		$(".relatory-container .scroller ul").find("input").change(function(){
			if(!$(this).is(":checked")){
				$(this).closest("label").removeClass("checked");
				removePageFromCookie(parseInt($(this).val()), false);
			}
			else {
				$(this).closest("label").addClass("checked");
				addPageToCookie(parseInt($(this).val()), false);
			}
		})
	}
	
	$("li.star > a").click(function(){
		var currentPage = parseInt($(this).closest("ul").find(".pagenumber").text());

		if($(this).parent().hasClass("selected")){
			if($(".nav.right li.relatory").hasClass("open")) removePageFromCookie(currentPage, true);
			else removePageFromCookie(currentPage, false);
			
			$(this).parent().removeClass("selected").removeClass("added");
		} else {
			if($(".nav.right li.relatory").hasClass("open")) addPageToCookie(currentPage, true);
			else addPageToCookie(currentPage, false);
			
			$(this).parent().addClass("selected").addClass("added").find(".hint.added").stop(true,true).css("opacity", 1).delay(1000).animate({opacity:0}, 200);
		}
	})
	
	$("li.star > a").on("mouseleave", function(){
		$(this).parent().removeClass("added");
	})
	
	$(".nav.right .relatory-container > ul li a").click(function(){
		if($(this).closest("li").index() == 0)
			generatePopup("print");
		else
			generatePopup();
	})

	function translate(string){
		if(currentLanguage == "en" && translateList[string] && translateList[string] != ""){
			string = translateList[string];
		} 
		return string;
	}
	
	function generatePopup(type){
		$(".popup").remove();
		$(".popup-overlay").remove();
		
		var header = "Guardar";
		var verb = "guardar";
		var btnClass = "save";
		var exportType = 1;
		
		if(type == "print"){
			header = "Imprimir";
			verb = "imprimir";
			btnClass = "print";
			exportType = 2;
		}
		
		var firstP = "Por favor confirme quais os elementos que deseja";
		
		var html = '<div class="popup-overlay"></div>' ;
		html += '<div class="popup">';
		html += '<a href="javascript:;" class="close"><span></span></a>';
		html += '<div class="header"><span class="icon '+btnClass+'"></span> '+translate(header)+'</div>';
		html += '<div class="text">'+translate(firstP)+' '+translate(verb)+':</div>';
		html += '<div class="options"><form target="_blank" method="post" action="'+baseurl+'export/" enctype="multipart/form-data">';
		html += '<input type="hidden" value="'+currentLanguage+'" name="language" />';
		html += '<input type="hidden" value="'+exportType+'" name="type" />';
		html += '<input type="hidden" value="'+selectedHistory+'" name="allpages" />';
		html += '<div class="row"><label class="radio selected"><span><input type="radio" name="choice" value="pages" checked="checked" /></span> '+translate("Páginas adicionadas ao Meu Relatório")+'</label></div>';
		html += '<div class="row"><label class="radio"><span><input type="radio" name="choice" value="document" /></span> '+translate("Todo o documento")+'</label></div>';
		html += '<div class="row"><label class="radio"><span><input type="radio" name="choice" value="chaps" /></span> '+translate("Apenas os seguintes capítulos")+'</label></div>';
		html += '<div class="sub-options">';
		html += '<div class="row"><label class="check"><span><input type="checkbox" name="chap1" /></span> 1 | '+translate("O GRUPO JERÓNIMO MARTINS")+'</label></div>';
		html += '<div class="row"><label class="check"><span><input type="checkbox" name="chap2" /></span> 2 | '+translate("RELATÓRIO CONSOLIDADO DE GESTÃO")+'</label></div>';
		html += '<div class="row"><label class="check"><span><input type="checkbox" name="chap3" /></span> 3 | '+translate("DEMONSTRAÇÕES FINANCEIRAS CONSOLIDADAS")+'</label></div>';
		html += '<div class="row"><label class="check"><span><input type="checkbox" name="chap4" /></span> 4 | '+translate("GOVERNO DA SOCIEDADE")+'</label></div>';
		html += '<div class="row"><label class="check"><span><input type="checkbox" name="chap5" /></span> 5 | '+translate("RESPONSABILIDADE CORPORATIVA NA CRIAÇÃO DE VALOR")+'</label></div>';
		html += '<div class="row"><label class="check"><span><input type="checkbox" name="chap6" /></span> 6 | '+translate("RELATÓRIO E CONTAS INDIVIDUAL")+'</label></div>';
		html += '</div>';
		html += '</form></div><a href="javascript:;" class="button '+btnClass+'">'+translate(header)+'<span class="icon"></span></a>';

		html += '</div>';
		
		$("body").append(html);
		
		$(".popup a.button").click(function(){
			$(this).closest(".popup").find("form").submit();
		})
		
		$(".popup label.radio input").change(function(){
			$(this).closest("form").find("label.radio").removeClass("selected");
			
			if($(this).is(":checked")){
				$(this).closest("label").addClass("selected");
			}
			
			if($(this).val() == "chaps"){
				$(this).closest("form").find(".sub-options input").prop('checked', true).closest("label").addClass("selected");
			} else {
				$(this).closest("form").find(".sub-options input").prop('checked', false).closest("label").removeClass("selected");
			}
		})
		
		$(".popup label.check input").change(function(){
			if($(this).is(":checked")){
				$(this).closest("label").addClass("selected");
				$(this).closest("form").find(".row label.radio").removeClass("selected");
				$(this).closest("form").find(".row").eq(2).find("input").prop('checked', true).closest("label").addClass("selected");
			} else {
				$(this).closest("label").removeClass("selected");
			}
		})
		
		$(".popup-overlay, .popup .close").click(function(){
			$(".popup").remove();
			$(".popup-overlay").remove();
		})
	}
	
	/**
	 *  MENU
	 */
	$("nav.left div.menu-container > ul > li > a").click(function(){
		if($(this).closest("li").find("> div").length != 0){
			var currentSub = $(this).closest("li").find("> div");
			if($(this).closest("li").hasClass("open")){
				$(this).closest("li").removeClass("open");
				currentSub.stop(true,true).animate({height: "0px"}, {duration:200, progress: checkMenuToSetHeight}, function(){
					checkMenuToSetHeight();
				});
			} else {
				$(this).closest("ul").find("li").each(function(){
					if($(this).hasClass("open")){
						$(this).closest("li").removeClass("open");
						var current = $(this).closest("li").find("> div");
						current.stop(true,true).animate({height: "0px"}, {duration:200, progress: checkMenuToSetHeight}, function(){
							checkMenuToSetHeight();
						});
					}
				})	
				$(this).closest("li").addClass("open");
				var currentSubHeight = currentSub.find("> ul").outerHeight();
				currentSub.stop(true,true).animate({height: currentSubHeight+"px"}, {duration:200, progress: checkMenuToSetHeight}, function(){
					checkMenuToSetHeight();
				});
			}		
		}
	})
	
	checkBodyWidth();
	checkPageStar(1);
	updatePageNumber();
	checkRelatorySize();
	
	var currentBrowserHeight = $(window).height();
	$(window).resize(function(){
		checkBodyWidth();
		checkRelatorySize();
		checkMenuToSetHeight();
		
		var browserwidth = $(window).width(); 
		
		if(browserwidth > 640){
			var pageNumber = $(".nav.bottom .pagenumber").text();
			if($("#p"+pageNumber).length > 0) $(document).scrollTop($("#p"+pageNumber).position().top);
			$("nav.left > div").unbind("mouseenter", mouseEnterMenuDiv).on("mouseenter", mouseEnterMenuDiv);
			$("nav.left").unbind("mouseleave", mouseLeaveMenuDiv).on("mouseleave", mouseLeaveMenuDiv);
			$("nav.left > div").css("display", "block");
		} else {
			$("nav.left > div").unbind("mouseenter", mouseEnterMenuDiv);
			$("nav.left").unbind("mouseleave", mouseLeaveMenuDiv);
			
			clearTimeout(menuDelay);
	
			$("nav.left > div").stop(true,true).css("width","260px");
			$("nav.left > div").removeClass("mini");
			checkMenuToFix();
			$("nav.left div.menu-container li.restrain > a").stop(true,true).css("text-transform", "uppercase").css("font-size","11px").css("width", "211px").css("padding-right","9px").css("padding-left","40px");
			$("nav.left div.menu-container li.restrain > a > span").stop(true,true).css("width", "211px").css("display","block");
			
			$("nav.left .openmenu").each(function(){
				if($(this).hasClass("open")){
					$("nav.left > div").css("display", "block");
				} else {
					$("nav.left > div").css("display", "none");
				}
			})
		}
	});
	
	$(window).scroll(function(){
		var windowWidth = $(window).width();
		
		if(windowWidth > 640){
			updatePageNumber();
			animateChapter();
			checkSelectedMenu();
		} else {
			$(".animate-right-to-left").removeAttr("style");
			$(".animate-left-to-right").removeAttr("style");
		}
	});
	
	$("nav.left > div > div").each(function(){		
		checkMenuToSetHeight();
	});	
	
	$("nav.left .openmenu").click(function(){
		var windowWidth = $(window).width();
		
		if(windowWidth <= 640){
			if($(this).hasClass("open")){
				$(this).removeClass("open").parent().find("> div").css("display", "none");
			} else {
				$(this).addClass("open").parent().find("> div").css("display", "block");
			}
		}
	})
	
 	$(".break-apart").find('br').addClass('removeiflast').addClass('removeiffirst');
})
