var menu_button_el = document.getElementById('menu-icon');

menu_button_el.addEventListener('click', function(e) {
    e.preventDefault();
    let mobile_menu_el = document.getElementById('mobile-nav-container');
    let menu_icon_el = document.getElementById('menu-icon-image');
    
    if(mobile_menu_el.style.display == '' || mobile_menu_el.style.display == 'none') {
        mobile_menu_el.style.display = 'block';
    } else {
        mobile_menu_el.style.display = 'none';
    }


    //let menu_icon_el = document.getElementById('menu-icon-image');
    //console.log(menu_icon_el);
    //menu_icon_el.src = '/images/icon-close.svg'
});