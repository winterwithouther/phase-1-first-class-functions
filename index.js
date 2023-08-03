function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    let namedFunction = function () {
        console.log("This is a named function");
    }

    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("This is an anonymous function")
    }
}