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

/*------------------------- Removing DOM Elements --------------------------------------------------*/