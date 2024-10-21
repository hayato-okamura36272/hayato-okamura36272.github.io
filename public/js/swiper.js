$(function(){
	
	const swiper = new Swiper(".swiper", {
		pagination: {
        el: ".swiper-pagination",
		clickable: true,
		},
		loop: true,
		autoplay: {
        	delay: 4000,
        	disableOnInteraction: false,
      	},
		effect: "fade",
		speed: 2000,
	});
	
});