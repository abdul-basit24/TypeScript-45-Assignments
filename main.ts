

/********************************************
      ======== TASK # 01 ========
*********************************************
Install Node.js, TypeScript and VS Code on your computer.   */

// Installation Completed...



/********************************************
      ======== TASK # 02 ======== 
*********************************************
Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”     */

let personName: string = `Eric`;
let message: string = '“Hello Eric, would you like to learn some Python today?”'
console.log(`Hello ${personName}, would you like to learn some Python today?`)



/********************************************
      ======== TASK # 03 ========
*********************************************
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.      */

let personName: string = 'abdul basit'
let uppercase = personName.toUpperCase()
let lowercase = personName.toLowerCase()
let firstChar1 = personName.slice(0,1);
let firstCap = firstChar1.toUpperCase()
let remChar1 = personName.slice(1,5);
let firstChar2 = personName.slice(6,7);
let secCap = firstChar2.toUpperCase()
let remChar2 = personName.slice(7);
let titleCase = firstCap+remChar1+' '+secCap+remChar2
console.log(`UPPER CASE: ${uppercase}`)
console.log(`lower case: ${lowercase}`)
console.log(`Title Case (Method-I): ${titleCase}`)
//  OR
console.log("Title Case (Method-II):" , personName.replace(/\b\w/g,c => c.toLocaleUpperCase()));



/********************************************
      ======== TASK # 04 ========
*********************************************
Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”    */

let authorName: string = `Alber Einstein`
let famousQuote: string = `“A person who never made a mistake never tried anything new.”`;
console.log(`${authorName} once said, ${famousQuote}`)



/********************************************
    ======== TASK # 05 ========
*********************************************
Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.    */

let famous_person: String = `Alber Einstein`
let famousQuote: string = `“A person who never made a mistake never tried anything new.”`;
let message: string = `${famous_person} once said, ${famousQuote}`
console.log(message)



/********************************************
    ======== TASK # 06 ========
*********************************************
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.      */

let personName: string = "\n\t Abdul Basit \t\n"
console.log(personName)
let strippedName: string = personName.trim();
console.log(strippedName)
// OR
console.log(`Unstripped (Name with whitespaces): ${personName}`)
console.log(`Stripped (Name without whitespaces): ${personName.trim()}`)



/********************************************
    ======== TASK # 07 ========
*********************************************
Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.     */

let sum = 6+2
let difference = 16-8
let multiplication = 2*4
let division = 32/4
console.log(`Sum: 6 + 2 = ${sum}; Difference: 16 - 8 = ${difference}; Multiplication: 2 x 4 = ${multiplication}; Division: 32 / 4 = ${division}`)



/********************************************
    ======== TASK # 08 ========
********************************************
You should create four lines that look like this: console.log(5 + 3)        */

let sum = 6+2
let difference = 16-8
let multiplication = 2*4
let division = 32/4
console.log(`Sum: 6 + 2 = ${sum}`)
console.log(`Difference: 16 - 8 = ${difference}`)
console.log(`Multiplication: 2 x 4 = ${multiplication}`)
console.log(`Division: 32 / 4 = ${division}`)
// OR
console.log(`Sum:\t\t\t 6 + 2 = ${sum};\n Difference:\t\t 16 - 8 = ${difference};\n Multiplication:\t 2 x 4 = ${multiplication};\n Division:\t\t 32 / 4 = ${division}`)



/********************************************
    ======== TASK # 09 ========
*********************************************
Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.       */

let favoriteNumber = 12
let message = `My favorite number is: ${favoriteNumber}`
console.log(message)



/********************************************
    ======== TASK # 10 ========
*********************************************
Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.   */

let num1 = 5
let num2 = 9
/*Name: A. Basit
Dated: [Wednesday, May 01, 2024]; these two comments would not be appeared in the output/terminal*/
console.log(num1*num2)



/********************************************
    ======== TASK # 11 ========
*********************************************
Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.     */

let names: string [] = [`Basit`, `Ali`, `Ahmed`, `Hasnain`];
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
console.log(names[4]) // output => 'undefined' because it is beyond the array's length

// OR
for (let i=0; i<names.length; i++){ 
    console.log(names[i]);
}
console.log(names.length)



/********************************************
    ======== TASK # 12 ========
*********************************************
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.     */

