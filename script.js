//when document load => page is at the top
$(document).ready(function() {
    $(this).scrollTop(0);
});

//when button is pressed, navigation is shown
$('.fa-bars').click(function() {
    $('.navbar').slideToggle(500);
})


//when clicked on navigation => cards are flipped
$('#buttonCard1').click(function() {
    $('#card1').css('transform', 'rotateY(' + 180 + 'deg)');
    console.log('card1 flipped')
})
$('#buttonCard2').click(function() {
    $('#card2').css('transform', 'rotateY(' + 180 + 'deg)');
    console.log('card2 flipped')
})
$('#buttonCard3').click(function() {
    $('#card3').css('transform', 'rotateY(' + 180 + 'deg)');
    console.log('card3 flipped')
})