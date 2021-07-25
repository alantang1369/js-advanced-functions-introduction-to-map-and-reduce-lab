// Your code here
let mapToNegativize = (array)=> {
    return array.map( element => element * -1)
}
let mapToNoChange = (array) => {
    return array.map( e => e)
}
function mapToDouble(array){
    return array.map(e => e * 2);
}
function mapToSquare(array){
    return array.map(e => e ** 2)
}
function reduceToTotal(array, startingPoint = 0){
    return array.reduce(function(total, element){
        return total + element;
    }, startingPoint)
}

function reduceToAllTrue(array){
    let val = true, i = 0;

    while( val && i < array.length){
        val = !!array[i];
        i++;
    }
    return val;
}

function reduceToAnyTrue(array){
    let val, i = 0;
    if (array.length != 0){ val = false } 
    else { return "please enter a valid array!"}  
    while( !val && i < array.length){
        val = !!array[i];
        i++;
    }
    return val;
}