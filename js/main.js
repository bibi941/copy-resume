add_offset()

getCurrtentWindow() //为了remove第一个offsety以及取到当前窗口dom

stickyTopBar_And_highlight()

setTopbar_animation()

topBar_Anchor()

portfolio_animation()
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --········································工具函数-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - ······················
function add_offset() {
    let target_anchor = document.querySelectorAll('[target-anchor]')
    for (let i = 0; i < target_anchor.length; i++) {
        target_anchor[i].classList.add('offset')
    }
}

function getCurrtentWindow() {
    let target_anchor = document.querySelectorAll('[target-anchor]')
    let minIndex = 0
    for (let i = 1; i < target_anchor.length; i++) {
        if (
            Math.abs(target_anchor[i].offsetTop - window.scrollY) <
            Math.abs(target_anchor[minIndex].offsetTop - window.scrollY)
        )
            //先假设第0个最小,开始遍历的offsetTOP，再比较 {
            minIndex = i
    }
    target_anchor[minIndex].classList.remove('offset')
    let id = target_anchor[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children //所有li包括自己

    for (let i = 0; i < brothersAndMe.length; i++) {
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}

function stickyTopBar_And_highlight() {
    window.onscroll = function() {
        //move-topbar
        window.scrollY > 0
            ? topNavbar.classList.add('sticky')
            : topNavbar.classList.remove('sticky')
        //highlight高亮
        getCurrtentWindow()
    }
}

function setTopbar_animation() {
    let liTags = document.getElementsByClassName('menuTigger')
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function(x) {
            x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function(x) {
            x.currentTarget.classList.remove('active')
        }
    }
}

function topBar_Anchor() {
    let aTags = document.querySelectorAll('nav>ul>li>a')
    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function(x) {
            x.preventDefault() //阻止默认事件
            let a = x.currentTarget
            let href = a.getAttribute('href')
            let element = document.querySelector(href)
            let top = element.offsetTop //距离页面顶部的像素
            let currentTop = window.scrollY
            let targetTop = top - 80
            let s = targetTop - currentTop //移动距离
            let time = Math.abs(s / 100 * 300) //时间
            //tween.js库
            function animate(time) {
                //自动计算多少毫秒动一次
                requestAnimationFrame(animate)
                TWEEN.update(time)
            }
            requestAnimationFrame(animate)
            //缓动类型以及参数
            var coords = {
                y: currentTop
            }
            if (time > 1000) {
                time = 1000
            } //最大时间0.5s
            var tween = new TWEEN.Tween(coords)
                .to(
                    {
                        y: targetTop
                    },
                    time
                )
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function() {
                    window.scrollTo(0, coords.y)
                })
                .start()
        }
    }
}

function portfolio_animation() {
    portfolio1.onclick = function() {
        portfolioBar.className = 'bar state-1'
    }
    portfolio2.onclick = function() {
        portfolioBar.className = 'bar state-2'
    }
    portfolio3.onclick = function() {
        portfolioBar.className = 'bar state-3'
    }
}

