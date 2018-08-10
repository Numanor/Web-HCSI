
var $a = $('#menu a').click(function() {
    $a.removeClass('selected');
    $(this).addClass('selected');
});