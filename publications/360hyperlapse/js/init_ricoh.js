(function($){
  $(function(){
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();

  }); // end of document ready
})(jQuery); // end of jQuery name space


function change_video(tag) {

    var tag_all = document.getElementsByClassName("video-tag");
    
    for(i = 0; i < tag_all.length; i++) {
        var current_tag = $("#" + tag_all[i].id);
        
        if( current_tag.hasClass("tag-active") ) {

            current_tag.removeClass("tag-active");
        }
        
        if( tag_all[i].id == tag.id ) {

            current_tag.addClass("tag-active");
        }

    }

    var methods = ["ours_selected", "ours_saliency", "ours_forward", "input"]
    for(m = 0 ; m < methods.length ; m++) {
        var video = document.getElementById("video_" + methods[m]);
        var source = document.getElementById("source_" + methods[m]);
        source.src = "videos/" + tag.id + "/" + tag.id + "_" + methods[m] + ".mp4";
        video.load();
    }
    
}