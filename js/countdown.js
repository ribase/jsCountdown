$( document ).ready(function() {
	(function($) {
		$.fn.countdown = function (options){    
			
			var settings = $.extend({
				date: '12/20/2014',
				time:'7:00',
				daytime:'PM'
			}, options);
			
			
			var date = settings.date;
			var time = settings.time;
			var daytime = settings.daytime;
			
			
			
			var end = new Date(date +' '+ time +' '+ daytime)
			
			alert(end);
			
			var _second = 1000;
			var _minute = _second * 60;
			var _hour = _minute * 60;
			var _day = _hour * 24;
			var timer;
			
			function showRemaining() {
			var now = new Date();
			var distance = end - now;
			if (distance < 0) {
			
			    clearInterval(timer);
			    document.getElementById('countdown').innerHTML = 'EXPIRED!';
			
			    return;
			}
			var days = Math.floor(distance / _day);
			var hours = Math.floor((distance % _day) / _hour);
			var minutes = Math.floor((distance % _hour) / _minute);
			var seconds = Math.floor((distance % _minute) / _second);
			
			document.getElementById('countdown').innerHTML = days + 'days ';
			document.getElementById('countdown').innerHTML += hours + 'hrs ';
			document.getElementById('countdown').innerHTML += minutes + 'mins ';
			document.getElementById('countdown').innerHTML += seconds + 'secs';
			}
			
			timer = setInterval(showRemaining, 1000);
		};
	})(jQuery);
	
	
	$('#countdown').countdown();
});
