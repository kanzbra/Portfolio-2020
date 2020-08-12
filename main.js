$(document).ready(function () {
    $('.menu-toggler').on('click', function() {
        $('.menu-toggler').toggleClass('open');
        $('.top-nav').toggleClass('open').show();
    });
    $('.top-nav li').on('click', function(){
        $(".top-nav").hide();
    });

});

$(document).ready(function () {
    $("video").css("height, 390px;"); 
    $("#caseOne").hover(function(){
        $("video").attr("src","./images/projects/fsh/FSH.mp4").load().play();
    });
        $("#caseTwo").hover(function(){
        $("video").attr("src","./images/projects/giani/Giani.mp4").load().play();
    });
    $("#caseThree").hover(function(){
        $("video").attr("src","./images/projects/giani/hf.mp4").load().play();
    });
    });
    
var textWrapper = document.querySelector('.name');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.name .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.name',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

    $(window).on('beforeunload', function() { $("video").hide(); }); 