let names: string [] = [`Basit`, `Ali`, `Ahmed`, `Hasnain`];
console.log(`Hello`, names[0],`,`, `How are you?`) // here we didn't use space i.e names[0],`,` despite it gave space between the name & the comma in the output

console.log(`Hello`, names[0]+`,`, `How are you?`) // here we used '+' sign. Since, whenever we use concatenate via '+' then we would give spaces by ourselves. while in template literal vs code itself gives space between the data.


answer of TASK # 12 starts from here;
console.log(`Hello`, names[0]+`,`, `Would you like to take some coffee?`)
console.log(`Hello`, names[1]+`,`, `Would you like to take some coffee?`)
console.log(`Hello`, names[2]+`,`, `Would you like to take some coffee?`)
console.log(`Hello`, names[3]+`,`, `Would you like to take some coffee?`)

//OR
let message1 = `Hello`
let message2 = `Would you like to take some coffee?`
for (let i=0; i<names.length; i++){
    console.log(message1, names[i]+`,`, message2)
}



/********************************************
    ======== TASK # 13 ========
********************************************* 
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”  */

let transportation: string [] = [`Bicycle`, `Bike`, `Car`, `Bus`, `Train`, `Plane`]; 
for (let i=0; i<transportation.length; i++){
    console.log(`I would like to own a ${transportation[i]}`)
}
OR
let message = `I would like to own a `
for (let i=0; i<transportation.length; i++){
   console.log(`${message}${transportation[i]}`)
}
OR
transportation.map((i)=>{
    console.log(`I would like to own a ${i}`)
})



/********************************************
    ======== TASK # 14 ========
********************************************* 
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.  */

let guest = [`Ali`, `Hasnain`, `Ahmed`];

for (let i=0; i<guest.length; i++){
    let message = `Hello Mr. ${guest},\nYou are cordially invited on dinner at my home tonight. \nThank You..!`
    console.log(message)
}
//OR
for (let i=0; i<guest.length; i++){
    console.log(`Hello Mr. ${guest},\nYou are cordially invited on dinner at my home tonight. \nThank You..!`)
}
//OR
guest.map((invitation)=>{
    console.log(`Hello Mr. ${invitation},\nYou are cordially invited on dinner at my home tonight. \nThank You..!`)
})



/********************************************
    ======== TASK # 15 ========
********************************************* 
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.  */

let guest = [`Ali`, `Hasnain`, `Ahmed`];
let statement = `Due to some prior commitments, MR. "${guest[2]}" is not coming at the dinner.`
console.log(statement)
guest[2] = `Abid`;
console.log(`The new list of guests who are invited at dinner is as follows:`)
for (let i=0; i<guest.length; i++){
    console.log(`Mr. ${guest[i]}, You are invited at dinner tonight.`)
}

// OR
let guest = [`Ali`, `Hasnain`, `Ahmed`];
for (let i=0; i<guest.length; i++){
    console.log(`Mr. ${guest[i]}, you are invited at dinner tonight.`)
}
let notComing = `Ahmed`;
let newGuest = `Abid`;
guest[2] = newGuest
for (let i=0; i<guest.length; i++){
    console.log(`Mr. ${guest[i]}, you are invited at dinner tonight.`) // if we don't put 'i' in ${guest[i]} then it would call all the names in a single line but we have to invite each person separately that's why we used 'i'.
}
console.log(`\nMr. ${notComing}, is not coming at dinner due to some urgent work!`)

// OR
let guest = [`Ali`, `Hasnain`, `Ahmed`];
let notComing = `Ahmed`;
let message = `is not coming at dinner due to some urgent work! Now new guests are;`
console.log('Mr. ' + notComing +' ' + message)
let newGuest = `Abid`;
guest [guest.indexOf(notComing)] = newGuest; // this command will modify the previous array (i.e guest) into a new one
console.log(guest)
guest.map((i)=>{
    console.log(`Mr. ${i}, you are invited at dinner tonight. `)
})



/********************************************
    ======== TASK # 16 ========
********************************************* 
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.  */

let guest = [`Ali`, `Hasnain`, `Ahmed`];
console.log(guest)
guest.unshift(`Abid`)           // added a new guest at the beginning of the array (guest).
console.log(guest)
guest.push(`Amjad`);            // added a new guest at the end of the array (guest).
console.log(guest)
guest.splice(3,0, `Babar`)      // added a new guest at the middle of the array (guest).
console.log(guest)

