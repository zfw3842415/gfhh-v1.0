$(document).ready(function() {
	var $window = $(window);
	var $scroll_con = $("#allPage");
	var $scroll_page = $("#scrollPage");
	
	var _len = 8,
        _count = 1,
        _body_lock = true,
        _wheel_lock = false;
    var _win_h = $window.height();
    var _win_w = $window.width();
    
    var isStart = false;
    
    /**isIe8?**/
    var isIe8 = false;
    var hasVideo = false;
    
    //滚动条
	$('#scrollContainer, #scrollContainer1, #scrollContainer2, #scrollContainer3, #scrollContainer4, #scrollContainer5, #scrollContainer6').jScrollPane({
		showArrows: true,
		autoReinitialise: true,
		verticalDragMaxHeight: 49,
		verticalDragMinHeight: 49
	});
    
    // 超过750执行主体
    var runAt750 = function(){
    	$scroll_con.height(_win_h);
        $scroll_page.find('.page').height(_win_h);
        
        $('body').bind('mousewheel',function(event, delta, deltaX, deltaY) {
            // 翻页滚动时间解锁
            if (!_wheel_lock) {
                _wheel_lock = true;             
                if (delta == -1 && _count <_len) {
                    _count ++;
                }else if(delta == 1 && _count > 1){
                    _count --;
                }
               wheelFun();   
            } 
        }); 
        
        // 鼠标滚动执行事件
    	var wheelFun = function(){ 
    		var _num;
    		_num = (_count -1) * _win_h;
    		
    		if(_count == 2){
    			$(".neirong2 .txt1").animate({opacity:'0',left:300},100);
    			$(".neirong2 .txt2").animate({opacity:'0',left:300},100);
    			$(".neirong2 .border").animate({opacity:'0',left:300},100);
    			$(".neirong2 .txt3").animate({opacity:'0',left:300},100);
    		}
    		else if(_count == 3){
    			$(".neirong3 .txt1").animate({opacity:'0',left:800},100);
    			$(".neirong3 .txt2").animate({opacity:'0',left:800},100);
    			$(".neirong3 .border").animate({opacity:'0',left:800},100);
    			$(".neirong3 .txt3").animate({opacity:'0',left:800},100);
    		}
    		else if(_count == 4){
    			$(".neirong4 .txt1").animate({opacity:'0',left:300},100);
    			$(".neirong4 .txt2").animate({opacity:'0',left:300},100);
    			$(".neirong4 .border").animate({opacity:'0',left:300},100);
    			$(".neirong4 .txt3").animate({opacity:'0',left:300},100);
    		}
    		else if(_count == 5){
    			$(".neirong5 .txt1").animate({opacity:'0',left:900},100);
    			$(".neirong5 .txt2").animate({opacity:'0',left:900},100);
    			$(".neirong5 .border").animate({opacity:'0',left:900},100);
    			$(".neirong5 .txt3").animate({opacity:'0',left:900},100);
    		}
    		else if(_count == 6){
    			$(".neirong6 .txt1").animate({opacity:'0',left:280},100);
    			$(".neirong6 .txt2").animate({opacity:'0',left:280},100);
    			$(".neirong6 .border").animate({opacity:'0',left:280},100);
    			$(".neirong6 .txt3").animate({opacity:'0',left:280},100);
    		}
    		else if(_count == 7){
    			$(".neirong7 .txt1").animate({opacity:'0',left:900},100);
    			$(".neirong7 .txt2").animate({opacity:'0',left:900},100);
    			$(".neirong7 .border").animate({opacity:'0',left:900},100);
    			$(".neirong7 .txt3").animate({opacity:'0',left:900},100);
//  			$('.neirong8 .video').hide();
//  			$('.neirong8 .button').show();
//  			hasVideo = false;
    		}
    		
    		if(_num <= 0){
    		 	$scroll_page.animate({            
                	top: '0px'     
            	}, 500 , function(){
            		doAnimateFuc();
                	_wheel_lock = false;
            	});
    		}
    		else{
    		 	$scroll_page.animate({            
                	top: '-'+_num+'px'     
            	}, 500 , function(){
            		doAnimateFuc();
                	_wheel_lock = false;
            	});
    		}
    	}
    	
    	/**点击箭头功能按钮**/
    	$('#topArrow').click(function(){
    		_wheel_lock = true;
        	_count = 1;
        	wheelFun();
        	ga('send','event','稀有动物/稀有动物','返回顶部','');
    	})
    	
    	/**点击对应导航**/
    	$('#hot-btn1').click(function(){
    		_wheel_lock = true;
        	_count = 2;
        	wheelFun();
        	ga('send','event','home','好奇鼬','');
    	})
    	$('#hot-btn2').click(function(){
    		_wheel_lock = true;
        	_count = 3;
        	wheelFun();
        	ga('send','event','home','机敏猴','');
    	})
    	$('#hot-btn3').click(function(){
    		_wheel_lock = true;
        	_count = 4;
        	wheelFun();
        	ga('send','event','home','热烈鸟','');
    	})
    	$('#hot-btn4').click(function(){
    		_wheel_lock = true;
        	_count = 5;
        	wheelFun();
        	ga('send','event','home','果敢狮','');
    	})
    	$('#hot-btn5').click(function(){
    		_wheel_lock = true;
        	_count = 6;
        	wheelFun();
        	ga('send','event','home','担当象','');
    	})
    	$('#hot-btn6').click(function(){
    		_wheel_lock = true;
        	_count = 7;
        	wheelFun();
        	ga('send','event','home','集团蜂','');
    	})
    	$('.button1').click(function(){
    		_wheel_lock = true;
        	_count = 9;
        	wheelFun();
        	ga('send','event','home/nav','稀有动物','');
    	})
    	$('.button2').click(function(){
    		$('.alertBg').show();
    		$('.challenge-content').show();
    		_wheel_lock = true;
    		ga('send','event','home/nav','前来挑战','');
    		ga('send','pageview','前来挑战');
    	})
    	$('.challenge-content .close-btn').click(function(){
    		$('.alertBg').hide();
    		$('.challenge-content').hide()
    		_wheel_lock = false;
    	})
    	$('.button3').click(function(){
    		$('.alertBg').show();
    		$('.quest-ogilvy').show();
    		_wheel_lock = true;
    		ga('send','event','home/nav','探秘奥美','');
    		ga('send','pageview','探秘奥美');
    	})
    	$('.quest-ogilvy .close-btn').click(function(){
    		$('.alertBg').hide();
    		$('.quest-ogilvy').hide();
    		_wheel_lock = false;
    	})
    	$('.button4').click(function(){
    		$('.alertBg').show();
    		$('.winning-ogilvy').show();
    		_wheel_lock = true;
    		ga('send','event','home/nav','获奖名单','');
    		ga('send','pageview','获奖名单');
    	})
    	$('.winning-ogilvy .close-btn').click(function(){
    		$('.alertBg').hide();
    		$('.winning-ogilvy').hide();
    		_wheel_lock = false;
    	})
    	$('.over-ogilvy .close-btn').click(function(){
			$('.alertBg').hide();
			$('.over-ogilvy').hide()
			_wheel_lock = false;
		})
    	
    	/**了解更多**/
    	$('.index-button').click(function(){
    		_wheel_lock = true;
        	_count = 2;
        	wheelFun();
    	})
    	/**我要挑战**/
    	$('#lastButton').click(function(){
//  		$('.alertBg').show();
//  		$('.challenge-content').show();
//  		_wheel_lock = true;
//  		ga('send','event','稀有动物/稀有动物','我要挑战','');
			_wheel_lock = true;
        	_count = 1;
        	wheelFun();
        	ga('send','event','稀有动物/稀有动物','返回首页','');
    	})
    	
    	/**键盘功能**/
    	document.onkeydown = keyDown;
    	function keyDown(e){
    		var keycode = e.which;
    		if(keycode == 40){//↓
    			// 翻页滚动时间解锁
            	if (!_wheel_lock) {
                	_wheel_lock = true;             
                	if (_count <_len) {
                    	_count ++;
                	}
               		wheelFun();   
            	}
    		}
    		else if(keycode == 38){//↑
    			// 翻页滚动时间解锁
            	if (!_wheel_lock) {
                	_wheel_lock = true;             
                	if(_count > 1){
                    	_count --;
                	}
               		wheelFun();   
            	}
    		}
    	}
    	
    }
    
    
    var doAnimateFuc = function(){
    	if(_count == 2){
    		$(".neirong2 .txt1").animate({opacity:'1',left:260},300);
    		$(".neirong2 .txt2").delay(200).animate({opacity:'1',left:260},500);
    		$(".neirong2 .border").delay(400).animate({opacity:'1',left:260},500);
    		$(".neirong2 .txt3").delay(600).animate({opacity:'1',left:260},500);
    		ga('send','pageview','稀有动物/好奇鼬');
    	}
    	else if(_count == 3){
    		$(".neirong3 .txt1").animate({opacity:'1',left:750},300);
    		$(".neirong3 .txt2").delay(200).animate({opacity:'1',left:750},500);
    		$(".neirong3 .border").delay(400).animate({opacity:'1',left:750},500);
    		$(".neirong3 .txt3").delay(600).animate({opacity:'1',left:750},500);
    		ga('send','pageview','稀有动物/机敏猴');
    	}
    	else if(_count == 4){
    		$(".neirong4 .txt1").animate({opacity:'1',left:260},300);
    		$(".neirong4 .txt2").delay(200).animate({opacity:'1',left:260},500);
    		$(".neirong4 .border").delay(400).animate({opacity:'1',left:260},500);
    		$(".neirong4 .txt3").delay(600).animate({opacity:'1',left:260},500);
    		ga('send','pageview','稀有动物/热烈鸟');
    	}
    	else if(_count == 5){
    		$(".neirong5 .txt1").animate({opacity:'1',left:870},300);
    		$(".neirong5 .txt2").delay(200).animate({opacity:'1',left:870},500);
    		$(".neirong5 .border").delay(400).animate({opacity:'1',left:870},500);
    		$(".neirong5 .txt3").delay(600).animate({opacity:'1',left:870},500);
    		ga('send','pageview','稀有动物/果敢狮');
    	}
    	else if(_count == 6){
    		$(".neirong6 .txt1").animate({opacity:'1',left:246},300);
    		$(".neirong6 .txt2").delay(200).animate({opacity:'1',left:246},500);
    		$(".neirong6 .border").delay(400).animate({opacity:'1',left:246},500);
    		$(".neirong6 .txt3").delay(600).animate({opacity:'1',left:246},500);
    		ga('send','pageview','稀有动物/担当象');
    	}
    	else if(_count == 7){
    		$(".neirong7 .txt1").animate({opacity:'1',left:840},300);
    		$(".neirong7 .txt2").delay(200).animate({opacity:'1',left:840},500);
    		$(".neirong7 .border").delay(400).animate({opacity:'1',left:840},500);
    		$(".neirong7 .txt3").delay(600).animate({opacity:'1',left:840},500);
    		ga('send','pageview','稀有动物/集团蜂');
    	}
    	else if(_count == 8){
    		ga('send','pageview','稀有动物/稀有动物');
    	}
    }
    
    //主体程序
    var init = function(){
        $window.unbind('mousewheel');
        $('body,html').animate({scrollTop:'0'},200);
        runAt750();
    }
        
    //整理坐标
    var setP = function(){
    	/**首页**/
    	var _circle = _win_h/1060*145;
    	var _scaleH7 = _win_h/1060*532;
    	var _scaleW7 = _win_h/1060*773;
    	var _scaleH6 = _win_h/1060*122;
    	var _scaleW6 = _win_h/1060*108;
    	var _scaleH5 = _win_h/1060*823;
    	var _scaleW5 = _win_h/1060*883;
    	var _scaleH4 = _win_h/1060*383;
    	var _scaleW4 = _win_h/1060*235;
    	var _scaleH4_new = _win_h/1060*539;
    	var _scaleW4_new = _win_h/1060*822;
    	var _scaleH3 = _win_h/1060*523;
    	var _scaleW3 = _win_h/1060*311;
    	var _scaleH2 = _win_h/1060*436;
    	var _scaleW2 = _win_h/1060*308;
    	var _scaleH1 = _win_h/1060*544;
    	var _scaleW1 = _win_h/1060*546;
    	
    	var _hotSw1 = _win_h/1060*180;
    	var _hotSh1 = _win_h/1060*300;
    	var _hotSw2 = _win_h/1060*160;
    	var _hotSh2 = _win_h/1060*250;
    	var _hotSw3 = _win_h/1060*311;
    	var _hotSh3 = _win_h/1060*523;
    	var _hotSw4 = _win_h/1060*235;
    	var _hotSh4 = _win_h/1060*383;
    	var _hotSw5 = _win_h/1060*680;
    	var _hotSh5 = _win_h/1060*640;
    	var _hotSw6 = _win_h/1060*108;
    	var _hotSh6 = _win_h/1060*122;
    	
    	document.getElementById("neirong1").style.height = _win_h + 'px';
    	if(_win_w<=1280){
    		document.getElementById("neirong1").style.left = (_win_w-1280)/2 + 'px'
    		document.getElementById("neirong2").style.left = (_win_w-1280)/2 + 'px'
    		document.getElementById("neirong3").style.left = (_win_w-1280)/2 + 'px'
    		document.getElementById("neirong4").style.left = (_win_w-1280)/2 + 'px'
    		document.getElementById("neirong5").style.left = (_win_w-1280)/2 + 'px'
    		document.getElementById("neirong6").style.left = (_win_w-1280)/2 + 'px'
    		document.getElementById("neirong7").style.left = (_win_w-1280)/2 + 'px'
//  		document.getElementById("neirong8").style.left = (_win_w-1280)/2 + 'px'
    		document.getElementById("neirong9").style.left = (_win_w-1280)/2 + 'px'
    	}
    	
    	
    	/**热区图片**/
//  	document.getElementById("index-img7").style.width = _scaleW7 + 'px';
//  	document.getElementById("index-img7").style.height = _scaleH7 + 'px';
//  	document.getElementById("index-img7").style.left = 1344/2560*_win_w + 'px';
    	
    	document.getElementById("index-img6").style.width = _scaleW6 + 'px';
    	document.getElementById("index-img6").style.height = _scaleH6 + 'px';
    	document.getElementById("index-img6").style.left = 1900/2560*_win_w + 'px';
    	document.getElementById("index-img6").style.top = 209/1060*_win_h + 'px';
    	document.getElementById("hot-btn6").style.width = _hotSw6 + 'px';
    	document.getElementById("hot-btn6").style.height = _hotSh6 + 'px';
    	document.getElementById("hot-btn6").style.left = 1900/2560*_win_w + _scaleW6-_hotSw6 + 'px';
    	document.getElementById("hot-btn6").style.top = 209/1060*_win_h + _scaleH6-_hotSh6 + 'px';
    	
    	document.getElementById("index-img5").style.width = _scaleW5 + 'px';
    	document.getElementById("index-img5").style.height = _scaleH5 + 'px';
    	document.getElementById("index-img5").style.left = 515/2560*_win_w + 'px';
    	document.getElementById("index-img5").style.top = 150/1060*_win_h + 'px';
    	document.getElementById("hot-btn5").style.width = _hotSw5 + 'px';
    	document.getElementById("hot-btn5").style.height = _hotSh5 + 'px';
    	document.getElementById("hot-btn5").style.left = 515/2560*_win_w + _scaleW5-_hotSw5 + 'px';
    	document.getElementById("hot-btn5").style.top = 150/1060*_win_h + _scaleH5-_hotSh5 + 'px';
    	
    	document.getElementById("index-img4").style.width = _scaleW4_new + 'px';
    	document.getElementById("index-img4").style.height = _scaleH4_new + 'px';
    	document.getElementById("index-img4").style.left = 1145/2560*_win_w + 'px';
//  	document.getElementById("index-img4").style.top = 155/1060*_win_h + 'px';
    	document.getElementById("hot-btn4").style.width = _hotSw4 + 'px';
    	document.getElementById("hot-btn4").style.height = _hotSh4 + 'px';
    	document.getElementById("hot-btn4").style.left = 1145/2560*_win_w + _scaleW4-_hotSw4 + 'px';
    	document.getElementById("hot-btn4").style.top = 155/1060*_win_h + _scaleH4-_hotSh4 + 'px';
    	
    	document.getElementById("index-img3").style.width = _scaleW3 + 'px';
    	document.getElementById("index-img3").style.height = _scaleH3 + 'px';
    	document.getElementById("index-img3").style.left = 1525/2560*_win_w + 'px';
    	document.getElementById("index-img3").style.top = 475/1060*_win_h + 'px';
    	document.getElementById("hot-btn3").style.width = _hotSw3 + 'px';
    	document.getElementById("hot-btn3").style.height = _hotSh3 + 'px';
    	document.getElementById("hot-btn3").style.left = 1525/2560*_win_w + _scaleW3-_hotSw3 + 'px';
    	document.getElementById("hot-btn3").style.top = 475/1060*_win_h + _scaleH3-_hotSh3 + 'px';
    	
    	document.getElementById("index-img2").style.width = _scaleW2 + 'px';
    	document.getElementById("index-img2").style.height = _scaleH2 + 'px';
    	document.getElementById("index-img2").style.left = 800/2560*_win_w + 'px';
    	document.getElementById("index-img2").style.top = 25/1060*_win_h + 'px';
    	document.getElementById("hot-btn2").style.width = _hotSw2 + 'px';
    	document.getElementById("hot-btn2").style.height = _hotSh2 + 'px';
    	document.getElementById("hot-btn2").style.left = 800/2560*_win_w + _scaleW2-_hotSw2 + 'px';
    	document.getElementById("hot-btn2").style.top = 25/1060*_win_h + _scaleH2-_hotSh2 + 'px';
    	
    	document.getElementById("index-img1").style.width = _scaleW1 + 'px';
    	document.getElementById("index-img1").style.height = _scaleH1 + 'px';
    	document.getElementById("index-img1").style.left = 245/2560*_win_w + 'px';
    	document.getElementById("index-img1").style.top = 455/1060*_win_h + 'px';
    	document.getElementById("hot-btn1").style.width = _hotSw1 + 'px';
    	document.getElementById("hot-btn1").style.height = _hotSh1 + 'px';
    	document.getElementById("hot-btn1").style.left = 245/2560*_win_w + _scaleW1-_hotSw1 + 'px';
    	document.getElementById("hot-btn1").style.top = 699/1060*_win_h + 'px';
    	    	
    	/**弹出圈**/
    	document.getElementById("circle1").style.width = _circle + 'px';
    	document.getElementById("circle1").style.height = _circle + 'px';
    	document.getElementById("circle1").style.left = 530/2560*_win_w + 'px';
    	document.getElementById("circle1").style.top = 650/1060*_win_h + 'px';
    	document.getElementById("circle2").style.width = _circle + 'px';
    	document.getElementById("circle2").style.height = _circle + 'px';
    	document.getElementById("circle2").style.left = 775/2560*_win_w + 'px';
    	document.getElementById("circle2").style.top = 190/1060*_win_h + 'px';
    	document.getElementById("circle3").style.width = _circle + 'px';
    	document.getElementById("circle3").style.height = _circle + 'px';
    	document.getElementById("circle3").style.left = 1580/2560*_win_w + 'px';
    	document.getElementById("circle3").style.top = 450/1060*_win_h + 'px';
    	document.getElementById("circle4").style.width = _circle + 'px';
    	document.getElementById("circle4").style.height = _circle + 'px';
    	document.getElementById("circle4").style.left = 1345/2560*_win_w + 'px';
    	document.getElementById("circle4").style.top = 195/1060*_win_h + 'px';
    	document.getElementById("circle5").style.width = _circle + 'px';
    	document.getElementById("circle5").style.height = _circle + 'px';
    	document.getElementById("circle5").style.left = 810/2560*_win_w + 'px';
    	document.getElementById("circle5").style.top = 410/1060*_win_h + 'px';
    	document.getElementById("circle6").style.width = _circle + 'px';
    	document.getElementById("circle6").style.height = _circle + 'px';
    	document.getElementById("circle6").style.left = 1700/2560*_win_w + 'px';
    	document.getElementById("circle6").style.top = 215/1060*_win_h + 'px';
    	
    	document.getElementById("index-txt").style.left = (_win_w - 685)/2 + 'px';
    	document.getElementById("index-txt").style.top = ((_win_h - 1060)/2 + 477) + 'px';
//  	document.getElementById("index-button").style.left = (_win_w - 163)/2 + 'px';
//  	document.getElementById("index-button").style.top = ((_win_h - 1060)/2 + 850) + 'px';
    	document.getElementById("top1").style.left = (_win_w - 2559)/2 + 'px';
    	document.getElementById("top2").style.top = (_win_h-1280) + 'px';
    	document.getElementById("top3").style.top = (_win_h-1280) + 'px';
    	if(!isStart){
    		document.getElementById("top2").style.left = _win_w/2 - 1173 + 'px';
    		document.getElementById("top3").style.right = _win_w/2 - 1173 + 'px';
    	}
    	
    	/**好奇鼬**/
    	document.getElementById("neirong2").style.height = _win_h + 'px';
    	document.getElementById("you").style.bottom = ((_win_h - 780)/2 - 153) + 'px';
    	document.getElementById("deng").style.bottom = ((_win_h - 780)/2 + 90) + 'px';
    	document.getElementById("youS").style.bottom = ((_win_h - 780)/2 + 130) + 'px';
    	/**机敏猴**/
    	document.getElementById("neirong3").style.height = _win_h + 'px';
    	document.getElementById("houzi").style.top = ((_win_h - 780)/2 - 365) + 'px';
    	/**热烈鸟**/
    	document.getElementById("neirong4").style.height = _win_h + 'px';
    	/**果敢狮**/
    	document.getElementById("neirong5").style.height = _win_h + 'px';
    	document.getElementById("shizi").style.bottom = ((_win_h - 780)/2 - 368) + 'px';
    	/**担当象**/
    	document.getElementById("neirong6").style.height = _win_h + 'px';
    	document.getElementById("daxiang").style.bottom = ((_win_h - 780)/2 - 350) + 'px';
    	/**集团蜂**/
    	document.getElementById("neirong7").style.height = _win_h + 'px';
    	document.getElementById("mifeng1").style.top = ((_win_h - 780)/2 + 135) + 'px';
    	document.getElementById("mifeng2").style.top = ((_win_h - 780)/2 + 145) + 'px';
    	document.getElementById("mifeng3").style.top = ((_win_h - 780)/2 + 370) + 'px';
    	/**视频部分**/
//  	document.getElementById("neirong8").style.height = _win_h + 'px';
//  	document.getElementById("video-img").style.height = _win_h + 'px';
//  	document.getElementById("video-img").style.width = _win_h*1280/720 + 'px';
//  	document.getElementById("video-img").style.left = (1280 - _win_h*1280/720)/2 + 'px';
//  	document.getElementById("video-img").style.top = '0px';
//  	document.getElementById("video-button").style.left = (1280 - 110)/2 + 'px';
//  	document.getElementById("video-button").style.top = (_win_h - 127)/2 + 120 + 'px';
//  	document.getElementById("video-man").style.left = (1280-_win_w)/2 + 'px';
//  	document.getElementById("video-man").style.top = (_win_h - 600)/2 + 'px';
    	/**封底**/
    	document.getElementById("neirong9").style.height = _win_h + 'px';
    	
    	/**前来挑战-探秘奥美-获奖名单**/
    	document.getElementById("challenge-content").style.left = (_win_w - 675)/2 + 'px';
    	document.getElementById("quest-ogilvy").style.left = (_win_w - 675)/2 + 'px';
    	document.getElementById("winning-ogilvy").style.left = (_win_w - 675)/2 + 'px';
    	document.getElementById("over-ogilvy").style.left = (_win_w - 675)/2 + 'px';
    	if(_win_h <= 768){
    		document.getElementById("challenge-content").style.top = (_win_h - 550)/2 + 'px';
    		document.getElementById("challenge-bg").style.height = '550px';
    		document.getElementById("scrollContainer").style.height = '280px';
    		document.getElementById("quest-ogilvy").style.top = (_win_h - 550)/2 + 'px';
    		document.getElementById("quest-bg").style.height = '550px';
    		document.getElementById("scrollContainer1").style.height = '200px';
    		document.getElementById("scrollContainer2").style.height = '200px';
    		document.getElementById("scrollContainer3").style.height = '200px';
    		document.getElementById("scrollContainer4").style.height = '200px';
    		document.getElementById("scrollContainer5").style.height = '200px';
    		document.getElementById("scrollContainer6").style.height = '200px';
    		document.getElementById("winning-ogilvy").style.top = (_win_h - 550)/2 + 'px';
    		document.getElementById("winning-bg").style.height = '550px';
    		document.getElementById("over-ogilvy").style.top = (_win_h - 550)/2 + 'px';
    		document.getElementById("over-bg").style.height = '550px';
    	}
    	else{
    		document.getElementById("challenge-content").style.top = (_win_h - 790)/2 + 'px';
    		document.getElementById("challenge-bg").style.height = '790px';
    		document.getElementById("scrollContainer").style.height = '485px';
    		document.getElementById("quest-ogilvy").style.top = (_win_h - 790)/2 + 'px';
    		document.getElementById("quest-bg").style.height = '790px';
    		document.getElementById("scrollContainer1").style.height = '400px';
    		document.getElementById("scrollContainer2").style.height = '400px';
    		document.getElementById("scrollContainer3").style.height = '400px';
    		document.getElementById("scrollContainer4").style.height = '400px';
    		document.getElementById("scrollContainer5").style.height = '400px';
    		document.getElementById("scrollContainer6").style.height = '400px';
    		document.getElementById("winning-ogilvy").style.top = (_win_h - 790)/2 + 'px';
    		document.getElementById("winning-bg").style.height = '790px';
    		document.getElementById("over-ogilvy").style.top = (_win_h - 790)/2 + 'px';
    		document.getElementById("over-bg").style.height = '790px';
    	}
    	
    	if(_win_h <= 780){
    		/**好奇鼬**/
    		document.getElementById("you-txt1").style.top = 77 + 'px';
    		document.getElementById("you-txt2").style.top = 121 + 'px';
    		document.getElementById("you-border").style.top = 183 + 'px';
    		document.getElementById("you-txt3").style.top = 227 + 'px';
    		/**集团蜂**/
    		document.getElementById("mifeng-txt1").style.top = 145 + 'px';
    		document.getElementById("mifeng-txt2").style.top = 189 + 'px';
    		document.getElementById("mifeng-border").style.top = 252 + 'px';
    		document.getElementById("mifeng-txt3").style.top = 295 + 'px';
    		/**封底**/
    		document.getElementById("lastTxt").style.top = ((_win_h - 780)/2 + 100) + 'px';
    		document.getElementById("indexMovieTxt").style.top = ((_win_h - 780)/2 + 437) + 'px';
    		document.getElementById("indexMoviePlay").style.top = ((_win_h - 780)/2 + 467) + 'px';
    		document.getElementById("lastButton").style.bottom = '56px';
    		document.getElementById("lastButton").style.bottom = '16px';
    	}
    	else{
    		/**好奇鼬**/
    		document.getElementById("you-txt1").style.top = ((_win_h - 780)/2 + 77) + 'px';
    		document.getElementById("you-txt2").style.top = ((_win_h - 780)/2 + 121) + 'px';
    		document.getElementById("you-border").style.top = ((_win_h - 780)/2 + 183) + 'px';
    		document.getElementById("you-txt3").style.top = ((_win_h - 780)/2 + 227) + 'px';
    		/**集团蜂**/
    		document.getElementById("mifeng-txt1").style.top = ((_win_h - 780)/2 + 145) + 'px';
    		document.getElementById("mifeng-txt2").style.top = ((_win_h - 780)/2 + 189) + 'px';
    		document.getElementById("mifeng-border").style.top = ((_win_h - 780)/2 + 252) + 'px';
    		document.getElementById("mifeng-txt3").style.top = ((_win_h - 780)/2 + 295) + 'px';
    		/**封底**/
    		document.getElementById("lastTxt").style.top = ((_win_h - 780)/2 + 125) + 'px';
    		document.getElementById("indexMovieTxt").style.top = ((_win_h - 780)/2 + 470) + 'px';
    		document.getElementById("indexMoviePlay").style.top = ((_win_h - 780)/2 + 500) + 'px';
//  		document.getElementById("lastButton").style.top = ((_win_h - 780)/2 + 530) + 'px';
    	}
    }
    
    
    function reset(){
    	_win_h = $window.height();
    	_win_w = $window.width();
    	$scroll_con.height(_win_h);
    	$scroll_page.css({top:-(_count-1)*_win_h});
        $scroll_page.find('.page').height(_win_h);
    	setP();
    }
    
    function start(){
    	isStart = true;
    	$('.top2').delay(500).animate({left:-973},{easing:'swing',duration: 4000});
    	$('.top3').delay(500).animate({right:-973},{easing:'swing',duration: 4000});
    	$('.content').delay(1500).animate({opacity:1},1000,function(){
    		arrowAini();
    	});
//  	$('.index-img7').delay(1500).animate({opacity:1},1000);
    	$('.index-img6').delay(1500).animate({opacity:1},1000);
    	$('.index-img5').delay(1500).animate({opacity:1},1000);
    	$('.index-img4').delay(1500).animate({opacity:1},1000);
    	$('.index-img3').delay(1500).animate({opacity:1},1000);
    	$('.index-img2').delay(1500).animate({opacity:1},1000);
    	$('.index-img1').delay(1500).animate({opacity:1},1000);
    	$('.index-txt').delay(1800).animate({opacity:1},1000);
    	$('.index-button').delay(1800).animate({opacity:1},1000);
    }
    
    /**蜜蜂动画**/
   	var _mifeng1 = 1;
    function mifengAini1(){
    	if(_mifeng1 == 1){
    		_mifeng1 = 2
    		$('#mifeng1').animate({marginLeft:15,marginTop:-20},{duration:1000,complete:function(){
    			mifengAini1()
    		}})
    	}
    	else if(_mifeng1 == 2){
    		_mifeng1 = 3
    		$('#mifeng1').animate({marginLeft:45,marginTop:20},{duration:1000,complete:function(){
    			mifengAini1()
    		}})
    	}
    	else if(_mifeng1 == 3){
    		_mifeng1 = 1
    		$('#mifeng1').animate({marginLeft:0,marginTop:0},{duration:1000,complete:function(){
    			mifengAini1()
    		}})
    	}
    }
    var _mifeng2 = 1;
    function mifengAini2(){
    	if(_mifeng2 == 1){
    		_mifeng2 = 2
    		$('#mifeng2').animate({marginLeft:20,marginTop:-30},{duration:1200,complete:function(){
    			mifengAini2()
    		}})
    	}
    	else if(_mifeng2 == 2){
    		_mifeng2 = 3
    		$('#mifeng2').animate({marginLeft:60,marginTop:30},{duration:1200,complete:function(){
    			mifengAini2()
    		}})
    	}
    	else if(_mifeng2 == 3){
    		_mifeng2 = 1
    		$('#mifeng2').animate({marginLeft:0,marginTop:0},{duration:1200,complete:function(){
    			mifengAini2()
    		}})
    	}
    }
    var _mifeng3 = 1;
    function mifengAini3(){
    	if(_mifeng3 == 1){
    		_mifeng3 = 2
    		$('#mifeng3').animate({marginLeft:30,marginTop:-20},{duration:1300,complete:function(){
    			mifengAini3()
    		}})
    	}
    	else if(_mifeng3 == 2){
    		_mifeng3 = 3
    		$('#mifeng3').animate({marginLeft:60,marginTop:50},{duration:1300,complete:function(){
    			mifengAini3()
    		}})
    	}
    	else if(_mifeng3 == 3){
    		_mifeng3 = 1
    		$('#mifeng3').animate({marginLeft:0,marginTop:0},{duration:1300,complete:function(){
    			mifengAini3()
    		}})
    	}
    }
    
    var imgs=['img/top-1.png'/*tpa=http://www.ogilvy.com.cn/fellowship/2016/js/img/top-1.png*/,'img/top-2.png'/*tpa=http://www.ogilvy.com.cn/fellowship/2016/js/img/top-2.png*/,'img/top-3.png'/*tpa=http://www.ogilvy.com.cn/fellowship/2016/js/img/top-3.png*/,'img/index-img1.png'/*tpa=http://www.ogilvy.com.cn/fellowship/2016/js/img/index-img1.png*/,'img/index-img2.png'/*tpa=http://www.ogilvy.com.cn/fellowship/2016/js/img/index-img2.png*/,'img/index-img3.png'/*tpa=http://www.ogilvy.com.cn/fellowship/2016/js/img/index-img3.png*/,'img/index-img4.png'/*tpa=http://www.ogilvy.com.cn/fellowship/2016/js/img/index-img4.png*/,'img/index-img5.png'/*tpa=http://www.ogilvy.com.cn/fellowship/2016/js/img/index-img5.png*/,'img/index-img6.png'/*tpa=http://www.ogilvy.com.cn/fellowship/2016/js/img/index-img6.png*/,'img/index-img7.png'/*tpa=http://www.ogilvy.com.cn/fellowship/2016/js/img/index-img7.png*/];
    var loadimg=function(imgs,callback){
        if(!imgs){return false};
        var img=[];
        var len=imgs.length;
        var loadedCount = 0;
        for(var i=0;i<len;i++){
            img[i]=new Image();
            img[i].src=imgs[i];
            img[i].onload = function(){
                loadedCount++;
//              $('#load_data').html(Math.ceil(loadedCount/len*100)+"%");
                if (loadedCount>=len){
                    callback ? callback.apply(img) : null;
                }
            }
        }
    }
    
    if(window.XMLHttpRequest){
    	var browser=navigator.appName 
		var b_version=navigator.appVersion 
		var version=b_version.split(";"); 
		if(browser=="Microsoft Internet Explorer"){
			var trim_Version=version[1].replace(/[ ]/g,""); 
			if(trim_Version=="MSIE8.0"){
				isIe8 = true;
				window.onload = new function(){
					$('#loading').fadeOut()
        			// 运行    
    				init();
    				setP();
    				$(window).bind('resize',reset);	
    				start();
    				/**蜜蜂动画**/
    				mifengAini1();
    				mifengAini2();
    				mifengAini3();
				}
			}
			else{
				isIe8 = false;
				loadimg(imgs,function(){
        			$('#loading').fadeOut()
        			// 运行    
    				init();
    				setP();
    				$(window).bind('resize',reset);	
    				start();
    				/**蜜蜂动画**/
    				mifengAini1();
    				mifengAini2();
    				mifengAini3();
    			});
			}
		}
		else{
			isIe8 = false;
			loadimg(imgs,function(){
        		$('#loading').fadeOut()
        		// 运行    
    			init();
    			setP();
    			$(window).bind('resize',reset);	
    			start();
    			/**蜜蜂动画**/
    			mifengAini1();
    			mifengAini2();
    			mifengAini3();
    		});
		}
    }
    else{
    	alert('1')
    	var browser=navigator.appName 
		var b_version=navigator.appVersion 
		var version=b_version.split(";"); 
		var trim_Version=version[1].replace(/[ ]/g,""); 
		if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0"){
			alert('2')
			isIe8 = true;
			window.onload = new function(){
				$('#loading').fadeOut()
        		// 运行    
    			init();
    			setP();
    			$(window).bind('resize',reset);	
    			start();
    			/**蜜蜂动画**/
    			mifengAini1();
    			mifengAini2();
    			mifengAini3();
			}
		}
		else{
			isIe8 = false;
			loadimg(imgs,function(){
        		$('#loading').fadeOut()
        		// 运行    
    			init();
    			setP();
    			$(window).bind('resize',reset);	
    			start();
    			/**蜜蜂动画**/
    			mifengAini1();
    			mifengAini2();
    			mifengAini3();
    		});
		}
	
    }
    
	
	
    
        
    /**箭头动画**/
    function arrowAini(){
    	$('.neirong1 .arrow').animate({bottom:26},500,function(){
    		arrowAiniUp()
    	});
    }
    function arrowAiniUp(){
    	$('.neirong1 .arrow').animate({bottom:36},500,function(){
    		arrowAini();
    	});
    }
    
    
    
    
    /**box滑动**/
   	var liWidth = 214;
   	$(".boxInfo ul").each(function () {
		var el = $(this);
		el.width(liWidth * el.find('li').size());
	})	         //定义ul宽度
	
	$(".iconLeft").click(function(){
		$(this).nextAll(".boxInfo").stop().animate({scrollLeft:"-="+liWidth});
	});
		
	$(".iconRight").click(function(){
		$(this).next(".boxInfo").stop().animate({scrollLeft:"+="+liWidth});
	});
		
	$(".boxInfo ul li a").click(function(){
		liNumber = $(this).parent().parent().find('li').size();
		currentName = $(this).attr("name");
		currentImg = $(this).attr("href").replace(/\d\.jpg/, '');
		var b = $(this).attr("href");
		$("#popbox").fadeIn(200);    //淡入出现，默认600毫秒。
		$("#popImg img").attr({"src":b});
		return false;
	});
	
	$("#popleft").click(function(){
		var c = parseFloat(currentName)-1;     //currentName-1  也生效
		if(c>=1){
			$("#popImg img").attr({"src": currentImg + c + ".jpg"});
			currentName = c;
			//alert(ddd);
			}
	});
	
	$("#popright").click(function(){
		var c = parseFloat(currentName)+1;     // currentName+1  不生效 因为"+"默认字符串相连
		if(c<=liNumber){
			$("#popImg img").attr({"src": currentImg + c + ".jpg"});
			currentName = c;
			}
	});
	
	$("#scrollContainer1 .link_small2").click(function(){
		$("#scrollContainer1").data('jsp').scrollToY(0); 
	});
	$("#scrollContainer2 .link_small2").click(function(){
		$("#scrollContainer2").data('jsp').scrollToY(0); 
	});
	$('#scrollContainer2 #people_name a').click(function (e) {
		ga('send','event','探秘奥美/奥美人',this.name,'');
		e.preventDefault && e.preventDefault();
		e.returnValue = false;
		$("#scrollContainer2").data('jsp').scrollToElement('.people a[name="' + this.href.substr(this.href.lastIndexOf('#') + 1) + '"]', true);
		$("#scrollContainer2").data('jsp').scrollByY(-20);
		return false;
	});
	
	$("#scrollContainer3 .link_small2").click(function(){
		$("#scrollContainer3").data('jsp').scrollToY(0); 
	});
	$('#scrollContainer3 #people_name a').click(function (e) {
		ga('send','event','探秘奥美/致新人',this.name,'');
		e.preventDefault && e.preventDefault();
		e.returnValue = false;
		$("#scrollContainer3").data('jsp').scrollToElement('.people a[name="' + this.href.substr(this.href.lastIndexOf('#') + 1) + '"]', true);
		$("#scrollContainer3").data('jsp').scrollByY(-20);
		return false;
	});
	
	$("#scrollContainer4 .link_small2").click(function(){
		$("#scrollContainer4").data('jsp').scrollToY(0); 
	});
	$('#scrollContainer4 #people_name a').click(function (e) {
		ga('send','event','探秘奥美/成长发展',this.name,'');
		e.preventDefault && e.preventDefault();
		e.returnValue = false;
		$("#scrollContainer4").data('jsp').scrollToElement('.people a[name="' + this.href.substr(this.href.lastIndexOf('#') + 1) + '"]', true);
		$("#scrollContainer4").data('jsp').scrollByY(-20);
		return false;
	});
	
	$("#scrollContainer5 .link_small2").click(function(){
		$("#scrollContainer5").data('jsp').scrollToY(0); 
	});
	$('#scrollContainer5 #people_name a').click(function (e) {
		ga('send','event','探秘奥美/沟通魔力',this.name,'');
		e.preventDefault && e.preventDefault();
		e.returnValue = false;
		$("#scrollContainer5").data('jsp').scrollToElement('.people a[name="' + this.href.substr(this.href.lastIndexOf('#') + 1) + '"]', true);
		$("#scrollContainer5").data('jsp').scrollByY(-20);
		return false;
	});
	
	$("#scrollContainer6 .link_small2").click(function(){
		$("#scrollContainer6").data('jsp').scrollToY(0); 
	});
	$('#scrollContainer6 #people_name a').click(function (e) {
		ga('send','event','探秘奥美/奥美生活',this.name,'');
		e.preventDefault && e.preventDefault();
		e.returnValue = false;
		$("#scrollContainer6").data('jsp').scrollToElement('.people a[name="' + this.href.substr(this.href.lastIndexOf('#') + 1) + '"]', true);
		$("#scrollContainer6").data('jsp').scrollByY(-20);
		return false;
	});
	
	$('#scrollContainer .wysq').click(function (e) {
		e.preventDefault && e.preventDefault();
		e.returnValue = false;
		$("#scrollContainer").data('jsp').scrollToElement('.people a[name="' + this.href.substr(this.href.lastIndexOf('#') + 1) + '"]', true);
		return false;
	});
    
    
    $('.sub-menu').click(function(){
    	var _click = $(this).attr('id').substr($(this).attr('id').length-1,1);
    	
    	for(var i = 1;i < 7;i ++){
    		var _str = '.boxRight' + i
    		var _sub = 'sub' + i;
    		if(i == _click){
    			$(_str).show()
    			document.getElementById(_sub).style.opacity = 1;
    		}
    		else{
    			$(_str).hide()
    			document.getElementById(_sub).style.opacity = 0.5;
    		}
    	}
    	
    	if(_click == 1){
    		ga('send','event','探秘奥美','关于奥美','');
    		ga('send','pageview','探秘奥美/关于奥美');
    	}
    	else if(_click == 2){
    		ga('send','event','探秘奥美','奥美人','');
    		ga('send','pageview','探秘奥美/奥美人');
    	}
    	else if(_click == 3){
    		ga('send','event','探秘奥美','致新人','');
    		ga('send','pageview','探秘奥美/致新人');
    	}
    	else if(_click == 4){
    		ga('send','event','探秘奥美','成长发展','');
    		ga('send','pageview','探秘奥美/成长发展');
    	}
    	else if(_click == 5){
    		ga('send','event','探秘奥美','沟通魔力','');
    		ga('send','pageview','探秘奥美/沟通魔力');
    	}
    	else if(_click == 6){
    		ga('send','event','探秘奥美','奥美生活','');
    		ga('send','pageview','探秘奥美/奥美生活');
    	}
    })
    
    /**视频播放**/
   	$('#video-button').click(function(){
   		ga('send','event','稀有动物/视频','play');
   	})
   	$('#video-man').click(function(){
   		
   	})
	
})

function sq1(){
	showOver()
	ga('send','event','前来挑战','申请北京','');
}
function sq2(){
	showOver()
	ga('send','event','前来挑战','申请上海','');
}
function showOver(){
	$('.alertBg').hide();
    $('.challenge-content').hide()
    $('.alertBg').show()
    $('.over-ogilvy').show()
}

