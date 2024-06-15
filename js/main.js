$("header nav .burger").click(() => {
    $("header nav .burger div").toggleClass("close-animation");
    $("header nav ul").toggleClass('slide');
    $("header").toggleClass('nav-header-animation');
});


$(window).scroll(()=>{

    if($(window).scrollTop()  > $("#popular").offset().top - 100) {
        $("#scrollUpBtn").fadeIn(1000, ()=>{
            $("#scrollUpBtn").click(()=>{
                $(window).scrollTop(0);
            })
        })
    }else {
        $("#scrollUpBtn").fadeOut(1000)
    }
})



$("a[href^='#']").click((e)=>{


    let hrefVal = $(e.target).attr('href');
    let sectionsOffset = $(hrefVal).offset().top;
    $("body,html").animate({scrollTop: sectionsOffset} , 2000)
         
});