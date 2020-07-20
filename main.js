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
    


    $(window).on('beforeunload', function() { $("video").hide(); }); 