setTimeout(function () {
  siteWelcome.classList.remove('active')
},1500)

portfolio1.onclick = function() {
  portfolioBar.className = 'bar state-1'
}
portfolio2.onclick = function() {
  portfolioBar.className = 'bar state-2'
}
portfolio3.onclick = function() {
  portfolioBar.className = 'bar state-3'
}


window.onscroll = function() {
  //move-topbar
  window.scrollY > 0
    ? topNavbar.classList.add('sticky')
    : topNavbar.classList.remove('sticky')
}


let liTags = document.getElementsByClassName('menuTigger')
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onmouseenter = function(x) {
    let li = x.currentTarget.classList.add('active')
  }
  liTags[i].onmouseleave = function(x) {
    let li = x.currentTarget.classList.remove('active')
  }
}


let aTags = document.querySelectorAll('nav>ul>li>a')
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function(x) {
    //监听
    x.preventDefault() //阻止默认事件
    let a = x.currentTarget
    let href = a.getAttribute('href')
    let element = document.querySelector(href)
    let top = element.offsetTop//距离页面顶部的像素
    window.scrollTo(0,top-80)
  }
}