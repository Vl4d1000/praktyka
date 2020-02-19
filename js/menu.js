let isOpen = false;
function closeOpen() {
    if (isOpen === false) {
        openMenu();
    }
    else {
        closeMenu();
    }
}
function openMenu() {
    {
        document.getElementById("menu-content").style.display="flex";
        document.getElementById("overlay").style.display="block";
        document.getElementById("menu_icn").src="resources/Menu_box_close.png";
        isOpen = true;
    }
}
function closeMenu() {
    document.getElementById("menu-content").style.display="none";
    document.getElementById("overlay").style.display="none";
    document.getElementById("menu_icn").src="resources/Menu_box.png";
    isOpen = false;
}