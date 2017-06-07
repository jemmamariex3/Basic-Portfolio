$(document).ready(function() {
    var $btns = $('.btn').click(function() {
        if (this.id == 'all') {
            $('#parent > div').fadeIn(450);
        } else {
            var $el = $('.' + this.id).fadeIn(450);
            $('#parent > div').not($el).hide();
        }
        $btns.removeClass('active');
        $(this).addClass('active');
    })
    $("#youtube").hover(function(){
        $(this).css('background-color','white'),
            $(this).css('color','teal')
    }, function(){
        $(this).css('color', 'white'),
            $(this).css('background-color', 'teal')
    });
    $("#button").click(function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 2000);
    });

});