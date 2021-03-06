var home = {
		
		'url':function(){
			 return $('.url').attr('base-href');
		 },
		 
		 'hostUrl':function(){
			 return location.protocol+'//'+location.host;
		 },
		 
		 'cartLoad':function(){
			 if ($('#tcar').size()>0) {
				 var cart_flag = 0;  //购物车状态位 
				 $("#tcar").hover(function() { //购物车效果 
						$(this).addClass("hv");
						if (cart_flag == 0) {
							$.ajax({
								url:home.url()+'/home/getCart',
								type: 'get',
								dataType:'jsonp',
								jsonCallback: 'jsonCallback',
								beforeSend:function(){
								    $("#acar").html("<p class='alC lh35'>加载中，请稍后...</p>");
							    },
								success:function(data){
									$("#acar").html(data.html);
									cart_flag = 1;
								}
							})
						}
				},function(){
						$(this).removeClass("hv");
				});
			 }
			 
			 if ($('#racar').size() > 0) {
				 var flag = 0;
				 $("#minarg").bind("mouseenter",function(){
					 if (flag == 0) {
						$.ajax({
							url:hostUrl()+'/home/getCart',
							type: 'get',
							jsonCallback: 'jsonCallback',
							dataType:'jsonp',
							beforeSend:function(){
								$("#rxcar").html('<p class="alC c3 lh30">正在加载中...</p>');
							},
							success:function(data){
								   $("#rxcar").html(data.html);
								   flag = 1;
							}
						});
					 }
				 });
			 }
			 if ($("#rhist").size() > 0){
				 var hflag = 0;
				 $("#rhist").bind("mouseenter",function(){
					   if (hflag==0) {
					   	  $.ajax({
							  url:hostUrl()+'/home/getHistory',
							  type:'post',
							  dataType:'jsonp',
							  beforeSend:function(){
								 $("#hibx").html('<p class="alC">正在加载中...</p>');
							  },
							  success:function(data){
				 				 $("#hibx").html(data.html);
								 hflag = 1;
							  }
				 		  });
					   }
				 });
			 }
		 },

		 'headRightMenu':function(){
			 
			 $("#lnav").children().hover(function() { //菜单显示效果
				  $(this).addClass("con");
			 }, function() {
				  $(this).removeClass("con");
			 });
			 
			 $("#tul").on("mouseover",".nbt",function(event){ //头部样式效果
				$(this).addClass("on");
			 }).on("mouseout",'.nbt',function(){
				$(this).removeClass("on");
			 });
			 
			 $("#minbar").on("mouseover",".m_li",function(event){  // 右边黑蓝公用的效果
			     $(this).addClass("m_lion");
			     $(this).find(".r_av").show().stop().animate({opacity:1,right:"35px"},300);
			 }).on("mouseout",'.m_li',function(){
				 $(this).removeClass("m_lion");
				 $(this).find(".r_av").stop().animate({opacity:0,right:"70px"},300,function(){$(this).hide()});
			 });
			 
			 $("#bignav").hover(function(){ // 帮助中心菜单栏放进去的效果
				 $("#lnav").show();
		     },function() {
		    	 $("#lnav").hide();
		     });
			 
			 $('.m_tops').delegate('.top','click',function(event){ //顶部 公用函数
				 $('html,body').stop().animate({scrollTop:'0px'},600);
				 event.preventDefault();
			 });
			 
			 if ($('.miao-header').size()>0) {
				 var nav_top = 850;
				 var has_nav = false;
				 $(window).scroll(function(){
			         var ns_top = $(window).scrollTop();
					 if (ns_top>nav_top) {
					     if (!has_nav) {
					    	 $("#home_top").addClass("hs_fix");
					         has_nav = true;
					     }
					 }else{
					     if (has_nav) {
					    	 $("#home_top").removeClass("hs_fix");
				             has_nav = false;
					     }
					 }
				 });
			 }
			 
			 if ($('.header-advert').size()>0) {
				 
				  $(".header-advert").image_slider();// 轮廓图
			 }
			 
			 if ($('.top-active').size()>0) { //头部广告图
				 
				 $('.top-active').delegate('.btn-close','click',function(e){
				 	 $('.top-active').hide();
				     if (window.sessionStorage) {
				     	 sessionStorage.setItem('black','hide');
				     }
				 })
				 if (window.sessionStorage && sessionStorage.getItem('black')==='hide') {
				 	 $('.top-active').hide();
				 }
			 }
		 },

		 'initial':function(){
			 home.cartLoad();
			 home.headRightMenu();
		 }
}

