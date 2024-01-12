//copy menu for mobile
function copyMenu() {
    //copy inside .dpt-cat to department
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.department');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML
}
copyMenu();


//show mobile menu
const menuButton = document.querySelector('.trigger'),
        closeButton = document.querySelector('.t-close',)
        addclass = document.querySelector('.site')
menuButton.addEventListener('click', function() {
    addclass.classList.toggle('shoemenu')
})
closeButton.addEventListener('click', function() {
    addclass.classList.remove('showmenu')
})

//show sub menu on mobile
const submenu = document.querySelectorAll('has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.prventDefault();
    submenu.forEach((item) != this ? item.closet('.has-child') .claassList.remove('expand') : null);
    if (this.closet('.has-child').classList != 'expand');
    this.closet('.has-child').claassList.toggle('expand')
}