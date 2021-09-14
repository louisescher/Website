function clickUserMenu() {
    if($(".dropuldiv").is(":hidden")) $(".dropuldiv").show(); 
    else $(".dropuldiv").fadeOut(180);
}
$(document).ready(() => {
    $('.dropbutton').on("click", function(){
        clickUserMenu();
    });
    $(".dropuldiv").hide();
});