guest.map((i)=>{
    console.log(`Mr. ${i}, you are invited at dinner tonight.`)
})
let statement = `\nHey guys! I have arranged a great dinner tonight.`
console.log(statement)



/********************************************
    ======== TASK # 17 ========
********************************************* 
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.  */

let guest = ['Abid', 'Ali', 'Hasnain', 'Babar', 'Ahmed', 'Amjad']
let message = `Sorry guys, due to limited space, I am allowed to invite only two persons at dinner.`
let friend1 = guest.pop();
console.log(`Sorry Mr. ${friend1}, you are no longer invited at dinner!`)
let friend2 = guest.pop();
console.log(`Sorry Mr. ${friend2}, you are no longer invited at dinner!`)
let friend3 = guest.pop();
console.log(`Sorry Mr. ${friend3}, you are no longer invited at dinner!`)
let friend4 = guest.pop();
console.log(`Sorry Mr. ${friend4}, you are no longer invited at dinner!`)

for (let i=0; i<guest.length; i++){
    console.log(`\nMr. ${guest[i]}, you are still invited at dinner.`)
}
console.log(`\n ${message}`)
guest.splice(2,0)
console.log(guest)
guest.splice(0,2)
console.log(guest)

// OR
let guest = ['Abid', 'Ali', 'Hasnain', 'Babar', 'Ahmed', 'Amjad']
console.log(`\n Unfortunately due to limited space, dining table is available for only two persons.`)
while(guest.length>2){
    let removedGuests = guest.pop();
    console.log(`Sorry Mr. ${removedGuests}, you are no longer invited at dinner!`)
}
for (let i=0; i<guest.length; i++){
    console.log(`Mr. ${guest[i]}, you are still invited at dinner!`)
}
let message = `Sorry guys, due to limited space, I am allowed to invite only two persons at dinner.`
console.log(message)
console.log(guest)
guest.splice(0,2)
console.log(guest) // 'empty list []' which was asked to be published in the terminal according to the question. 

//OR
let guest = ['Abid', 'Ali', 'Hasnain', 'Babar', 'Ahmed', 'Amjad']
console.log(`\n Unfortunately due to limited space, dining table is available for only two persons.`)
while(guest.length>2){
    let removedGuests = guest.pop();
    console.log(`Sorry Mr. ${removedGuests}, you are no longer invited at dinner!`)
}
guest.forEach((guest)=>{
    console.log(`Mr. ${guest}, you are still invited at dinner!`)
})
let message = `Sorry guys, due to limited space, I am allowed to invite only two persons at dinner.`
console.log(message)
console.log(guest)
guest.splice(0,2)
console.log(guest)



/********************************************
     ======== TASK # 18 ========
********************************************* 
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.  */

let destiny = [`Paris`, `NewYork`, `London`, `Chicago`, `Sydney`]
console.log(destiny)

let copyofArray1 = destiny.slice();
let sortedArray = copyofArray1.sort()
console.log(sortedArray);
console.log(destiny)

let copyofArray2 = destiny.slice();
let reverseArray = copyofArray2.reverse();
console.log(reverseArray)
console.log(destiny)

let reverseArray2 = destiny.reverse()  
console.log(reverseArray2)

let againReverse = reverseArray2.reverse()
console.log(againReverse)           // again reverse then we will have our original array by doing it reverse twice.

let sortedArray2 = destiny.sort()
console.log(sortedArray2)

let reverseSOrtedArray = sortedArray2.reverse()
console.log(reverseSOrtedArray)

// OR 
let destiny = [` Paris`, ` NewYork`, ` London`, ` Chicago`, ` Sydney`]
console.log('Original Order: ' + destiny);
console.log('Sorted Order: ' + [...destiny].sort());     // three dots are used to make a copy of original array & without changing it.
console.log('Original Order after Sorting: ' + destiny);
console.log('Reverse Alphabetical Order: ' + [...destiny].sort().reverse());
console.log('Original Order after Reverse sorting: ' + destiny);

destiny.reverse();
console.log("Reversed Order: ", destiny);
destiny.reverse();
console.log("Back to Original Order after (2x reverse): ", destiny);

destiny.sort();
console.log("Sorted in Alphabetcial Order: ", destiny)

destiny.sort((a, b)=> b.localeCompare(a))
console.log("Sorted in Reverse Alphabetcial Order: ", destiny)



