//====================LABORATORY=================
$('.computer').click(function () {
    $('.view').css('background-image', 'url("img/lab_computer.jpg")')
})
$('.logos').click(function () {
    $('.view').css('background-image', 'url("img/lab_logos.jpg")')
})
$('.fire').click(function () {
    $('.view').css('background-image', 'url("img/lab_fire.jpg")')
})
$('.safe').click(function () {
    $('.view').css('background-image', 'url("img/lab_safe.jpg")')
    $('.safe_closer').css({
        'display': 'block'
    })
    
})

   
$('.shelfes').click(function () {
    $('.view').css('background-image', 'url("img/lab_shelfes.jpg")')
})