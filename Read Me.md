
# Creating Random Password

## Requirements

To generate a random password consisting of 4 random lowercase letters, 1 special character, and 4 random numbers using JavaScript, we can define three separate functions:

## Steps
 
Step 1: Define functions to generate random lowercase letters, special characters, and numbers

To generate a random password consisting of 4 random lowercase letters, 1 special character, and 4 random numbers using JavaScript, we can define three separate functions:


We can define three separate functions to generate the three different parts of the password - lowercase letters, special characters, and numbers.

The generateLowercase() function generates 4 random lowercase letters by first defining a string of all the lowercase letters, then looping through it 4 times and adding a random letter to the result string each time.

The generateSpecialChar() function generates a random special character by defining a string of the four special characters allowed in the password, then returning a random character from that string using Math.floor(Math.random() * 5) to generate a random index.

The generateNumber() function generates 4 random numbers by looping through a for loop 4 times and adding a random number between 0 and 9 to the result string each time.

Step 2: Generate the password by combining the three parts

Now that we have functions to generate each part of the password, we can combine them into a single generatePassword() function. This function simply calls each of the three functions and concatenates their results together.

Step 3: Call the generatePassword() function and output the result

To use the generatePassword() function, we simply need to call it and store the result in a variable. We can then output the password using console.log().

That's it! You should now be able to generate a random password consisting of 4 random lowercase letters, 1 random special character, and 4 random numbers by running the code.