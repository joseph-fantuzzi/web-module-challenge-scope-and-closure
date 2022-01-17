function createBase(num1) {
    return function(num2) {
        console.log(num1 + num2);
    }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

/*
Functional Programming: it is a type of programming where you mostly construct and structure your code using functions.
    
    Pros: 
        - helps to solve problems effectively in a simpler way
        - improves modularity
        - supports nested functions which improves maintainability of the code
        
    Cons:
        - terminology problems
        - combining functions into a complete application is hard
        - recursion


Object-Oriented Programming: it is a type of programming model that organizes design around data or objects, rather than functions and logic.
    
    Pros:
        - re-usability
        - data redundancy
        - code maintenance
        - security
        - better productivity
        - easy troubleshooting

    Cons:
        - it can be inefficient, uses more CPU than functional programming
        - it can be too scalable, can create a massive amount of unnecessary code if left to run out of control
        - it can cause duplication
*/