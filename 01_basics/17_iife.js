// Immediately Invoked Function Expression (IIFE)   ()()

(function chai() {
    //Named IIFE
    console.log(`DB CONNECTED`);
})();
// chai()
((name) => {
    console.log(`${name},DB CONNECTED TWO`);
})("Gagan");
