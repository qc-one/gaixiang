define(function(){
	return {
		fn : function(){
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
		$(".top_search_select p").hover(function(){

			$(".top_search_select ul").css("display","block")
		},function(){
			$(".top_search_select ul").css("display","none")
		})
		//二级菜单下拉列表
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
			$(".nav_con_left_list").mouseleave(function(){
				$(this).css("display","none");
				$(".nav_con_left_item").css("display","none");
			})
		},function(){
//			$(".nav_con_left_list").css("display","none");
		})
		
		}
	}
})