/********************************************
     ======== TASK # 19 ========
********************************************* 
Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.  */

let guest = [' Abid', ' Ali', ' Hasnain', ' Babar', ' Ahmed', ' Amjad']
console.log(`I am inviting ${guest.length} guests at my dinner tonight, namely;\n`)

for(let i=0; i<guest.length; i++){
    console.log(`${i+1}. ${guest[i]}`)
}



/********************************************
     ======== TASK # 20 ========
********************************************* 
Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.  */

let countries = [`Pakistan`, `China`, `Iran`, `Iraq`, `UAE`, `KSA`]
countries.forEach((items)=>{
    console.log(items)
})

// OR
let countries = [`Pakistan`, `China`, `Iran`, `Iraq`, `UAE`, `KSA`]
for (let i=0; i<countries.length; i++){
    console.log(countries[i])
}



/********************************************
     ======== TASK # 21 ========
********************************************* 
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.  */

let student1 = {
    name: `Ali`,
    age: 24,
    gender: `Male`,
    RollNo: 12345
};
let student2 = {
    name: `Babar`,
    age: 29,
    gender: `Male`,
    RollNo: 56789
};
console.log(student1);
console.log(student2);



/********************************************
     ======== TASK # 22 ========
********************************************* 
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.  */

let unionArray: (string|number) [] = [23,`March`, 2024, `Saturday`] 
console.log(unionArray[0])
console.log(unionArray[1])
console.log(unionArray[2])
console.log(unionArray[3])
console.log(unionArray[4]) // intentionally found an error because index '4' is not in the array



/********************************************
     ======== TASK # 23 ========
********************************************* 
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.  */

let car = `Cultus`;
console.log("is car == 'Cultus'? Predict True")
console.log(car == `Cultus`)

console.log("is car != 'Alto'? Predict True")
console.log(car != `Alto`)      // in this it has only considered the data type, rather considering the the exact text match due to loose comparison opetator i.e (== or !=) 

console.log("is car == 'cultus'? Predict False (due to case sensitive)")
console.log(car == `cultus`)        // Case sensitive bcoz here we wrote it in lower case while it was orignially written in Title Case.

console.log("is car == 'CULTUS'? Predict False (due to case sensitive)")
console.log(car == `CULTUS`)

console.log("is car.length == 6? Predict True" )
console.log(car.length == 6)

console.log("is car.length == 8? Predict False" )
console.log(car.length == 8)

console.log("is car.length != 10? Predict True" )
console.log(car.length != 10)

console.log("is 3 <= 2 ? Predict False")
console.log(10 <= 2)

console.log("is 72 >= 83 ? Predict False")
console.log(72 >= 83)

console.log("is car = 'Cultus' && car.length == 6 ? Predict True")
console.log(car == 'Cultus' && car.length == 6)



/********************************************
     ======== TASK # 24 ========
********************************************* 
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array.  */

let name1: string = "Abdul";
let name2: string = "Abdul Basit";
let name3: string = "Mr. Abdul Basit";

if(name1 == name2) {
    console.log(name1 = name2, "hence names are equal");
} else {
    console.log(name1 != name2, "hence names are not equal");
}
if(name1 == name3) {
    console.log(name1 = name3, "hence names are equal");
} else {
    console.log(name1 != name3, "hence names are not equal");
}

//for equality and inequality

let num1: number = 5;
let num2: number = 10;
let num3: number = 5;
if(num1 == num2) {
    console.log(num1 = num2, "numbers are equal");
} else {
    console.log(num1 != num2, "numbers are not equal");
}
if(num1 == num3) {
    console.log(num1 = num3, "numbers are equal");
} else {
    console.log(num1 != num3, "numbers are not equal");
}

// greater than and less than

let person1: number = 20;
let person2: number = 25;
let person3: number = 30;
if(person1 > person2) {
    console.log("person1 is older than person2");
} else {
    console.log("person1 is younger than person2");
}

//greater than or equal to and less than or equal to

let age: number = 20;
if(age >=18) {
    console.log(age, "you are eligible for vote");
} else {
    console.log(age, "you are not eligible for vote");
}

let age2: number = 15;
if(age2 >=18) {
    console.log(age2, "you are eligible for vote");
} else {
    console.log(age2, "you are not eligible for vote");
}

// and operator or operator

