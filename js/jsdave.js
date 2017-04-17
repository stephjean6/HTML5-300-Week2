/*Number Form - Week 1 homework 
jsdave.js*  Dave will explain first function later in course*/

(function() {
'use strict';

//===================================
var count = 0;
var sum = 0;
var average;

DisplayStats( ); 
 
 
var submitBtn = document.getElementById( 'submit' ); 
var resetBtn = document.getElementById( 'reset' ); 
submitBtn.addEventListener( 'click', processForm ); 
resetBtn.addEventListener( 'click', reset ); 
 
 
 //============================================================================= 
 
 
function processForm( evt ) { 
     var val = document.getElementById( 'the-number' ).value; 
     var num = parseFloat( val ); 
     processNumber( num ); 
     evt.preventDefault( ); 
 } 
 

 //============================================================================= 
 
 
function processNumber( number ) { 
     ++count; 
     sum += number; 
     ComputeStats( ); 
     DisplayStats( ); 
 } 
 
 
 //============================================================================= 
 
 
function ComputeStats( ) { 
     if ( count > 0 ) { 
         average = sum / count; 
     } else { 
         average = undefined; 
     } 
 } 
 
 
 //============================================================================= 
 
 
function DisplayStats( ) { 
     displayValue( 'count', count ); 
     displayValue( 'sum', sum ); 
     displayValue( 'average', average ); 
 
 
     //------------------------------------------------------------------------- 
 
 
function displayValue( id, value ) { 
     if ( value === undefined ) { 
         value = ''; 
       } 
         document.getElementById( id ).textContent = value; 
     } 
 } 
 
 
 //============================================================================= 
 
 
function reset( ) { 
     count = 0; 
     sum = 0; 
     ComputeStats( ); 
     DisplayStats( ); 
 } 
//=======================================
})();