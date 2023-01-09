# Module 5 Challenge: Password Generator

## Overview
 
This week’s challenge requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

## Acceptance Criteria
* AC01: Generate a password when the button is clicked
* AC02: Present a a prompts for password length criteria, accepting at least 10 characters and no more than 64
* AC03: Prompt to accept character type: Lowercase (values accepted true or false)
* AC04: Prompt to accept character type: Uppercase (values accepted true or false)
* AC05: Prompt to accept character type: Numeric (values accepted true or false)
* AC06: Prompt to accept Special characters (values accepted true or false) 
* AC07: Code should validate for each input and at least one character type should be selected
* AC08: Once prompts are answered then the password should be generated and written to the page

## Solution Overview
* Created user defined functions to present a series of prompts for password criteria
    * Further using for loop and if statement validated the user response against acceptable values
    * Alerted user in case of any unexpected values and instructed users to try again
* Stored the user prompt responses locally within variables inside the function getPasswordOptions()
* Passed the prompt response varaibles as arguments to function generatePassword()
* Used JS built in methods namely Math.floor and Math.random() to choose a random element from an array
* Finally, the generated password is written back onto the html textarea using document.querySelector method.