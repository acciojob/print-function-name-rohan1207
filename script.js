window.nameOfFunction = function () {
    alert(arguments.callee.name);
};

window.nameOfFunction();

