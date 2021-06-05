//start button
function start() { //creates new function "start" 
    console.log("start button pressed"); //logs "start button pressed" to console.
    document.getElementById("startButton").disabled = true; //disable start button
    document.getElementById("stopButton").disabled = false; //enable stop button
}
//stop button
function stop() { //creates new function "stop"
    console.log("stop button pressed"); //logs "stop button pressed" to console.
    document.getElementById("stopButton").disabled = true; //disable stop button
    document.getElementById("startButton").disabled = false; //enable start button
}
// We have sound!!
function playStation() { //creates new function "playStaton"
    console.log("playStation() started"); //logs "playStation() started" to console.
    mySound = new sound("Elton John - Rocket Man.mp3"); //adds a reference link to our mp3 file 
    mySound.play(); //creates function to play the referenced sound
}
function playBowie() { //creates new function "playBowie"
    console.log("playBowie() started"); //logs "playBowie() started" to console.
    mySound = new sound("David Bowie - Space Oddity.mp3"); //adds a reference link to our mp3 file 
    mySound.play(); //creates function to play the referenced sound
}

function sound(src) { //creates a function for our sound.
    this.sound = document.createElement("audio"); //creates an audio element.
    this.sound.src = src; //tells us that the source is equal to source defined in (src)
    this.sound.setAttribute("preload", "audio"); //load the audio file in the background when page is opened.
    this.sound.setAttribute("controls", "none"); //tells our html not to display controls for the audio file.
    this.sound.style.display = "none";  //tells our html not to visually display the sound file.
    document.body.appendChild(this.sound); //tells the sound file to attach to the node above.

    this.play = function () { //play function
        this.sound.play();
    }
    this.stop = function () { //stop/pause function
        this.sound.pause();
    }
}


//Better countdown timer with loops.
function btrCountdownTimer() { //creates new function "btrCountdownTimer"
    var count = 10; //defines the "count" function starting point

    for (var i = 0; i < 10; i++) { //begin "for" loop with variables (i=0) and when "i" is less than 10, add "1" to the count.
        setTimeout(function () { //creates a timeout function
            document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
            count = count - 1; // decrease count by 1
        }, 1000 * i); //set timeout to 1 second multiplied by the current value of "i"
    }
    setTimeout(function () { //creates a timeout function
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!"; //prints "Blastoff!!!" to "countdownTimer" in the .html document
    }, 10000); //wait 10 seconds before displaying "Blastoff!!!"
}


//Fleet Admiral Request - - Display "time left" warning when less than 1/2 of countdown time remains. Warning starts at 5 sec remaining.

function evenBtrCountdownTimer() { //creates new function "evenBtrCountdownTimer"
    var count = 10; //defines the "count" function starting point

    for (var i = 0; i < 11; i++) { //begin "for" loop with variables (i=0) and when "i" is less than 10, add "1" to the count.
        if (i == 10) { //if "i"=10, display "Blastoff!!"\
            setTimeout(function () { //creates a timeout function
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!"; //prints "Blastoff!!!" to "countdownTimer" in the .html document
            }, i * 1000); //wait 1 second before displaying "Blastoff!!!"

        } else if (i > 4) { //if "i" is greater than 4, display warning message
            setTimeout(function () { //creates a timeout function
                document.getElementById("countdownTimer").innerHTML = "Warning Less than 1/2 way to launch, time left = " + count; //prints "warning + time left" to "countdownTimer" in the .html document
                count--; //decrease count by 1
            }, i * 1000); //wait 1 second

        } else { //show the normal countown when "i" is less than 4
            setTimeout(function () { //creates a timeout function
                document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
                count--; //decrease count by 1
            }, i * 1000); //wait 1 second
        }

    }

}

//wk1-2 countdown timer, will run 10...1 then "Blastoff!!!
function startCountdown() //calls the function "startCountdown" on button press.
{
    var count = 10;  //defines the "count" function starting point

    //countdown should display 10
    document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
    count = count - 1;  // decrease count by 1

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display 9
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
    }, 1000); //wait 1 second

    setTimeout(function () //creates a timeout function
    {
        //countdown should display 8
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count - 1; //decrease count by 1
    }, 2000);  //wait 2 seconds

    setTimeout(function () //creates a timeout function
    {
        //countdown should display 7
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count - 1; //decrease count by 1
    }, 3000); //wait 3 seconds

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display 6
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count - 1; //decrease count by 1
    }, 4000); //wait 4 seconds

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display 5
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count - 1; //decrease count by 1
    }, 5000); //wait 5 seconds

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display 4
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count - 1; //decrease count by 1
    }, 6000); //wait 6 seconds

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display 3
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count - 1; //decrease count by 1
    }, 7000); //wait 7 seconds

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display 2
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count - 1; //decrease count by 1
    }, 8000); //wait 8 seconds

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display 1
        document.getElementById("countdownTimer").innerHTML = count; //prints current count to "countdownTimer" in the .html document
        count = count - 1; //decrease count by 1
    }, 9000); //wait 9 seconds

    setTimeout(function ()  //creates a timeout function
    {
        //countdown should display "Blastoff!!!"
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!"; //prints "Blastoff!!!" to "countdownTimer in the .html document"
        count = count - 1; //decrease count by 1
    }, 10000); //wait 10 seconds
}


// Function to play craps
function playCraps() { //calls the function "playCraps" on button press.

    console.log("playCraps has started"); //writes "playCraps" to the developer console.

    var die1; //defines variable 1 as die1

    die1 = Math.ceil(Math.random() * 6); //defines die1 as any random number below 6.

    document.getElementById("die1Results").innerHTML = "The value of die1 is:" + die1; // replaces "die1results" in the .html with "The value of die1 is: (value)".

    var die2;  //defines variable 2 as die2

    die2 = Math.ceil(Math.random() * 6); //defines die2 as any random number below 6.

    document.getElementById("die2Results").innerHTML = "The value of die2 is:" + die2; // replaces "die2results" in the .html with "The value of die2 is: (value)".

    var dieSum = die1 + die2; //defines variable 3 as the sum of di1 + die2.

    document.getElementById("sumResults").innerHTML = "The sum of die1 plus die2 is:" + dieSum; // replaces "sumResults" in the .html with "The sum of die1 plus die2 is: (value)".

    //If the sum of die1 and die2 is 7 or 11, replace "crapsResutlts" in .html with "Craps! You Lose!!"
    if (dieSum == 7 || dieSum == 11) {
        document.getElementById("crapsResults").innerHTML = "Craps! You lose!!";
    }
    //If die1 = die2 (doubles) AND they are even numbers, replace "crapsResutlts" in .html with "Hurray! Doubles! You Win!!"
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "Hurray! Doubles! You Win!!";
        //  document.getElementById("crapsResults").innerHTML = style.color = "green"; //an attempt to change "crapsResults" to green upon win. (did not work)
    }

    //if the sum of die1 and die2 is not 7 or 11, or even doubles, replace "crapsResults" in .html with "Please try again."
    else {
        document.getElementById("crapsResults").innerHTML = "Please try again.";
    }

}
