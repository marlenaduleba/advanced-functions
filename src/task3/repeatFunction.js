function repeatFunction(func, num) {
    return function() {
        if (num < 0) {
            while (true) func();
        } else {
            for (let i = 0; i < num; i++) func();
        }
    };
}
