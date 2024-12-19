

// функція для числа фібоначі
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    e = fibonacci(n - 1) + fibonacci(n - 2)
    return e;
}

//console.log(fibonacci(123));

// функція filter
function filter(arr, handler) {
    const result = [];
    arr.forEach(element => {
        if (handler(element)) {
            result.push(element);
        }
    });
    return result;
}

const datalist = [1, 2, 3, 4, 5];
const handler1 = num=>num % 2 ;

//console.log(filter(datalist, handler1)); 

// функція для піднесення до степення
function pow(a1, a2) {
    let result = 1;
    for (let i = 0; i < a2; i++) {
        result *= a1;
    }
    return result;
}

//console.log(pow(2, 3)); 


// функція powList
function powList(arr, a2) {
    return arr.map(num => pow(num, a2));
}

//console.log(powList([1, 2, 3], 2)); 


// функція powAndFilter
function powAndFilter(arr, a2, min) {
    const list = powList(arr, a2);
    return filter(list, num => num >= min);
}

//console.log(powAndFilter([1, 2, 3, 4], 2, 10)); 



// функція sum
function sum(handler) {
    return function calc() {
        const numbers = handler();
        return numbers.reduce((acc, num) => acc + num, 0);
    };
}


const handler = () => [1, 2, 3, 4, 5];
let Sum = sum(handler);
console.log(Sum());