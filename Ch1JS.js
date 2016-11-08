// These notes are from my reading of "Learning JavaScript" : Shelley Powers, O'Reilly
//  What can you do with JS?
//  
//  1. Validate form fields: validate input before submission
//  2. Set and retreive web cookies: persist info such as usernames, account numbers, prefererences, etc. 
//  3. Dynamically alter the appearance of a page element
//  4. Hide and show elements
//  5. Move elements about the page
//  6. Capture user events and adjust the page accordingly
//  7. Scroll content
//  8. Interface with a server-side app without leaving the page: basis of Ajax and used to populate selection lists, update data
//  		refresh a display -- without reloading
//  
//  
//  
//  -Add script tags in the <head> tag in the html document, can also be included in <body> tags
//  
//  -The script tag
//  	-JS always embedded within the contex of another language, such as HTML and XHTML
//  	-Attributes:
//  		-type: specify the type of script {text/javscript, text/ecmascript, text/jscript, text/vbscript, text/vbs}
//  		-src: loading libraries
//  		-defer: if speified to "defer", lets browser know script isn't generating any content
//  		-charset: defines the character encoding used with the script 

//  JS code location
//		1. Place in body when JS dynamically creates web page content as page is being loaded
//		2. Place in head if JS defined in functions and used for page events

//	To include a JS library or script file in your web page, use this syntax:

//	<script type = "text/javascript" src="somejavascript.js"></script>

//	Comments in JS: double slash (//)
/* 	Multiline

		comment */

// 	Browser Objects
//		-Browser Object Model: set of objects implemented in most modern browser
//	JS User-defined functions
//		syntax:
			function functionname(params){
				//code
			}

//	Event Handlers
//		part of underlying DOM that each browser provides
//		can attach a function to an event so that when the event occurs, some code is processed
//	Declare variables using 
		var variable name;

//	The property operator (.)

//		accesses specific property of the document object ex. document.writeln(msg);
//		data elements, event handlers, and object methods are all properties of objects access via property operator

