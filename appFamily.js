/*------------------------- Build a DOM (Family) Tree! --------------------------------------------------*/

/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

$(function() {
	var $hunter = $(`<div id='hunter'><h3>hunter</h3></div>`);
	var $madison = $(`<div id='madison'><h3>madison</h3></div>`);
	var $bruce = $(`<div id='bruce'><h2>bruce</h2></div>`);
	$bruce.append($hunter, $madison);
	var $familyTwo = $(`<div id='family2'><h1>family2</h1></div>`)
	$familyTwo.append($bruce)
	$familyTwo.insertAfter( $('#family1') );

	var family;

	family = $('#family1').css('font-size', '45px')// your code goes here!

});