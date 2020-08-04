var menu = document.getElementsByClassName("menu")[0];
var menu_list = document.getElementsByClassName("menu_list")[0];
var close = document.getElementsByClassName("menu-close")[0];
 
menu.addEventListener("click", function() {
  close.style.display="flex";
  menu_list.classList.add("header__menu__show");
})
 
close.addEventListener("click", function() {
	close.style.display="none";
  menu_list.classList.remove("header__menu__show");
});