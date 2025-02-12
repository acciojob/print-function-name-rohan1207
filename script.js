function nameOfFunction() {
    
    alert(arguments.callee.name);
}


nameOfFunction();