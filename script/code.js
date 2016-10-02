//======================code=======================
$('.safe_closer').click(function () {
    $('.view').css('background-image', 'url("img/lab_safe_numbers.jpg")')
    $('.safe_but').css({
        'display': 'block'
    })
    $('.code').css({
        'display': 'block'
    })
    $('.accept_erase').css({
        'display': 'block'
    })
    
    var counter = 0;
    $('td').one('click', function () {
        var $that = $(this);
        if (counter == 0) {
            
            
            
            $('.code').append('<p>'+$that.html()+'</p>')
            
           counter++;
        }
    })
})
$('.erase').on('click', function () { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                $(".code :last-child").remove();
            })



$('.accept_code').on('click', function () {
    if($(".code p:nth-child(1)").html()==2 && $(" .code p:nth-child(2)").html()==8 && $(" .code p:nth-child(3)").html()==9 && $(" .code p:nth-child(4)").html()==1){
       $('.view').css('background-image', 'url("img/lab_safeOpened.jpg")')
       $('.accept_erase').hide();
       $('.safe_but').hide();
        $('.code').hide();
    }else{
//        put sound here!!!!!!!!!!!!!!!
    }

})