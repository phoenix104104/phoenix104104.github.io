$(document).ready(function() {

  add_paper_thumbnail();
  $(window).resize( function() {
    add_paper_thumbnail();
  });
  


  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
    
  });

  $('.image-popup-fit-width').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
      verticalFit: false
    }
  });

  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });


  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 1200) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

});

function add_paper_thumbnail(){
  
  var window_width = $(document).width();
  var thumb1 = document.getElementById("paper-thumbnail1");
  var thumb2 = document.getElementById("paper-thumbnail2");
  
  if( window_width <= 991 ) {
    thumb1.className = "col-sm-12";
    thumb1.getElementsByTagName('img')[0].src = "images/paper_thumbnail1.png";
    thumb2.className = "col-sm-12";
    thumb2.getElementsByTagName('img')[0].src = "images/paper_thumbnail2.png";
  } else {
    thumb1.className = "col-md-12";
    thumb1.getElementsByTagName('img')[0].src = "images/paper_thumbnail.png";
    thumb2.getElementsByTagName('img')[0].src = "";
  }
}