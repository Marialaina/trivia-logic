# Trivia Logic Game


### Starting off with the api
 I went on to contentful.com to build all of my questions for the game. When I pulled the api it felt a little messy because the data was an array of objects that where inside one item in an array, which was inside an object, which was inside another object.


 ### Pulling the data

 I had to build a forEach function to take everything out of the array and buidling a new array making each question an element in the array, instead of having 10 objects in one element in an array.

 * Difficulties
    I created the new array outside of the ajax call. With the new array I tried building the button logic outside of the ajax call. I felt as if my logic was right but I wasn't getting anything. I ended up console logging and I realized the new array I made didn't have the data from the api that I was trying to push in the array. A reason that was happening was because the the data only lives inside the ajax call.

I ended up doing putting the new array and my button functionality inside my ajax call.


### Building the logic

Building the logic for the game was difficult. If I built the whole funcionality inside the button function I noticed in order to get the data to render I would have to click on any button that was on screen, but because there was no information how would the user know what they had to do?

I ended up pulling a random question from the array just to render something on the screen. I then created another variable inside the button function so when the button does get clicked it can render a new question.