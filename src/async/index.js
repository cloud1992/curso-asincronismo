const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};

const anotherFn = async () => {
    const  somthing = await fnAsync();
    console.log(somthing);
    console.log("hELLO!!!!");
};

console.log('Before');
anotherFn();
console.log('After');