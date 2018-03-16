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
		//手机app
		$(".top_nav li:eq(4)").hover(function(){
			$(this).addClass("mygai_app");
			$(".app_code").css("display",'block');
			$(this).find('a').hover(function(){
				$(this).css('color','#C20005')
			},function(){
				$(this).css('color','#555')
			})
		},function(){
			$(this).removeClass('mygai_app');
			$('.app_code').css('display','none');
		})
		//简体中文
		$(".top_nav li:eq(5)").hover(function(){
			$(this).addClass("mygai_01")
			$('.mygai_zhong').css("display",'block');
			$(this).find('a').hover(function(){
				$(this).css('color','#C20005')
			},function(){
				$(this).css('color','#555')
			})
		},function(){
			$(this).removeClass('mygai_01');
			$('.mygai_zhong').css('display','none')
		})
		
		//搜索框商品下拉列表
		$(".nav_con_left_title").hover(function(){
			$(".nav_con_left_list").css("display","block");
			$lis = $(".nav_con_left_list ul li");
			$lis.each(function(index,value){
				$(value).hover(function(){
					$(value).css("background","white").find("a").css("color","#C20005");
					$(value).children(".nav_con_left_item").css("display","block");
				},function(){
					$(this).css("background","#C20005").find("a").css("color","white");
					$(this).children(".nav_con_left_item").css("display","none");
				})
			})
			$(".nav_con_left_list ul").mouseleave(function(){
				$(".nav_con_left_list").css("display","none");
				$(".nav_con_left_item").css("display","none");
			})
		},function(){
//			$(".nav_con_left_list").css("display","none");
		})
	
		//轮播图
		$.getJSON("json/index.json",function(data){
//			console.log(data)
//			{paths: Array(6)}
//
//			paths: ["images/gemall_20170821111949_6f747b59-ae82-4b35-8ae7-5266bf2a238d.jpg", "images/gemall_20180313154319_79207d56-b1aa-41be-9c3e-82bd4bcfa5d2.jpg", "images/gemall_20180308101621_65468725-d98b-4f18-a414-de8a981a4056.jpg", "images/gemall_20180308101456_494e4c48-4050-4e3b-969d-a7c3550c5fd8.jpg", "images/gemall_20180315171147_a5393efd-c2d3-4fa2-9ac6-87a13b882411.jpg", "images/gemall_20180315171225_b42a6998-a877-4917-87fa-8031f111da3f.jpg"]
			var url = data[0].paths;
			url.forEach(function(value,index){
				
				
				$(".ban_left").append(`
					<img src=${value}/>
				`)
			})
		})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	})
})
