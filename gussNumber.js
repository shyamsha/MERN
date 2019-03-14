var guess = 65;

if (guess > 100) {
    alert("out of the number");

} else {
    for (var i = 0; i < 10; i++) {
        var targetNum = Math.round(Math.random() * 100);


        if (guess < targetNum) {
            console.log("targetnumber is high " + targetNum)
        } else if (guess > targetNum) {
            console.log("targetnumber is low " + targetNum);
        } else if (guess == targetNum) {
            console.log("yes you did it " + i + "th time")
            break;
        }
    }

}

if (guess != targetNum) {
    console.log("sorry,try again");
    for (i = 0; i < 100; i++) {
        var targetNum = Math.round(Math.random() * 100);
        if (guess == targetNum) {
            console.log("yes you did it " + i + "th time")
            break;
        }
    }
}
