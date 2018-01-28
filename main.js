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
  window.scrollY > 0
    ? topNavbar.classList.add('sticky')
    : topNavbar.classList.remove('sticky')
}
