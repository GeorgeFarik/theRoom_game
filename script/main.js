$('.items').click(function () {
    $('.view').css({
        'display': 'block'
    })
})
$('.table').click(function () {
    $('.view').css('background-image', 'url("img/table.jpg")')
    $('.paper').show()
    $('.lighter').not(':has(".in_storage")').hide() //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $('.glass').not(':has(".in_storage")').hide()
})
$('.picture').click(function () {
    $('.view').css('background-image', 'url("img/picture.jpg")')
    $('.lighter').hide()
    $('.glass').hide()
    $('.paper').hide()
    $('.hints').show()
    $('span:nth-child(2)').show()

    function hint_hide() {
        $('.hints').hide()
        $('span:nth-child(2)').hide()
    }
    setTimeout(hint_hide, 2000);
})
$('.bookstore').click(function () {
    $('.view').css('background-image', 'url("img/books.jpg")')
    $('.lighter').show()
    $('.paper').hide()
    $('.glass').hide()
})
$('.door').click(function () {
    $('.view').css('background-image', 'url("img/door.jpg")')
    $('.lighter').hide()
    $('.paper').hide()
    $('.glass').hide()
    $('.hints').show()
    $('span:nth-child(3)').show()

    function hint_hide() {
        $('.hints').hide()
        $('span:nth-child(3)').hide()
    }
    setTimeout(hint_hide, 2000);
})
$('.makeup').click(function () {
    $('.view').css('background-image', 'url("img/makeup.jpg")')
    $('.glass').show()
    $('.lighter').hide()
    $('.paper').hide()
})
$('.close_view').click(function () {
    $('.view').hide()
    $('.safe_but').hide()
    $('.code').hide()
    $('.accept_erase').hide()
})
$('.case').click(function () {
    $('.case_view').show()
    $('.case').removeClass('case_animate')
})
$('.paper_clue').click(function () {
    $('.note_from_proffesor').show()
})
$('.close_docs').click(function () {
    $('.case_view').hide()
})
$('.hole').click(function () {
        $('.theRoom').hide()
        $('.hole').hide()
        $('.laboratory').show()
    })
    //===========================functions for gameplay==============
function match_on_drop(drop_elem, tool_to_match) {
    $(drop_elem).droppable({
        accept: tool_to_match
        , drop: function (event, ui) {
            var lighter = $('.lighter')
            if ($(drop_elem).is('.lighter')) {
                $('.case').addClass('case_animate')
                $('.paper_clue').show()
                delete_tool(tool_to_match)
                delete_tool(drop_elem)
            }
            
            else if ($(drop_elem).is('.bookstore') && $(tool_to_match).is('.hummer') && lighter.is('.in_storage') || $('.case').is('.case_animate')) {
                delete_tool(tool_to_match)
                $('.hole').show()
            }
            else if ($(drop_elem).is('.bookstore') && lighter.not('.in_storage')) {
                $('.hints').show()
                $('span:nth-child(1)').show()

                function hint_hide() {
                    $('.hints').hide()
                    $('span:nth-child(1)').hide()
                }
                setTimeout(hint_hide, 2000);
            }
        }
    })
}

    //-------------------------------------------------------------------------
function delete_tool(a) {
    $(a).remove()
    cell_empty()
}
//-------------------------------------------------------------------------
function cell_ocupied(tool_name) { // works
    $('.empty').has('.tool').addClass('ocupied').removeClass('empty')
    item_in_storage(tool_name)
}
//-------------------------------------------------------------------------
function cell_empty() {
    $('.ocupied').not(':has(".tool")').addClass('empty').removeClass('ocupied')
}
//-------------------------------------------------------------------------
//=============================================================================================
function item_in_storage(a) { //works
    $(a).draggable({
        revert: true
        , revertDuration: 1000
    });
    $(a).addClass('in_storage')
    $(a).attr('id', 'in_storage')
    $(a).css({
        'width': '52px'
        , 'height': '29px'
        , 'position': 'relative'
        , 'background-repeat': 'no-repeat'
        , 'display': 'block'
    })
};

function tool_on_click(tool_name, cell, forDrop) { //works
    var first_cell = $('.storage').find('.empty:first')
    var first_cell_position = first_cell.position()
    var first_cell_position_top = first_cell_position.top;
    var first_cell_position_left = first_cell_position.left;
    $(tool_name).appendTo(first_cell)
    $(tool_name).css({
        'top': first_cell_position_top - first_cell_position_top + 15
    })
    $(tool_name).css({
        'left': first_cell_position_left - first_cell_position_left + 5
    })
    cell_ocupied()
    cell_empty()
    item_in_storage(tool_name)
    match_on_drop('.lighter', '.paper')
match_on_drop('.bookstore', '.hummer')
}
//=============================================================================================
$('.paper').one('click', function () { //works
    tool_on_click('.paper', '.empty', '.forDrop')
    item_in_storage('.paper')
})
$('.glass').one('click', function () { //works
    tool_on_click('.glass', '.empty', '.forDrop')
    item_in_storage('.glass')
})
$('.lighter').one('click', function () { //works
    tool_on_click('.lighter', '.empty', '.forDrop')
    item_in_storage('.lighter')
})
$('.hummer').one('click', function () { //works
    tool_on_click('.hummer', '.empty', '.forDrop')
    item_in_storage('.hummer')
})