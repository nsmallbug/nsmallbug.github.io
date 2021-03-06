//Ниже - код для кнопок "Поделиться" под видео
Share = {

	facebook: function(purl, ptitle, pimg, text) {
		url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[title]='     + encodeURIComponent(ptitle);
		url += '&p[summary]='   + encodeURIComponent(text);
		url += '&p[url]='       + encodeURIComponent(purl);
		url += '&p[images][0]=' + encodeURIComponent(pimg);
		Share.popup(url);
	},
	twitter: function(purl, ptitle) {
		url  = 'http://twitter.com/share?';
		url += 'text='      + encodeURIComponent(ptitle);
		url += '&url='      + encodeURIComponent(purl);
		url += '&counturl=' + encodeURIComponent(purl);
		Share.popup(url);
	},
	mailru: function(purl, ptitle, pimg, text) {
		url  = 'http://connect.mail.ru/share?';
		url += 'url='          + encodeURIComponent(purl);
		url += '&title='       + encodeURIComponent(ptitle);
		url += '&description=' + encodeURIComponent(text);
		url += '&imageurl='    + encodeURIComponent(pimg);
		Share.popup(url)
	},

	me : function(el){
		console.log(el.href);
		Share.popup(el.href);
		return false;
	},

	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};


//Ниже - код для всплывающей формы обратной связи

$(document).ready(function() { // Ждём загрузки страницы

	$(".popup_bg").click(function(){	// Событие клика на затемненный фон
		$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
	});

	$('.js-contactsPopup').on('click', showPopup);

});

function showPopup() {
	//alert('!!!');
	$(".popup").fadeIn(800); // Медленно выводим изображение
}