var ucenterH = {
	
    'ershire' : function(){
		if ($('.enshrine').size()>0){
			$('.fav_a').on('click','.del_fava',function(e){
				var href = $(this).attr('href');
				layer.confirm('确定删除该收藏吗', {icon: 3, title:'提示'}, function(index){
					layer.close(index);
					window.location.href = href;
				});
				e.preventDefault();
				return false;
			})
		}
	},
	'address' : function(){ //收货地址
		if ($('form.address-form').size() > 0) { 
			$('form.address-form').submit(function(e) {
				var mobile = /^(13|14|15|17|18)+[0-9]{9}$/;
				var codeT = /^[0-9]{6}$/;
				var receiver_name = $('input[name="receiver_name"]').val();
				var detailed = $('input[name="detailed"]').val();
				var tel = $('input[name="tel"]').val();
				var code = $('input[name="code"]').val();
				if (receiver_name.length < 2) {
					layer.msg("收货人姓名不得少于2个字！");
			        return false;
			    }
			    if(detailed.length<4 || detailed.length>50){
			    	layer.msg("请填写收货地址4-50个字！");
			        return false;
			    }
			    if(!mobile.test(tel)){ 
			    	layer.msg("请填写正确的手机号码！");
			        return false;
			    }
			    if(code.length > 0){
				    if(!codeT.test(code)){
				    	layer.msg("请填写正确的邮编！");
				        return false;
				    }
			    }
			    $.ajax({
			        type:"POST",
			        dataType:'json',
			        async: false,
                    url: home.hostUrl()+'/address/addPost',
                    data: $('form.address-form').serialize(),
                    beforeSend: function() {
                        $('.address-form input[type="submit"]').val('正在保存').attr('disabled', true);
                    },
			        success: function(json) {
                        if (json.status) {
                        	layer.msg('操作成功,在刷新中');
                            window.location.href = json.messages;
                        } else {
                        	layer.msg(json.messages);
                            $('.address-form input[type="submit"]').val('确认提交').removeAttr('disabled');
                        }
                    }
			    });
			    e.preventDefault();
	        })
		}
		
		if ($('.address-list').size()>0){
			$('td').on('click','.dele',function(e){
				var href = $(this).attr('href');
				layer.confirm('你确认要删除该收货地址吗', {icon: 3, title:'提示'}, function(index){
					layer.close(index);
					window.location.href = href;
				});
				e.preventDefault();
				return false;
			});
			$('td').on('click','.modify',function(e){
				var href = $(this).attr('href');
				layer.confirm('你确认要设置为默认收货地址吗', {icon: 3, title:'提示'}, function(index){
					layer.close(index);
					window.location.href = href;
				});
				e.preventDefault();
				return false;
			});
		}
	},
	'userIfor':function(){
		
		if ($('.user-info').size()>0) {
			
			$('.user-info,.lh35').on('click','.togava',function(){ //选择图像
				$("#avatar").stop().slideToggle(300);
			});
			
			$(".birthday").date_input();  //生日
			
			$(".imgUl").delegate("li", "click", function(){ //选中头像
				$(this).addClass("on").siblings("li").removeClass("on");
				var path = $(this).find("img").attr("path");
				$('input[name="user_photo"]').val(path);
			});
			
			$('form.user-info').submit(function(e) {
				
				var codeT = /^[0-9]{6}$/;
				var mobileT = /^(13|14|15|17|18)+[0-9]{9}$/;
				var emailT = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/;
				var alias_name = $('input[name="alias_name"]').val();
				var phone = $('input[name="phone"]').val();
				var email = $('input[name="email"]').val();
				if (alias_name.length < 2) {
					layer.msg("用户名不得少于2个字！");
			        return false;
			    }
			    if(!mobileT.test(phone)){ 
			    	layer.msg("请填写正确的手机号码！");
			        return false;
			    }
			    if(!emailT.test(email)){
			    	layer.msg("请填写正确的邮箱！");
			        return false;
			    }
				$.ajax({
			        type:"POST",
			        dataType:'json',
			        async: false,
			        url: home.hostUrl()+'/ucenter/edit_user_info',
                    data: $('.user-info').serialize(),
                    beforeSend: function() {
                        $('.user-info input[type=submit]').val('正在提交...').attr('disabled', true);
                    },
                    success: function(json) {
                        if (json.status) {
                        	layer.msg('修改成功,在刷新中');
                            window.location.href = json.messages;
                        } else {
                        	layer.msg(json.messages);
                            $('user-info input[type=submit]').val('确认修改').removeAttr('disabled');
                        }
                    }
			    });
				e.preventDefault();
	        });
			
			$('form.formPassword').submit(function(e) {
				
				var input1 = $('input[name="old_password"]').val();
				var input2 = $('input[name="new_password"]').val();
				var input3 = $('input[name="comfirm_password"]').val();
				if (input1.length<6 || input1.length>20){
					layer.msg("原密码为6-20位");
			        return false;
			    }
				if(input2.length<6 || input2.length>20){
					layer.msg("新密码为6-20位");
			        return false;
			    }
				if(input1.trim() == input2.trim()){
					layer.msg("新密码与原密码相同");
			        return false;
				}
				if(input2.trim() != input3.trim()){
					layer.msg("两次输入的新密码不一致");
			        return false;
				}
				$.ajax({
			        type:"POST",
			        beforeSend: function() {
                        $('.formPassword input[type=submit]').val('正在提交...').attr('disabled', true);
                    },
			        dataType:'json',
			        async: false,
			        url: home.hostUrl()+'/ucenter/reset_password',
                    data: $('form.formPassword').serialize(),
                    success: function(json) {
                        if (json.status) {
                        	layer.msg('修改成功，请重新登录');
                            window.location.href = json.messages;
                        } else {
                        	layer.msg(json.messages);
                            $('form.formPassword input[type=submit]').val('确认修改').removeAttr('disabled');
                        }
                    }
			    });
				e.preventDefault();
	        });
		}
	},
	'order_reviews' : function(){
		if ($('#myform').size()>0) {
			$(".mup").change(function() {
				var id = $(this).attr("data-id");
				var input = this;
				if (window.navigator.userAgent.indexOf("MSIE") >= 1) {
					var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
					var src = input.value;
					$("#p" + id).html("<div id=divhead style='width:"+100+"px;height:"+100+"px;"+sFilter+src+"\"'></div>")
					$("#p" + id).parent().find("a").show();
				} else {
					if (input.files && input.files[0]) {
						var reader = new FileReader();
						reader.onload = function(e) {
							$("#p" + id).html('<img src="'+e.target.result+'" />');
							$("#p" + id).parent().find("a").show();
						}
						reader.readAsDataURL(input.files[0]);
					}
				}
			});
			
			$('.uu_p').on('click', 'a', function(){
				$(this).hide();
				$(this).parents('.uu_p').find('p.img_uv').html('+');
				$(this).parents('.uu_p').find('input.mup').val('');
			});
			
			$('#myform').submit(function(){
				if ($("#sd_des").val().length < 6) {
					layer.msg("您的评论太简单了吧！至少6个字哦~");
					$("#sd_des").focus();
					return false;
				}
			});
		}
	},
	'initial':function(){
		ucenterH.ershire();
		ucenterH.address();
		ucenterH.userIfor();
		ucenterH.order_reviews();
		$('img.lazy').lazyload();
	}
}
jQuery(function(){
	home.initial();
	ucenterH.initial();
})