const condition1: boolean = true;
const condition2: boolean = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);

// array and not in array

const names: string[] = ["Basit","Ali", "Imran"];
if (names.includes(`Ali`)){
    console.log(`'Ali' is the element of above array`)
}
if (!names.includes(`Abid`)){
    console.log(`'Abid' is not the element of above array`)
}
console.log(names.includes("Basit"));
console.log(names.includes("BASIT"));



/********************************************
     ======== TASK # 25 ========
********************************************* 
Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)  */

let alienColor1 = `Green`
if(alienColor1 == `Green`){
    console.log(`The player has just earned 5 points.`)
}
let alienColor2 = `Red`
if (alienColor2 == `Green`){
    console.log(`The player has just earned 5 points.`)
} else{ 
    console.log(`No Output`)
}



/********************************************
     ======== TASK # 26 ========
********************************************* 
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.  */

let alienColor1 = `Green`
if(alienColor1 == `Green`){
    console.log(`The player just earned 5 points for shooting the alien.`)
} else {
    console.log(`The player just earned 10 points for shooting the alien.`)
}
let alienColor2 = `Green`
if(alienColor2 == `White`){
    console.log(`The player just earned 5 points for shooting the alien.`)
} else {
    console.log(`The player just earned 10 points for shooting the alien.`)
}



/********************************************
     ======== TASK # 27 ========
********************************************* 
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.  */

let alienColor1 = `Red`
if(alienColor1 == `Green`){
    console.log(`The player just earned 5 points.`)
} else if (alienColor1 == `Yellow`){
    console.log(`The player just earned 10 points.`)
} else if (alienColor1 == `Red`) {
    console.log(`The player just earned 15 points.`)
} else {
    console.log(`The player just earned 0 points.`)
}

let alienColor2 = `Yellow`
if(alienColor2 == `Green`){
    console.log(`The player just earned 5 points.`)

} else if (alienColor2 == `Yellow`){
    console.log(`The player just earned 10 points.`)

} else if (alienColor2 == `Red`) {
    console.log(`The player just earned 15 points.`)
} else {
    console.log(`The player just earned 0 points.`)
}

let alienColor3 = `Green`
if(alienColor3 == `Green`){
    console.log(`The player just earned 5 points.`)

} else if (alienColor3 == `Yellow`){
    console.log(`The player just earned 10 points.`)

} else if (alienColor3 == `Red`) {
    console.log(`The player just earned 15 points.`)
} else {
    console.log(`The player just earned 0 points.`)
}

let alienColor4 = `White`
if(alienColor4 == `Green`){
    console.log(`The player just earned 5 points.`)

} else if (alienColor4 == `Yellow`){
    console.log(`The player just earned 10 points.`)

} else if (alienColor4 == `Red`) {
    console.log(`The player just earned 15 points.`)
} else {
    console.log(`The player just earned 0 points.`)
}



/********************************************
     ======== TASK # 28 ========
********************************************* 
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.  */

let personAge = 30;
if (personAge<2){
    console.log('The person is a baby')
} else if(personAge>=2 && personAge<4){
    console.log('The person is a toddler')
}else if(personAge>=4 && personAge<13){
    console.log(`The person is a kid`)
} else if(personAge>=13 && personAge<20){
    console.log(`The person is a teenager`)
}else if (personAge>=20 && personAge<65){
    console.log(`The person is an adult`)
}else if (personAge>=65){
    console.log(`The person is an elder`)
}



/********************************************
     ======== TASK # 29 ========
********************************************* 
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!  */

let favorite_fruits = [`banana`, `mango`, `watermelon`]

if (favorite_fruits.includes(`banana`)){
    console.log(`I really like banana !`)
}
if (favorite_fruits.includes(`apple`)){         // this would not print in the terminal because 'apple' is not included  in above array (`apple` is not the element of above array).
    console.log(`I really like apple !`)
}
if (favorite_fruits.includes(`mango`)){
    console.log(`I really like mango !`)
}
if (favorite_fruits.includes(`strawberry`)){        // same case repeat as done previously in `apple`
    console.log(`I really like strawberry !`)
}
if (favorite_fruits.includes(`watermelon`)){
    console.log(`I really like watermelon !`)
}



/********************************************
     ======== TASK # 30 ========
********************************************* 
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.  */

let userName = [`Ali`, `Basit`, `Ahmed`, `Hasnain`, `Admin`, `Abid`]

