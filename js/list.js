require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" :"jquery.cookie",
		"public" : "public"
	}
})
require(["jquery","cookie","public"],function($,cookie,pub){
	
	$(".logo_public").load("public.html .logo",function(){
	$(".top_public").load("public.html .top",function(){
		$(".bottom_public").load("public.html .bottom",function(){
			$(".nav_public").load("public.html .nav",function(){
				$(".right_public").load("public.html .right_float",function(){
					pub.fn();
				$(".brand_list a").hover(function(){
					$(this).find("img").css("display","none");
					$(this).find("span").css("display","block")
					$(this).css({"border":"1px solid #c20005","margin-right":"0px"})
				},function(){
					$(this).find("img").css("display","block");
					$(this).find("span").css("display","none")
					$(this).css({"border":"1px solid #ccc"})
				})
					
					
				//商品列表
				$.getJSON("../json/list.json",function(data){
					var arr = data;
					arr.forEach(function(value,index){
						$(".goods_ul").append(`<li>
						<a href="details.html?url=${value.url}&price=${value.price}&des=${value.describe}">
							<img src="${value.url}"/>
						</a>
						<div>
							<p>${value.price}</p>
							<a href="#" class="goods_a1">${value.describe}</a>
							<a href="#" class="goods_a2">${value.company}</a>
						</div>
					</li>`)
						
					})
					
				})
				$.getJSON("../json/list02.json",function(data){
					var arr = data;
					arr.forEach(function(value,index){
						
						$(".list_con2").append(`
							<a href="#">
								<img src="${value.url}"/>
							</a>
						`)
					})
					
				})


















































































































				})
			})
		})
	})
	})
})
