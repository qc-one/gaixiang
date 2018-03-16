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























































































































				})
			})
		})
	})
	})
})