for (let i=0; i<userName.length; i++){
    if (userName[i] == `Admin`){
        console.log(`Hello ${userName[i]}, would you like to see a status report?`)
    } else {
        console.log(`Hello ${userName[i]}, thank you for logging in again.`)
    }
}
// OR
for (let user of userName){
    if (user == `Admin`){
        console.log(`Hello Admin, would you like to see a status report?`)
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
}



/********************************************
     ======== TASK # 31 ========
********************************************* 
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.  */

let userName = [`Ali`, `Basit`, `Ahmed`, `Hasnain`, `Admin`, `Abid`]
console.log(userName)
userName = [];              // empty array
console.log(userName)

if (userName.length>0){
    for (let i=0; i<userName.length; i++){
            if (userName[i] == `Admin`){
                console.log(`\n Hello ${userName[i]}, would you like to see a status report?`)
            } else {
                console.log(`Hello ${userName[i]}, thank you for logging in again.`)
            }
        }
} else {
    console.log(`We need to find some users!`)
}

// OR
if (userName.length ==0){
    console.log(`We need to find some users!`)
}
else {
    userName = []
    console.log(`All users have been removed & We need to find some users!\n Hence, the length of the array = ${userName.length}`)

}



/********************************************
     ======== TASK # 32 ========
********************************************* 
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.  */

let current_userS = [`ALI`, `Basit`, `Ahmed`, `Hasnain`, `AbiD`]      // case insensitive
let new_userS = [`amjad`, `ALI`, `AhSan`, `Raza`, `BasiT` ]           // case insensitive

new_userS.forEach(newUser =>{                   // 'for each' method prints each items/element as it callback function.
     let new_user_lower = newUser.toLowerCase(); // here we will check whether elements of new_user are available in current_users or not. Meanwhile we will also convert entire array into lower case in order to avoid case sensitivity and make them all into lower case.

let user_name_taken = current_userS.some(current_user => current_user.toLowerCase() === new_user_lower)     // some method is used to match the two arrays & it gives True/False statement in output. Also, this function returns the callback function (for-each), & verify whether its True/False.

if (user_name_taken){
     console.log(`${newUser} needs to choose a new username because it is already been used\n`)
} else {
     console.log(`${newUser} is the new member added a moment ago`)
     current_userS.push(newUser)            // 'Push' is used to add the new user in the array.
}
})
console.log(current_userS)

// OR
let current_userS = [`ALI`, `Basit`, `Ahmed`, `Hasnain`, `AbiD`]      // case insensitive
let new_userS = [`amjad`, `ALI`, `AhSan`, `Raza`, `BasiT` ]

let current_userS_lower = current_userS.map (user => user.toLowerCase()) 

for (let newUser of new_userS){
     if (current_userS_lower.includes(newUser.toLowerCase())){
          console.log(`Sorry ${newUser}, that name has already been taken`)
     } else {
          console.log(`Yes ${newUser}, is still in the list available`)
     }
}



/********************************************
     ======== TASK # 33 ========
********************************************* 
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.  */

let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let i=0; i<myNumbers.length; i++){
     if (myNumbers[i] === 1){
          console.log(`${myNumbers[i]}st`);
     } else if (myNumbers[i] === 2){
          console.log(`${myNumbers[i]}nd`)
     } else if (myNumbers[i] === 3){
          console.log(`${myNumbers[i]}rd`)
     } else if (myNumbers[i] >= 4 && myNumbers[i] <=9){
          console.log(`${myNumbers[i]}th`)
     }
}

// OR
for (let number of myNumbers){
     if (number === 1){
     console.log(`${number}st`);

     } else if (number === 2){
     console.log(`${number}nd`)

     } else if (number === 3){
     console.log(`${number}rd`)

     } else { 
     console.log(`${number}th`)
     }
}



/********************************************
     ======== TASK # 34 ========
********************************************* 
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!  */

let favorite_Pizza = [`Fajita`, `Napolean`, `BBQ`]

for (let i=0; i<favorite_Pizza.length; i++){
     console.log(`${favorite_Pizza[i]} - Pizza`)
}

for (let i=0; i<favorite_Pizza.length; i++){
     console.log(`\n I like to eat ${favorite_Pizza[i]} flavor`)
}

