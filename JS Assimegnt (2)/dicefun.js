function dicefun() {
    // var randomnumber = prompt(" enter any number form 1 to 10");
    var improvedNum = Math.random() * 10 + 1;
    var newNum = Math.floor(improvedNum);
    document.write(`Random dice value: ${newNum}`);
}
