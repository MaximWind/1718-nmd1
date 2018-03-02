//when button is pressed, navigation is shown
$('.fa-bars').click(function() {
    $('.main_navigation').slideToggle(1000);
})

//arrow and stripe of list item work
$('#list_item4').mouseenter(function() {
    $('#far_down').addClass('fa-minus-square')
})

$('#list_item4').mouseleave(function() {
    $('#far_down').removeClass('fa-minus-square')
})