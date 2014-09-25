// Function to change active tab of navbar on page load
function changeActive(number){
    var i = 0;
    $('#navbarlist>li').each(function (i){
        if($(this).hasClass('active'))
            $(this).removeClass('active');
        if(++i == number)
            $(this).addClass('active');

    });
}
