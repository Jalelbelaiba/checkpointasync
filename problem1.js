const timer = (ms) => {
    return new Promise((delay) => setTimeout(delay, ms)); // Fixed spelling "retun" to "return"
};

const iterateWithAsyncAwait = async (arr) => {
    for (const value of arr) {
        console.log(value); // Log the value
        await timer(2000);  // Wait for 2 seconds (Fixed incorrect function call)
    }
};

// Fixed input array and added array brackets
iterateWithAsyncAwait(["Jalel", "Wissem", "Oussayma", "Amine"]);
