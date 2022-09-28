/* promises
## promise chaining:

                        resolve -> .then -> .then 
                        /                       \
a promise is made -> pending                    .finally
                        \                       /
                        reject -----------> .catch
*/

let stocks = {
    fruits: ["strawberry", "grapes", "bananas", "apples"],
    liquids: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true;

// relationship between time and work
let order = (time, work) => {

    return new Promise( (resolve, reject) => {
        // if and else statements
        if (is_shop_open) {

            setTimeout(() => {
                resolve(work())
            }, time)

        } else {
            reject( console.log("Our shop is closed."))
        }
    } )
};

order(2000, () => console.log(`${stocks.fruits[0]} was selected.`))

// promise chaining

.then(() => {
    return order(0000, () => console.log("production has started"));
})

.then(() => {
    return order(2000, () => console.log("the fruit was chopped"));
})

.then(() => {
    return order(1000, () => console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was selected`));
})

.then(() => {
    return order(1000, () => console.log(`started the machine`));
})


.then(() => {
    return order(2000, () => console.log(`ice cream placed on ${stocks.holder[0]}`));
})

.then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was selected`));
})

.then(() => {
    return order(2000, () => console.log(`ice cream was served`));
})

.catch(() => {
    console.log("Customer left.")
})

.finally(() => {
    console.log("the day ended, now the shop is closed")
})