$(document).ready(() => {


    $(".dropdownMenu_icn").hover(() => {
        $(".dropdownMenu_icn>i").toggleClass("fa-times")
        $(".dropdownMenu_icn").toggleClass("addBgColor")
        $(".dropdownMenu_con").slideToggle()
    });


})