$( document ).ready(function() {
    $(".top_btn").click(function(){
        event.preventDefault()
        $("html, body").animate(
            {scrollTop: $("html, body").offset().top}, 1500
        )
    })

    let plan_num_basic = [
        600, 900, 1200, 1500, "依人數調整"
    ]

    let plan_num_standard = [
        1600, 2400, 3200, 4000, "依人數調整"
    ]

    let user = [
        "10000", "15000", "20000", "25000",">25000" 
    ]

    let active_user_num
    $(".selector").click(function(e){
        e.preventDefault();
        $(this).parents(".selector_wrapper").find(".active").removeClass("active")
        $(this).toggleClass("active")
        active_user_num = $(".active")[0].innerText.match(/>+\d\d\d\d\d|\d\d\d\d\d/g)[0]
        for (let x=0; x<user.length; x++){
            if(active_user_num == user[x] && x == 4){
                $(".user_num .num")[0].innerText = user[x]
                $(".user_num .num")[1].innerText = user[x]
                $(".price_amount .num")[0].innerText = plan_num_basic[x]
                $(".price_amount .num")[1].innerText = plan_num_standard[x]
                $(".price_amount .num").css("font-size", "26px")
                $(".price_amount .unit").css("display", "none")
            }else if(active_user_num == user[x]){
                $(".user_num .num")[0].innerText = user[x]
                $(".user_num .num")[1].innerText = user[x]
                $(".price_amount .num")[0].innerText = plan_num_basic[x]
                $(".price_amount .num")[1].innerText = plan_num_standard[x]
                $(".price_amount .num").removeAttr("style")
                $(".unit").removeAttr("style")
            }
        }
        }
    )

    $(".item").click(function(e){
        e.preventDefault();
        $(this).find(".question_wrapper").toggleClass("active")
        $(this).find(".answer").fadeToggle("slow", "linear")
    }
    )

    // const swiper = new Swiper(".swiper", {
    //         slidesPerView: 5,
    //         breakpoints:{
    //             768:{
    //                 spaceBetween: 16
    //             },
    //             375:{
    //                 spaceBetween: 11,
    //                 slidesPerView: 4
    //             },
    //             0:{
    //                 spaceBetween: 6,
    //                 slidesPerView: 3
    //             }
    //         }
    // })

});