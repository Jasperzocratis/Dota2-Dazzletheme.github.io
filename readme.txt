==================================================================================================

DESCRIPTION:


DAZZLE is a modern and beautifully crafted template designed to showcase the world of Dazzle, a character from the popular online game Dota 2. This template has been meticulously constructed using clean and organized CSS3 and HTML5 code, making it highly customizable for your Dazzle-themed website.

==================================================================================================


USING THE MAILCHIMP FORM:

To use the mailchimp form you need a mailchimp url. To get the mailchimp url, login to 
your mailchimp account, click the list menu, click the stats download menu and select signup forms. 
Then choose embedded forms and select naked form. In the generated form code get the value of 
the form ACTION attribute and use it as your mailchimp url. Open the main.js file located
in the template's "js" folder and look for this line of code: 

var cfg = {
    scrollDuration : 800, // smoothscroll duration
    mailChimpURL   : ''   // mailchimp url
},

Replace the value of mailChimpURL with your mailchimp url and make sure to uncomment the function
call ssAjaxChimp() inside the ssInit() function:

(function ssInit() {

    ssPreloader();
    ssMobileMenu();
    ssFitVids();
    ssOwlCarousel();
    ssWaypoints();
    ssSmoothScroll();
    ssPlaceholder();
    ssAlertBoxes();
    ssAOS();
    ssBackToTop();

    // to use the mailchimp form, uncomment the 
    // function call ssAjaxChimp() below:
    // ssAjaxChimp(); 

})();


-----------------------------------------------------------------------------------------------------


