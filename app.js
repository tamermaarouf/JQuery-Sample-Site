/*
For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!

let featuredArticle;
*/
featuredArticle = $('.article-item')						// your code starts here!
featuredArticle.toggleClass('featured');


/*******************************************************************************/

/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

var navList;

navList = $('.nav-list').children().find('a').first().attr("href", "#1");               // your code goes here!

/*******************************************************************************/

/*									Modifying CSS Quiz 				*/

/*
For this quiz, change the font-size of all the article-items to 20px!

You must use jQuery's css() method!
*/

// Start with this variable!
var articleItems;

articleItems = $('.article-item').css('font-size', '20px')// your code goes here!
/*---------------------------------------------------------------------------------------------------*/

/*------------------------- Collecting Values Quiz --------------------------------------------------*/

/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val;
    val = $('#input').val();                      // Your code goes here!
    $('.articles').children('h1').text( val );
});

/*---------------------------------------------------------------------------------------------------*/

/*------------------------- Removing DOM Elements --------------------------------------------------*/

/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

var articleItems;

articleItems = $('.article-item').children('ul').remove();// your code goes here!

/*---------------------------------------------------------------------------------------------------*/

/*------------------------- Build a DOM (Family) Tree! --------------------------------------------------*/

/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

var $hunter = $(`<div id='hunter'><h3>hunter</h3></div>`);
var $madison = $(`<div id='madison'><h3>madison</h3></div>`);
var $bruce = $(`<div id='bruce'><h2>bruce</h2></div>`);
$bruce.append($hunter, $madison);
var $familyTwo = $(`<div id='family2'><h1>family2</h1></div>`)
$familyTwo.append($bruce)
$familyTwo.insertAfter( $('#family1') );