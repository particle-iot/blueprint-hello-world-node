const printHelloWorld = async () => {
    console.log("Hello, World! Event sent.");
};

// Send hello workd every 10 seconds
setInterval(printHelloWorld, 10000);