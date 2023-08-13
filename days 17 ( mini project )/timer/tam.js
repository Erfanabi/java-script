
function run() {
    let counter = 0;
    let second = 0;

    function runAgain() {
        second += Number(prompt("Enter timer second!!"));
        // second = second+second;
        function timer() {
            console.clear()
            counter++;
            if (counter >= second) {
                console.log(counter);
                clearInterval(mySetInterval);

                let alert = prompt("press 1 to countinue and 2 to reset timer 3 to finish!");
                if (alert == 1) {
                    runAgain();
                }
                else if (alert == 2) {
                    run();
                }
                else {
                    console.log("Finish!!");
                }

            } else {
                console.log(counter);
            }
        }

        let mySetInterval = setInterval(timer, 1000);
    }

    runAgain()

}



run();