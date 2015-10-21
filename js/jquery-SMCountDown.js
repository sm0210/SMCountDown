/*
	author:SM
	e-mail:sm0210@qq.com
	desc:SMCountDown倒计时插件JS
	version:SMCountDown 0.1
*/
(function($){
		 $.fn.initSMCountDown=function(options){
			var s = $.extend({}, defaults, options || {});//
			var SMCountDownObj=$(this)[0];
			if(!SMCountDownObj){
				return;
			}
			//元素ID
			var SMCountDownId=SMCountDownObj.id;
			//倒计时对象
			var SMCountDownTimeId;
			/**
				启动倒计时
			*/
			s.statrSMCountDown = function(){
				var txtStr;
				var sdelay = s.delay;
				
				//如果设置禁用
				if(s.disabled){
					s.setSMCountDownDisabled(s.disabled);
				}
				//开始倒计时
				SMCountDownTimeId = setInterval(function(){
					txtStr = (sdelay--)+'s';	
					s.setSMCountDownTxt(txtStr);
					//倒计时时间到，停止计时
					if(sdelay < 0){
						s.clearSMCountDown();
					}
				},s.delayTime);
			},
			/**
				销毁倒计时
			*/
			s.clearSMCountDown = function(){
				clearInterval(SMCountDownTimeId);
				s.setSMCountDownTxt(s.delayTxt);
				
				if(s.disabled){
					s.setSMCountDownDisabled(false);
				}
			},
			/**
				重新设置元素文本
			*/
			s.setSMCountDownTxt = function(txtStr){
				$('#'+SMCountDownId).val(txtStr);
			},
			/*
				是否禁用元素
			*/
			s.setSMCountDownDisabled = function(Disabled){
				$('#'+SMCountDownId).attr("disabled",Disabled);
			}
			//function end
			
			//启动倒计时
			//s.statrSMCountDown();
			return s;
		 };	
		//初始化参
		var defaults ={
			//间隔多长时间进行倒计时，默认1秒
			delayTime : 1000,
			//默认倒计时(秒)
			delay : 60,
			//倒计时完成后的文本显示
			delayTxt : '开始倒计时',
			//倒计时时是否禁用
			disabled : false
		};
		
})(jQuery);