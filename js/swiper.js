var mySwiper = new Swiper('.swiper-container', {
    grabCursor: true,
    loop: true,
    autoplay: true,
    effect: 'flip',
    hideOnClick: true,

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})