
var $j = jQuery.noConflict();

$j(document).ready(function() {
	"use strict";

	 
  $j('div.esg-entry-cover').on('click touchstart', function(e) {
		  $j('.leaderrow').removeClass('open');
		  $j('.leaderrow').css("display", "none");
		 $j("html, body").animate({ scrollTop: 0 }, "slow");
		  var tinaindex = $j( this ).parent().parent();
		  var tinanr = $j( 'li.eg-leadershipskin-wrapper').index( tinaindex );
		   console.log('kitty'+tinanr);
		   
		   var tinakid=$j( '#leadershipdetail').children().children().children().children().children()[(tinanr+1)];
		   var tinakind =$j( '#leadershipdetail').children().children().children().children().find( tinakid );
		   tinakind.addClass('show');
		   tinakind.css("display", "block");
		    $j('#leadershipdetail').addClass('open');
		   var curHeight = $j('#leadershipdetail').height();
		   var autoHeight = $j('#leadershipdetail').css('height', 'auto').height();
		   
		   $j("#leadershipdetail" ).height(curHeight).animate({height: autoHeight}, 500, function() {
    $j('#leadershipdetail').addClass('open');
	});
		 });
		 
		 
		 $j('.leadershipdetailclose').click(function(e){
	var curHeight2 = $j('#leadershipdetail').height();
	$j("#leadershipdetail" ).height(curHeight2).animate({height: "0px"}, 100, function() {
    $j('#leadershipdetail').removeClass('open');
	});
	 $j(".leaderrow").removeClass('show');
	
	  });
	  
	  
	 
	  
 
 $j('.companydetail .ult-content-box-anchor').click(function(e){
	 $j('.companydetailcontainer').removeClass('open');
	 $j('.companydetailcontainer').css("display", "none");
	 
	 var valuelink = $j(this).attr("href");
	 var valuerow = valuelink+'_row';
	 $j(valuerow).addClass('show');
	  $j(valuerow).css("display", "block");
	 
	 var curHeight = $j('#companydetail').height();
		var autoHeight = $j('#companydetail').css('height', 'auto').height();
		$j("html, body").animate({ scrollTop: 0 }, "slow");
		$j("#companydetail" ).height(curHeight).animate({height: autoHeight}, 500, function() {
    $j('#companydetail').addClass('open');
	});
	  
	  });
	  
	  
	  
$j('.companydetailclose').click(function(e){
	var curHeight2 = $j('#companydetail').height();
	$j("#companydetail" ).height(curHeight2).animate({height: "0px"}, 100, function() {
    $j('#companydetail').removeClass('open');
	});
	 $j(".companydetailcontainer").removeClass('show');
	
	  });
	  
	  
	  $j('#leadershipgrid .eg-ajax-a-button').click(function(e){
		  $j("html, body").animate({ scrollTop: 0 }, "slow");
	  });
	  
	  
	   
			
				

	  
	  
	  $j('.single-portfolio_page .flex-next div').on('click touchstart', function(e) {
		  $j('video').each(function() {
		var videodingtemp = $j(this).mediaelementplayer();
		var playeraas = $j(this)[0].player.media;
		if (!videodingtemp.paused) {
			playeraas.pause();
		}
});
		  
		  });
	 
	  
	
	 
 $j('.single-portfolio_page .flex-prev div').on('click touchstart', function(e) {
	$j('video').each(function() {
		var videodingtempa = $j(this).mediaelementplayer();
		var playeraasa = $j(this)[0].player.media;
		if (!videodingtempa.paused) {
			playeraasa.pause();
		}
		});
		
	 });
	 
	 
	  $j('.companydetail .ult-content-box-anchor').click(function(e){
	 $j('.companydetailcontainer').removeClass('open');
	 $j('.companydetailcontainer').css("display", "none");
	 
	 var valuelink = $j(this).attr("href");
	 var valuerow = valuelink+'_row';
	 $j(valuerow).addClass('show');
	  $j(valuerow).css("display", "block");
	 
	 var curHeight = $j('#companydetail').height();
		var autoHeight = $j('#companydetail').css('height', 'auto').height();
		$j("html, body").animate({ scrollTop: 0 }, "slow");
		$j("#companydetail" ).height(curHeight).animate({height: autoHeight}, 500, function() {
    $j('#companydetail').addClass('open');
	});
	  
	  });
	  
	  
	  
$j('.companydetailclose').click(function(e){
	var curHeight2 = $j('#companydetail').height();
	$j("#companydetail" ).height(curHeight2).animate({height: "0px"}, 100, function() {
    $j('#companydetail').removeClass('open');
	});
	 $j(".companydetailcontainer").removeClass('show');
	
	  });
	  
	  
	  $j('#leadershipgrid .eg-ajax-a-button').click(function(e){
		  $j("html, body").animate({ scrollTop: 0 }, "slow");
	  });
	  
	  
	   
			
				

	  
	  
	  $j('.single-portfolio_page .flex-next div').on('click touchstart', function(e) {
		  $j('video').each(function() {
		var videodingtemp = $j(this).mediaelementplayer();
		var playeraas = $j(this)[0].player.media;
		if (!videodingtemp.paused) {
			playeraas.pause();
		}
});
		  
		  });
	 
	  
	
	 
 $j('.single-portfolio_page .flex-prev div').on('click touchstart', function(e) {
	$j('video').each(function() {
		var videodingtempa = $j(this).mediaelementplayer();
		var playeraasa = $j(this)[0].player.media;
		if (!videodingtempa.paused) {
			playeraasa.pause();
		}
		});
		
	 });
	 
	 
	 
	  

$j( document ).ready(function( $ ) {
if ( $j( "video.upb_video-src" ).length ) {
		var curVidHeight = $j('.homepageani .hosted-video').height();
		if(curVidHeight >650){
			 var newTop =   -(curVidHeight -650)/2;
		     $j(".upb_video-bg").css({top: newTop});
		} else {
			   $j(".upb_video-bg").css({top: 0});
		}
		
}

if ( $j( ".flexslider" ).length ) {
	$j('.flexslider').resize();
	var curSlidesHeight = $j('.flexslider .slide').height();
	
	if(curSlidesHeight>525){
		var w= $( window ).width();
		var h = (619/1200)*0.62*(w-100);
		$j(".single-portfolio_page .vc_col-sm-3.speccase").css({height: h});
	} else {
		var w= $( window ).width();
		var h = (619/1200)*0.62*(w-100);
		$j(".single-portfolio_page .vc_col-sm-3.speccase").css({height: h});
		
		 
	}	
}

});
	  
	  

$j( document ).ready(function( $ ) {
if ( $j( "video.upb_video-src" ).length ) {
		var curVidHeight = $j('.homepageani .hosted-video').height();
		if(curVidHeight >650){
			 var newTop =   -(curVidHeight -650)/2;
		     $j(".upb_video-bg").css({top: newTop});
		} else {
			   $j(".upb_video-bg").css({top: 0});
		}
		
}

if ( $j( ".flexslider" ).length ) {
	$j('.flexslider').resize();
	var curSlidesHeight = $j('.flexslider .slide').height();
	
	if(curSlidesHeight>525){
		var w= $( window ).width();
		var h = (619/1200)*0.62*(w-100);
		$j(".single-portfolio_page .vc_col-sm-3.speccase").css({height: h});
	} else {
		var w= $( window ).width();
		var h = (619/1200)*0.62*(w-100);
		$j(".single-portfolio_page .vc_col-sm-3.speccase").css({height: h});
		
		 
	}	
}

});});
