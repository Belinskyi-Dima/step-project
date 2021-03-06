"use strict";
const tabsBtn = document.querySelectorAll('.services-item');
tabsBtn.forEach(function(item) {
	item.addEventListener('click', function() {
		let activeLink = document.querySelectorAll('.services-list .active');
		if(activeLink) {
			activeLink[0].classList.remove('active');
		}
		let activeTab = document.querySelectorAll('.services-wrap .active');
		if(activeTab) {
			activeTab[0].classList.remove('active');
		}
		let tab = document.getElementById(item.dataset.tabeName);
		item.classList.add('active');
		item.style.backgraundColor = "#18CFAB";
		tab.classList.add('active');
	});
});



$(document).ready(function() {
	$('.slider').slick({
		slidesToShow: 4,
		slideToScroll: 1,
		centerMode: true,
		centerPadding: '5px',
		focusOnSelect: true,
		// waitForAnimate: false,
		asNavFor:".reviews-dig-slider"
	});
	$('.reviews-dig-slider').slick({
		slidesToShow: 1,
		asNavFor:".slider",
		arrows: false,
		fade:true
	});

	$('.work-btn').on('click', function() {
		$('#work-photo-1').removeClass('is-hiden').addClass('is-show');
		$(this).addClass('is-hiden');
		console.log(this);
	});

	$('.work-item').on('click', function (event) {
		event.preventDefault();
		let button = $(this);

		$('.activeBtn').removeClass('activeBtn');
		button.addClass('activeBtn');
		let filter = button.data('tabeName');

		if(filter == 'all'){
			$('.work-photo-item').show();
		} else {
			$('.work-photo-item').hide();
			console.log(filter)
			$('.' + filter).show();
		}
	});

	});