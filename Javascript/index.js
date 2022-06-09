$( document ).ready(function() {
    $(".top_btn").click(function(e){
        e.preventDefault()
        $("html, body").animate(
            {scrollTop: $("html, body").offset().top}, 1500
        )
    })

    let user_data_collection = [
        {
            pic:"https://github.com/hexschool/webLayoutTraining1st/blob/master/chatTalker_images/user01.jpg?raw=true",
            comment:"原來聊天機器人可以這麼有人性！團隊有完整的行銷計畫提供數位整合，讓我們公司的產品用更活潑的方式讓使用者認識。",
            company_name: "清心寡慾設計公司",
            name:"Lina 執行長",
            star_num: 3
        },
        {
            pic:"https://github.com/hexschool/webLayoutTraining1st/blob/master/chatTalker_images/user02.jpg?raw=true",
            comment:"團隊很積極的協助行銷追蹤，針對機器人進行優化，讓我們一個月內提高10000個追蹤者，客戶體驗回饋很正面！",
            company_name: "subwhat 行銷公司",
            name:"Zoe 活動長",
            star_num: 5
        },
        {
            pic:"https://github.com/hexschool/webLayoutTraining1st/blob/master/chatTalker_images/user03.jpg?raw=true",
            comment:"經營了好久的IG，一直無法提升粉絲數，和團隊合作後，才知道可以用聊天機器人玩這麼豐富的行銷活動！太讚拉～",
            company_name: "油土伯",
            name:"HowBig",
            star_num: 4
        }
    ]
    
    const swiper = new Swiper(
        ".swiper",
        {   
            spaceBetween: 16,
            slidesPerView: "auto",
            breakpoints:{
                992:{
                    slidesPerView: 3
                },
                768:{
                    slidesPerView: 2
                },
                0:{
                    slidesPerView: 1,
                    initialSlide: 0
                },
            },
            pagination: {
                el: '.comment_pagination_wrapper',
                type: 'bullets',
                bulletClass: "indicator",
                bulletActiveClass: "active",
                clickable: true
            }
        }
    )
});




