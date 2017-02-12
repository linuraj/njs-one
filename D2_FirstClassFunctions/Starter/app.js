// function statement
function greet(){
    console.log('hi')
}
greet()

// functions are first class
function logGreeting(fn){
    fn();
}
logGreeting(greet)

// function expression
var greetMe = function() {
    console.log('Hi Linu')
}
greetMe()

// function its first class
logGreeting(greetMe)

// function on the fly
logGreeting(function() {
    console.log('Hello Linu')
})