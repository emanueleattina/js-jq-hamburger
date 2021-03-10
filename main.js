// dichiaro varabile bottone
var btn = $("i.fas");

// prendo il click
btn.click(function()
{
    // dichiaro la variabile menu che seleziona la classe giusta
    var menu = $(".hamburger-menu");
    menu.toggle();
})