$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
    $('select').material_select();


}); // end of document ready

function change_scale_img() {

    var img = document.getElementsByName("demo-img")[0];
    var method = img.id.split("-")[1];
    change_method(method);
}

function change_method(method) {

    var x = document.getElementById("img-name");
    var i = x.selectedIndex;
    var name = x.options[i].value;
    
    var img = document.getElementsByName("demo-img")[0];
    var filename = name + "_" + method;
    img.src = "flow/" + filename + ".png";
    img.id = "img-" + method;

    var caption = document.getElementById("img-caption");
    caption.innerHTML = filename;
    
}

function change_video() {

    var x = document.getElementById("video-name");
    var i = x.selectedIndex;
    var name = x.options[i].value;


    var video;
    video = document.getElementById("source-input");
    video.src = name + "/" + "input.mp4";
    document.getElementById("video-input").load();

    video = document.getElementById("source-GT");
    video.src = name + "/" + "GT.mp4";
    document.getElementById("video-GT").load();

    video = document.getElementById("source-FlowNetS");
    video.src = name + "/" + "FlowNetS.mp4";
    document.getElementById("video-FlowNetS").load();

    video = document.getElementById("source-FlowNetC");
    video.src = name + "/" + "FlowNetC.mp4";
    document.getElementById("video-FlowNetC").load();

    video = document.getElementById("source-SPyNet");
    video.src = name + "/" + "SPyNet.mp4";
    document.getElementById("video-SPyNet").load();

    video = document.getElementById("source-supervised");
    video.src = name + "/" + "supervised.mp4";
    document.getElementById("video-supervised").load();

    video = document.getElementById("source-baseline");
    video.src = name + "/" + "baseline.mp4";
    document.getElementById("video-baseline").load();

    video = document.getElementById("source-Ours");
    video.src = name + "/" + "Ours.mp4";
    document.getElementById("video-Ours").load();



}