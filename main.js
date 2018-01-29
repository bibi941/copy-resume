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
let aTags = document.getElementsByClassName('menuTigger')
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onmouseenter = function(x) {
    let a=x.currentTarget
    let brother=a.nextSibling
    while (brother.nodeType===3) {
      brother=brother.nextSibling
    }
    brother.classList.add('active')
  }
  aTags[i].onmouseleave = function(x) {
    let a=x.currentTarget
     let brother = a.nextSibling
     while (brother.nodeType === 3) {
       brother = brother.nextSibling
     }
     brother.classList.remove('active')
  }
}
