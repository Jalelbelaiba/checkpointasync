const asyncFunction1 = () => {
    return new Promise((delay) => 
        setTimeout(() => {
            console.log("Function 1 completed");
            delay();
        }, 2000)
    );
};

const asyncFunction2 = () => {
    return new Promise((delay) => 
        setTimeout(() => {
            console.log("Function 2 completed");
            delay();
        }, 2000)
    );
};

const asyncFunction3 = () => {
    return new Promise((delay) => 
        setTimeout(() => {
            console.log("Function 3 completed");
            delay();
        }, 2000)
    );
};

const chainedAsyncFunctions = async () => {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
};

chainedAsyncFunctions();
