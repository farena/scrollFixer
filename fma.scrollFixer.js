/*
This function will enable fixed navbar when window top position is equal to navbar position.
@author = Federico Arena.
@input navbar jquery element
 */
var scrollFixer = function (navbar) {
    var offset = navbar.offset().top;

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= offset) {
            navbar.addClass('fix-nav');
            $('body').css({"padding-top" : navbar.height()})
        }
        else {
            navbar.removeClass('fix-nav');
            $('body').css({"padding-top" : "0"})
        }
    })
};