console.log(`\n I really like to eat Pizza. There are many kinds of Pizza with different flavors & toppings. However, one can order a customize Pizza as well according to their taste & liking.`)

// OR
for (let Pizza of favorite_Pizza){
     console.log(`${Pizza} - Pizza`)
}
for (let Pizza of favorite_Pizza){
     console.log(`\n I like to eat ${Pizza} flavor`)
}
console.log(`\n I really like to eat Pizza. There are many kinds of Pizza with different flavors & toppings. However, one can order a customize Pizza as well according to their taste & liking.`)



/********************************************
     ======== TASK # 35 ========
********************************************* 
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!  */

let animals = [`Cow`, `Goat`, `Sheep`, `Camel`]

for (let i of animals){
     console.log(i)
}
for (let j of animals){
     console.log(`${j}, is a mammal`)
}
console.log(`\n Muslims do sacrifice these animals ${animals[0]}, ${animals[1]}, ${animals[2]} & ${animals[3]} on Eid-ul-Udha!`)

// OR
animals.forEach(Halal_Animals => {
     console.log(`${Halal_Animals}, is a mammal`)
})
console.log(`\n Muslims do sacrifice these animals ${animals[0]}, ${animals[1]}, ${animals[2]} & ${animals[3]} on Eid-ul-Udha!`)

// OR
for (let Halal_Animals of animals){
     console.log(Halal_Animals)
}

for (let Halal_Animals of animals){
     console.log(`${Halal_Animals}, is a mammal`)
}
console.log(`\n Muslims do sacrifice these animals ${animals[0]}, ${animals[1]}, ${animals[2]} & ${animals[3]} on Eid-ul-Udha!`)



/********************************************
     ======== TASK # 36 ========
********************************************* 
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.  */

function make_shirt (size:number, label: string){
     return size + label;                           // OR we may also use return function mentioned below 
     // return `My shirt size is ${size};\n with a label printed ${label}`
}
let myFunc = make_shirt(36, `"I love Karachi."`)
console.log(myFunc)

//OR
let myFunction = (size:number, label:string) =>{
     return size + label
}
console.log(myFunction(36, ` "I Love Karachi"`))



/********************************************
     ======== TASK # 37 ========
********************************************* 
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.  */

function make_shirt (size: string = `Large`, label: string = `I love TypeScript`){
     console.log(`Making a shirt of size; ${size} \n with a label printed; ${label}` )
}
make_shirt();
make_shirt(`Medium`);
make_shirt(`Any size`, ` "I Love Pakistan"`);

//OR 
function make_shirt_Large(label: string, size: string = `Large`){
     return size + label
}
let myFunction = make_shirt_Large(` I love TypesScript`) // here we gave just one argument because the other/2nd argument has already been declared above as default parameter. 
console.log(myFunction)

function make_shirt_Medium(label: string, size: string = `Medium`){
     return size + label
}
let myFunction2 = make_shirt_Medium(` I love TypesScript`) // here we gave just one argument because the other/2nd argument has already been declared above as default parameter. 
console.log(myFunction2)

function make_shirt_Any(label: string, size: string = `Any`){
     return size + label
}
let myFunction3 = make_shirt_Any(` I love Pakistan`) // here we gave just one argument because the other/2nd argument has already been declared above as default parameter. 
console.log(myFunction3)



/********************************************
     ======== TASK # 38 ========
********************************************* 
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.  */

function describe_city(City: string, Country: string = `Pakistan`){
     return `${City} is in ${Country}` 
}
let city1 = describe_city(`Karachi`);
let city2 = describe_city(`Lahore`);
let city3 = describe_city(`Islamabad`);
let city4 = describe_city(`Sydney`, ` Australia`);     // value overwrite over default parameter.

console.log(city1)
console.log(city2)
console.log(city3)
console.log(city4)



/********************************************
     ======== TASK # 39 ========
********************************************* 
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.  */

function city_country(City: string, Country: string){
     return City + Country
}
console.log(city_country(`Islamabad,`, ` Pakistan`))
console.log(city_country(`Berlin,`, ` Germany`))
console.log(city_country(`Oslo,`, ` Norway`))
console.log(city_country(`Dublin,`, ` Ireland`))

//OR       we may also use this method of setting up a variable
function city_country(City: string, Country: string){
          return City + Country
     }
