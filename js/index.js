require.config({
	paths : {
		'jquery' : 'jquery-1.11.3',
		'cookie' : 'jquery.cookie'
	}
})
require(['jquery','cookie'],function($,cookie){
	$(function(){
		$(".a2").click(function(){
			window.location = "html/list.html"
		})
		//跳转到购物车页
		$(".shopcar").click(function(){
			window.location = "html/cart.html"
		})
		$(".right_float_a2").click(function(){
			window.location = "html/cart.html"
		})
		//跳到登录页
		$(".top_wel").find("a").eq(0).click(function(){
			window.location = "html/enter.html"
		})
		//跳到注册页
		$(".top_wel").find("a").eq(1).click(function(){
			window.location = "html/enroll.html"
		})
		//显示账号的用户名
		let name = $.cookie("name");
		$(".top_wel").find("span").text(name)
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
		$(".top_search_select").hover(function(){

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
	
		//轮播图1
		$.getJSON("json/index.json",function(data){
			var url1 = data[0].paths1;
			url1.forEach(function(value,index){
				$(".ban_left ul").append(`
						<li>
							<a href="#">
								<img src="${value}"/>
							</a>
						</li>
				`)
				$(".ban_left ol").append(`
					<li></li>
				`)
			})
			slider();
			//第二个轮播图
			var url2 = data[1].paths2;
			url2.forEach(function(value,index){
				$(".list_main_img02 ul").append(`
						<li>
							<a href="#">
								<img src="${value}"/>
							</a>
						</li>
				`)
				$(".list_main_img02 ol").append(`
					<li></li>
				`)
			})
			//当第二个轮播图片加载完后执行函数
			$("#list_main_ul img").load(function(){
				$ullis = $("#list_main_ul li");
				$ollis = $(".list_main_img02 ol li");
				Slider($ullis,$ollis);
				
			});
			//加载第三个图片
			var url3 = data[2].paths3;
			url3.forEach(function(value,index){
				$("#list_main_left_02_ul").append(`
						<li>
							<a href="#">
								<img src="${value}"/>
							</a>
						</li>
				`)
				$("#list_main_left_02_ol").append(`
					<li></li>
				`)
			})
			//当第三个轮播图片加载完成之后执行函数
			$("#list_main_left_02_ul img").load(function(){
				
				$ullis = $("#list_main_left_02_ul li");
				$ollis = $("#list_main_left_02_ol li");
				Slider($ullis,$ollis);
			});
			//加载第四个图片
//			var url4 = data[3].paths4;
//			url4.forEach(function(value,index){
//				$(".list_main_img02 ul").append(`
//						<li>
//							<a href="#">
//								<img src="${value}"/>
//							</a>
//						</li>
//				`)
//				$(".list_main_img02 ol").append(`
//					<li></li>
//				`)
//			})
			//轮播图函数
			function Slider($a,$b){
				var index = 0;
				var timer = null;
				init($a,$b)
				//初始化函数
				function init($a,$b){
					$b.stop().eq(index).css("background","red");
					autoplay2($a,$b);
				}
				//轮播函数
				function slider2($a,$b){
					$a.stop().eq(index).fadeIn(1000).siblings().fadeOut(100);
					$b.css("background","#6e6e6e");
					$b.stop().eq(index).css("background","red");
					index++;
					if(index == $a.size()){
						index = 0;
					}
				}
				//自动轮播
				function autoplay2($a,$b){
					timer = setInterval(function(){
						slider2($a,$b);
					},3000);
				}
				
			}
		})
		//轮播函数
		function slider(){
			var index = 0;
			var timer = setInterval(autoplay,3000)
			//轮播函数
			function autoplay(){
				index++;
				$(".ban_left ul li").stop().eq(index).fadeIn(1000).siblings().fadeOut(100);
				$(".ban_left ol li").stop().eq(index).addClass("show").siblings().removeClass("show");
				
				if(index == $(".ban_left ul li").size()){
					index = 0;
				}
			}
			//显示左右按钮
			$(".ban_left").hover(function(){
				clearInterval(timer);
				$(".previous").css("display","block").click(function(){
					index--;
					$(".ban_left ul li").stop().eq(index).fadeIn(1000).siblings().fadeOut(100);
					$(".ban_left ol li").stop().eq(index).addClass("show").siblings().removeClass("show");
					if(index == -1){
						index = $(".ban_left ul li").size();
					}
				});
				$(".next").css("display","block").click(function(){
//					autoplay();
					index++;
					$(".ban_left ul li").stop().eq(index).fadeIn(1000).siblings().fadeOut(100);
					$(".ban_left ol li").stop().eq(index).addClass("show").siblings().removeClass("show");
					if(index == $(".ban_left ul li").size()){
						index = -1;
					}
				})
			},function(){
				slider();
				$(".previous").css("display","none");
				$(".next").css("display","none")
			})
		}
		
        //回到顶部
        $(".right_float_a7").click(function(){
        	$("body,html").animate({scrollTop: 0},500)
        })
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//es5轮播函数
		function Slider($div,$a,$b){
			//属性
			this.ele = $div;
			this.ullis = $a;
			this.ollis = $b;
			this.num = this.ullis.size();
			this.indexX = 0;
			this.timer = null;
			this.slid();
			this.autoplay()
		}
		//原型方法
		Slider.prototype = {
			slid : function(){
				this.ollis.css("background","#6e6e6e");
			this.ullis.stop().eq(this.indexX).fadeIn(1000).siblings().fadeOut(100);
			this.ollis.stop().eq(this.indexX).css("background","red");
			},
			addEvent : function(){
//				var that = this;
//				this.ele.mouseover(function(){
//					that.slid();
//				})
			},
			autoplay : function(){
				this.timer = setInterval(function(){
					this.indexX ++;
					if(this.indexX == this.num){
						this.indexX = 0;
					}
				}.bind(this),2000)
				this.ele.mouseenter(function(){
					clearInterval(this.timer)
				}.bind(this));
				this.ele.mouseleave(function(){
					this.autoplay()
				}.bind(this))
			}
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	})
})
