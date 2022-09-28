let stocks = {
    fruits: ["strawberry", "grapes", "bananas", "apples"],
    liquids: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = false;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms)
        } else {
            reject(console.log("shop is closed"))
        }
    })
}

async function kitchen () {
    try {
        await time (2000);
        console.log(`${stocks.fruits[0]} was selected`);
        await time(0000);
        console.log("start the production");
        await time(2000);
        console.log("cut the fruit");
        await time(1000)
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`);
        await time(1000)
        console.log(`start the machine`);
        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[0]}`);
        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`);
        await time(2000)
        console.log(`serve ice cream`);
    } catch(err) {
        console.log('customer left', err)
    } finally {
        console.log("day ended, shop is closed")
    }
}

kitchen();


////////////////////// await: kitchen and chef example
/* let toppings_choice = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(
                console.log("which topping would you love?")
            )
        }, 3000)
    });
};

async function kitchen () {
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");

    await toppings_choice();
    console.log(" D ");
    console.log(" E ");
}

kitchen();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking other orders");

////////////////////// promise and asyncAwait structers differences:
 let order = () => {
    return new Promise((resolve, reject)=>{
        if (true) {
            resolve();
        } else {
            reject();
        }
    })
}

order()
.then()
.then()
.then()
.catch()
.finally()

async function order () {
//try, get and finally
    try {
        await abc
    } catch(err) {
        console.log("abc doesn't exists", err)
    } finally {
        console.log("runs code anyways")
    }
}

order()
.then(() => {
    console.log("adidjiaijdaijjdia");
})
*/






