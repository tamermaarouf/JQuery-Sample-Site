/*
For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!

let featuredArticle;

featuredArticle = $('.article-item')						// your code starts here!
featuredArticle.toggleClass('featured');
*/

/*******************************************************************************/

/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

$(function() {
	var navList;
	navList = $('.nav-list').children().find('a').first().attr("href", "#1");   
})

/*******************************************************************************/

/*									Modifying CSS Quiz 				*/

/*
For this quiz, change the font-size of all the article-items to 20px!

You must use jQuery's css() method!


// Start with this variable!
var articleItems;

articleItems = $('.article-item').css('font-size', '20px')// your code goes here!

*/


/*---------------------------------------------------------------------------------------------------*/

/*------------------------- Collecting Values Quiz --------------------------------------------------*/

/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.



$('#input').on('change', function() {
    let val;
    val = $('#input').val();                      // Your code goes here!
    $('.articles').children('h1').text( val );
});

*/

/*---------------------------------------------------------------------------------------------------*/

/*------------------------- Removing DOM Elements --------------------------------------------------*/

/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.

let articleItems;

articleItems = $('.article-item').children('ul').remove();// your code goes here!
*/

/*---------------------------------------------------------------------------------------------------*/

/*------------------------- Iterating with Each Quiz --------------------------------------------------*/

/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!


// Your code goes here!

$( "p" ).each(function(element) {
    $( this ).text($( this ).text() + $( this ).text().length);
});

*/


/*---------------------------------------------------------------------------------------------------*/

/*------------------------- Iterating with Each Quiz --------------------------------------------------*/


/*

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!

*/

$(function() {
    $('img').attr('src', 'http://lorempixel.com/350/150/animals/');
});
