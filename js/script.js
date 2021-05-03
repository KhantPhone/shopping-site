/*swiper start */
	
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 20,
      grabCursor: true,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,

      },

      loop:true,
       autoplay: {
        delay:120043433,
        disableOnInteraction: false,

      },
    });
/*swiper end */
/*aos start*/
 AOS.init({	    	
	    	duration:1400,
	    	delay:250,
	    	offset:100	    	  		    	
	    });
/*aos end*/