let c1 = city_country(`Islamabad,`, ` Pakistan`)  
let c2 = city_country(`Berlin,`, ` Germany`)  
let c3 = city_country(`Oslo,`, ` Norway`)  
let c4 = city_country(`Dublin,`, ` Ireland`)  

console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)

// OR 
function city_Country(City: string, Country: string){
     console.log(`${City}, ${Country}`)
}

city_Country(`Islamabad,`, ` Pakistan`)  
city_Country(`Berlin,`, ` Germany`)  
city_Country(`Oslo,`, ` Norway`)  
city_Country(`Dublin,`, ` Ireland`)



/********************************************
     ======== TASK # 40 ========
********************************************* 
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.  */

function make_album(artistName: string, albumTitle: string, numberOfTrack?: number){
     return {artistName, albumTitle, numberOfTrack}
}
let album1 =make_album(`Atif`, `Remix`, 15)       // `15` is an optional
let album2 =make_album(`Rahat`, `Sad`)
let album3 =make_album(`Abida`, `Sufi`)

console.log(album1)
console.log(album2)
console.log(album3)



/********************************************
     ======== TASK # 41 ========
********************************************* 
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.  */

let magicianName = [`Basit`, `Ali`, `Ahmed`, `Amjad`]

function show_magicians(){
     for (let magician of magicianName){          // this method is used to print the list of multiple items.
          console.log(magician)
     }
}
show_magicians();

//OR
function show_magicians(Magicians: string []): void{
     for (const magician of Magicians){
          console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
     }
}
const magician: string[]= [`Basit`, `Ali`, `Ahmed`, `Amjad`];
show_magicians(magician)



/********************************************
     ======== TASK # 42 ========
********************************************* 
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.      */

let magicianName = [`Basit`, `Ali`, `Ahmed`, `Amjad`]
function show_magicians(great: string){
     for (let items of magicianName){
          console.log(great, items)
     }
}
show_magicians(`Hello, How are you Mr.`)
show_magicians(`Hello,`)

//OR
function show_magicians(Magicians: string []): void{
          for (const magician of Magicians){
               console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
          }
     }
function make_great(Magicians: string []): void {
     for (let i=0; i<Magicians.length; i++){
          Magicians[i] = Magicians[i] + ` The great `
     }
}
const Magicians2: string [] = [`Basit`, `Ali`, `Ahmed`, `Amjad`]
make_great(Magicians2)
show_magicians(Magicians2)



/********************************************
     ======== TASK # 43 ========
********************************************* 
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.     */

let magicianName = [`Basit`, `Ali`, `Ahmed`, `Amjad`]
let copyOf_magicianName = [...magicianName]

function show_magicians(great: string){
     let withGreat = "";
     for (let i of magicianName){
          withGreat += `${great} ${i}\n`
     }
          return withGreat
}
let great_magician = show_magicians(`Hello`)
let makeArray = great_magician.split(`\n`)
console.log(makeArray)
console.log(magicianName)

//OR
function show_magicians(Magicians: string []): void{
          for (const magician of Magicians){
               console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
          }
     }

function make_great2(Magicians:string []): string[]{
     const great_magician:string[]= []
     for(let i=0; i<Magicians.length; i++){
          great_magician.push(Magicians[i] + ` The great`)
     }
     return great_magician;
}
const magician3: string[]= [`Basit`, `Ali`, `Ahmed`, `Amjad`]
const great_magician2: string[] = make_great2(magician3) 
show_magicians(magician3)
show_magicians(great_magician2)



/********************************************
     ======== TASK # 44 ========
********************************************* 
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.     */

function sandwich(...items: string[]): void {
     console.log("\n sandwich order:")
     for(let i = 0; i < items.length; i++) {
         console.log(` - ${items[i]}`)
     }
     }
     console.log("\n I like grilled club sandwiches");
     sandwich("chicken","onion","olives");
     sandwich("bbq sauce", "mushroom", "ice berg");
     sandwich("mayo garlic sauce", "fried egg", "ketchup");
  


/********************************************
     ======== TASK # 45 ========
********************************************* 
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.     */

type car = {
    manufacturer: string
    model: string
    name: string
    year: number
 }
 function carSpec(manufacturer: string, model: string, name: string, year: number): car {
    return {
        manufacturer,
        model,
        name,
        year,
    }
 }
 const myCar: car = carSpec("Honda", "City", "Aspire", 2024)
 console.log(myCar);