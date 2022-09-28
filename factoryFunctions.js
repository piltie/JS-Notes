/* Factory Function produces objects
*/

function createCircle(radius) {
    return {
        radius, //if you key and value are the same (radius: radius), we can remove the latter and simply add the key
        get draw() { 
            console.log('draw', radius) 
        } // this instead of "draw: function() { console.log('draw) }"
    }   
}

const circle1 = createCircle(1);
circle1.draw;

const circle2 = createCircle(2);
circle2.draw;
