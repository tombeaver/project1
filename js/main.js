//------------------------------//
//          VARIABLES           //
//------------------------------//

// These four create variables. 'flatPrice' and 'addon' are empty and will have numbers stored in them later. 'dollar' and 'percent' will look for specifically '<input>' tags and store the referred class inside.
var flatPrice = 0;
var addon = 0;
var dollar = document.querySelectorAll('input[class=price]');
var percent = document.querySelectorAll('input[class=add]');


//--------------------------//
//          LOOPS           //
//--------------------------//


// There are two loops here to gather the value of the checked boxes in the input fields.
// The first one loops through the the entire dollar variable. There are only three inputs that return a price for that service (ie size, topper, and precut).
for(var i = 0; i < dollar.length; i++) {
    // this creates an addEventListener to the dollar variable. The arguments are as follows... 'change' is used in forms and input fields for the 'value' of such fields can change depending on which item is selected... and function(). 
    dollar[i].addEventListener('change', function() {
        // when the input is changed, the 'if' statement will determine if "this" (whats being clicked on) is actually checked...
        if(this.checked) {
            // ...if it is, then the value of what's changed will be placed in var flatPrice. parseInt converts the value from a string to an number
            flatPrice += parseInt(this.value);
            // Will log the updated value of 'flatPrice' to the console.
            console.log("Flat Price is $" + flatPrice);
        // However, if the input is changed again, as in unchecking input...
        } else {
            // ... the value will be subtracted from flatPrice
            flatPrice -= parseInt(this.value);
            // will log the updated value of 'flatPrice' to console.
            console.log("Flat Price is $" + flatPrice);
        }
    });
}   

// The second one loops through the the entire addon variable. There are more inputs that return a percentage for that service than a price.  For this project, I used a full number that will be divided by 100 later to create the actual percentage.
for(var i = 0; i < percent.length; i++) {
    // this creates an addEventListener to the addon variable. The arguments are as follows... 'change' is used in forms and input fields for the 'value' of such fields can change depending on which item is selected... and function().
    percent[i].addEventListener('change', function() {
        // when the input is changed, the 'if' statement will determine if "this" (whats being clicked on) is actually checked...
        if(this.checked) {
            // ...if it is, then the value of what's changed will be placed in var addon. parseInt converts the value from a string to an number
            addon += parseInt(this.value);
            // Will log the updated value of 'addon' to the console.
            console.log("Addon percent is " + addon + "%");
        } 
    });
}


//------------------------------//
//          FUNCTIONS           //
//------------------------------//



// 1st function will run when the 'Next' button with the attribute of "onclick=next()" is clicked. 'target' is in reference to the argument inside () in html and points to the div with a class of said target.  This function will first hide all divs and then show the div that is targeted 
function next(target) {
    // Create two variables. One selects all '<div>' tags and puts in 'var div' the other replaces "target" with the argument inside the 'next(x)'. Target is x and stores 'x' in 'var steps'
    var divs = document.querySelectorAll('div');
    var steps = document.querySelectorAll(target);
    
    // creates a 'for loop'  and loops through the 'divs' variable and changes ALL divs style.display to 'none'
    for (i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }   
    // creates a 'for loop' and loops through the 'next(x)' x=target. This will change it's style.display to 'block'
    for (i = 0; i < steps.length; i++) {
       steps[i].style.display = 'block';
    }
};


// 2nd function will run on the very last question after the finish button has been clicked.  Essentially, it will do the same this as the 'function next(target)' function, but will hide all divs and show the last page, also changing the content to display price of cake
function total() {

    // Create two variables. One selects all '<div>' tags and puts in 'var div' the other replaces "target" with the argument inside the 'next(x)'. Total will store the div tag with the class of '.total'.
    var divs = document.querySelectorAll('div');
    var total = document.querySelector('.total');
        
    // creates a 'for loop'  and loops through the 'divs' variable and changes ALL divs style.display to 'none'
    for (i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }

    // Since there is only one class of ".total" on the page, no loop is needed, and this sets the style.display to 'block'
    total.style.display = 'block';
    // Creates a mathematical algarithm to find the price of cake by adding toget the 'flatPrice' and 'addon' together. 'addon' is a percentage, so in order to find the correct price the percentage 'addon' needs to be divided by 100 to create a decimal.  The decimal is multiplied with the 'flatPrice' to create the percent of the 'flatPrice'.  Lastly, it needs to be added to the 'flatPrice' to give actual total of cake.
    total.querySelector('h2').textContent = "$" + flatPrice + (addon / 100) * flatPrice;
};

// var percent = document.querySelectorAll('input[class=add]');

// console.log(percent);
// console.log(typeof(percent));

// for(var i = 0; i < percent.length; i++) {
//     percent[i].addEventListener('change', function() {
//         if(this.checked == true) {
//             addon += parseInt(this);
//             console.log("Addon percent is " + addon + "%");
//         } 
//     });
// }


// var percent = document.querySelector('input[class=add]:checked').value;

// console.log(percent);
// console.log(typeof(percent));

// for(var i = 0; i < percent.length; i++) {
//     percent[i].addEventListener('change', function() {
//         if(this.checked == true) {
//             addon += parseInt(this.value);
//             console.log("Addon percent is " + addon + "%");
//         } 
//     });
// }






