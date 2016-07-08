$(function($){
			function close(){
				$(".lyf-bottom-left-sheji").hide();
				$(".lyf-bottom-left-3dsheji").hide();
				$(".lyf-bottom-left-app").hide();
				$(".lyf-bottom-left").hide();
				$(".lyf-bottom-left1").hide();
				$(".lyf-bottom-left2").hide();
				$(".lyf-bottom-left-wanyan").hide();
				$(".lyf-bottom-left-dianli").hide();
				$(".lyf-bottom-left-laiyoulai").hide();
				$(".lyf-bottom-left-zhuanmendian").hide();
				$(".lyf-bottom-left-huisuo").hide();
				$(".lyf-bottom-left-lianhehui").hide();
				$(".lyf-bottom-left-Gmusie").hide();
				$(".lyf-yingyongchengxu").hide();
				$(".lyf-wangzhan").hide();
				$(".mumin-mainleft").hide();
			}
			function underline(){
					close();
				$(".header-ul li").each(function(i , e){
					$(e).removeClass("wang222");
				})
					
			}
			$(".header-ul li").eq(1).click(function(){
				underline();
				$(this).addClass("wang222");
				$(".lyf-bottom-left-sheji").show();
				$(".lyf-next-url-span2").text("网页设计");
				$(".lyf-contbg").find("span").text("网页设计");
				
			})
			$(".header-ul li").eq(2).click(function(){
				underline();
				$(this).addClass("wang222");
				$(".lyf-bottom-left-3dsheji").show();
				$(".lyf-next-url-span2").text("3D效果图与动画设计");
				$(".lyf-contbg").find("span").text("3D效果图与动画设计");
				
			})
			$(".header-ul li").eq(3).click(function(){
				underline();
				$(this).addClass("wang222");
				$(".lyf-bottom-left-app").show();
				$(".lyf-next-url-span2").text("手机 APP");
				$(".lyf-contbg").find("span").text("手机 APP");
			})
			$(".header-ul li").eq(4).click(function(){
				underline();
				$(this).addClass("wang222");
				$(".lyf-bottom-left").show();
				$(".lyf-next-url-span2").text("我们的客户");
				$(".lyf-contbg").find("span").text("我们的客户");
			})
			$(".header-ul li").eq(5).click(function(){
				underline();
				$(this).addClass("wang222");
				$(".lyf-bottom-left1").show();
				$(".lyf-next-url-span2").text("关于我们");
				$(".lyf-contbg").find("span").text("关于我们");
			})
			
			$(".header-ul li").eq(6).click(function(){
				underline();
				$(this).addClass("wang222");
				$(".lyf-bottom-left2").show();
				$(".lyf-next-url-span2").text("案例");
				$(".lyf-contbg").find("span").text("案例");
			})
			
			
			
			$(".lyf-bottom-right-top-li2 a").click(function(){
				underline();
				$(".header-ul li").eq(6).addClass("wang222");
				$(".lyf-bottom-left2").show();
				$(".lyf-next-url-span2").text("案例");
				$(".lyf-contbg").find("span").text("案例");
			})
			
			$(".wanyan").click(function(){
				close();
				$(".header-ul li").eq(6).addClass("wang222");
				$(".lyf-bottom-left-wanyan").show();
				$(".lyf-next-url-span2").text("2015年度产品颁奖晚宴(3D效果图)");
				$(".lyf-contbg").find("span").text("2015年度产品颁奖晚宴(3D效果图)");
			})
			
			$(".dianli").click(function(){
				close();
				$(".header-ul li").eq(6).addClass("wang222");
				$(".lyf-bottom-left-dianli").show();
				$(".lyf-next-url-span2").text("2015年度产品颁奖典礼(3D效果图)");
				$(".lyf-contbg").find("span").text("2015年度产品颁奖典礼(3D效果图)");
			})
			
			$(".laiyoulai").click(function(){
				close();
				$(".header-ul li").eq(6).addClass("wang222");
				$(".lyf-bottom-left-laiyoulai").show();
				$(".lyf-next-url-span2").text("广州来又来商城HEARTFook珠宝店(3D效果图)");
				$(".lyf-contbg").find("span").text("广州来又来商城HEARTFook珠宝店(3D效果图)");
			})
			
			$(".banshichu").click(function(){
				close();
				$(".header-ul li").eq(6).addClass("wang222");
				$(".lyf-bottom-left-zhuanmendian").show();
				$(".lyf-next-url-span2").text("法国DSG皮革专门店办事处(3D效果图)");
				$(".lyf-contbg").find("span").text("法国DSG皮革专门店办事处(3D效果图)");
			})
			
			$(".huisuo").click(function(){
				close();
				$(".header-ul li").eq(6).addClass("wang222");
				$(".lyf-bottom-left-huisuo").show();
				$(".lyf-next-url-span2").text("花都溢盈糊别墅会所(3D效果图)");
				$(".lyf-contbg").find("span").text("花都溢盈糊别墅会所(3D效果图)");
			})
			$(".lianhehui").click(function(){
				close();
				$(".header-ul li").eq(6).addClass("wang222");
				$(".lyf-bottom-left-lianhehui").show();
				$(".lyf-next-url-span2").text("WEF世界应急联合会(网页)");
				$(".lyf-contbg").find("span").text("WEF世界应急联合会(网页)");
			})
			$(".Gmusic").click(function(){
				close();
				$(".header-ul li").eq(6).addClass("wang222");
				$(".lyf-bottom-left-Gmusie").show();
				$(".lyf-next-url-span2").text("Gmusic(网页)");
				$(".lyf-contbg").find("span").text("Gmusic(网页)");
			})
			
			
			
			$(".yingyongchengxu").click(function(){
				close();
				$(".header-ul li").eq(6).addClass("wang222");
				$(".lyf-yingyongchengxu").show();
				$(".lyf-next-url-span2").text("未上线手机应用程序");
				$(".lyf-contbg").find("span").text("未上线手机应用程序");
			})
			
			$(".wangzhi").click(function(){
				close();
				$(".header-ul li").eq(6).addClass("wang222");
				$(".lyf-wangzhan").show();
				$(".lyf-next-url-span2").text("未上线网站");
				$(".lyf-contbg").find("span").text("未上线网站");
			})
			
			$(".jiaruwomen").click(function(){
				close();
				$(".header-ul li").eq(6).addClass("wang222");
				$(".mumin-mainleft").show();
				$(".lyf-next-url-span2").text("加入我们");
				$(".lyf-contbg").find("span").text("加入我们");
			})
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		})