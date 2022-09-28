// synchronous: tudo funciona seguindo a ordem, e se um para, todos param

console.log(" I ");
console.log(" eat ");

setTimeout(() => {
    console.log(" ice cream ");
 }, 4000)

console.log(" with a ");
console.log(" spoon.");

// asssynchronous: cada um funciona na sua própria ordem independentemente do outro, e se um para, o outro não necessáriamente para também

// callbacks: calling a function inside a function is called "callback", forming a connection between functions
function one(call_two) {
    console.log("step 1 complete. plese call step 2.");
    call_two();
};

function two() {
    console.log("step 2");
};

one(two);

// ice cream project
// callback hell (promises (for simple data handling) or async/wait (for more complex data handling) are the solution to this):
let stocks = {
    fruits: ["strawberry", "grapes", "bananas", "apples"],
    liquids: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let order = (fruit_code, call_production) => {
    console.log(`> Your ordered ${stocks.fruits[fruit_code]}.
    Please, wait until the order is placed...`);

    setTimeout(() => {
        console.log(`> Order placed. Calling production.`);
        call_production();
    }, 2000)
}

let production = () => {
    setTimeout(() => {
        console.log(`> Production called. Starting production.
    Cutting fruits...`);
    
        setTimeout(() => {
            console.log(`    The fruits were chopped.
    Adding ${stocks.liquids[0]} and ${stocks.liquids[1]}...`);

            setTimeout(() => {
                console.log(`    Water and ice were added.
    Waiting for the machine to start...`);

                setTimeout(() => {
                    console.log(`> The machine has been started.
    Placing ${stocks.holder[0]} on the icream cream...`);

                    setTimeout(() => {
                        console.log(`    The ice cream was placed on the ${stocks.holder[0]}.
    Adding ${stocks.toppings[0]} on the ice cream...`);

                            setTimeout(() => {
                                console.log(`    The ${stocks.toppings[0]} was added.
    The ice cream is ready to be served.
> Serving ice cream...`);

                                setTimeout(() => {
                                    console.log(`> The ice cream has been served.`);
                                }, 2000)  

                            }, 3000)  

                    }, 2000)  

                }, 1000)  

            }, 1000)    

        }, 2000)    

    }, 0000)

};

order(0, production);


/* promises
## promise chaining:

                        resolve -> .then -> .then 
                        /                       \
a promise is made -> pending                    .finally
                        \                       /
                        reject -----------> .catch
*/

