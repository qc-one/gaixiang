require.config({
	paths : {
		'jquery' : 'jquery-1.11.3',
		'cookie' : 'jquery.cookie'
	}
})
require(['jquery','cookie'],function($,cookie){
	$(function(){
		//我的盖象
		$(".top_nav li:eq(1)").hover(function(){
			$(this).addClass("mygai_01");
			$(".mygai_con").css("display",'block');
			$(".mygai_con a").hover(function(){
				$(this).css('color','#C20005')
			},function(){
				$(this).css('color','#555')
			})
		},function(){
			$(this).removeClass('mygai_01');
			$('.mygai_con').css('display','none');
		})
		//收藏夹
		$(".top_nav li:eq(2)").hover(function(){
			$(this).addClass("mygai_01");
			$(this).find('div').css("display",'block');
			$(this).find('a').hover(function(){
				$(this).css('color','#C20005')
			},function(){
				$(this).css('color','#555')
			})
		},function(){
			$(this).removeClass('mygai_01');
			$(this).find('div').css('display','none');
		})
		//商家支持
		$(".top_nav li:eq(3)").hover(function(){
			$(this).addClass("mygai_01");
			$(this).find('div').css("display",'block');
			$(this).find('a').hover(function(){
				$(this).css('color','#C20005')
			},function(){
				$(this).css('color','#555')
			})
		},function(){
			$(this).removeClass('mygai_01');
			$(this).find('div').css('display','none');
		})
	})
})
