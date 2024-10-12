var sounds = {
    wrong: new Audio("./sounds/wrong.mp3"),
    correct: new Audio("./sounds/correct.mp3")
};

document.querySelector(".mid-button").onclick = function(){
    this.innerHTML = "Medium";
    startGame();
};

function startGame(){
    resetWordAndCount();
    chooseDifficulty();
}

function chooseDifficulty(){
    resetImage();
    document.querySelector(".left-button").classList.remove("invisible");
    document.querySelector(".right-button").classList.remove("invisible");
    document.querySelector(".title-section > h3").innerHTML = "Choose the difficulty!";

    document.querySelector(".mid-button").innerHTML = "Medium";

    nullHandler();

    document.querySelector(".left-button").onclick = function(){
        document.querySelector(".mid-button").classList.add("disabled");
        document.querySelector(".right-button").classList.add("disabled");
        disableButtons();
        generateWord("easy");
    };

    document.querySelector(".mid-button").onclick = function(){
        document.querySelector(".left-button").classList.add("disabled");
        document.querySelector(".right-button").classList.add("disabled");
        disableButtons();
        generateWord("medium");
    };

    document.querySelector(".right-button").onclick = function(){
        document.querySelector(".left-button").classList.add("disabled");
        document.querySelector(".mid-button").classList.add("disabled");
        disableButtons();
        generateWord("hard");
    };
}

function playAudio(audio){
    sounds[audio].play();
}

function nullHandler(){
    document.querySelector(".left-button").onclick = null;
    document.querySelector(".mid-button").onclick = null;
    document.querySelector(".right-button").onclick = null;
}

function disableButtons(){
    var btns = document.querySelectorAll("button");
    for(var i = 0; i < btns.length; i++)
        btns[i].disabled = true;
}

function enableButtons(){
    var btns = document.querySelectorAll("button");
    for(var i = 0; i < btns.length; i++)
        btns[i].disabled = false;
}

function resetButtons(){
    var left = document.querySelector(".left-button");
    var mid = document.querySelector(".mid-button");
    var right = document.querySelector(".right-button");

    left.classList.remove("disabled");
    right.classList.remove("disabled");
    left.classList.add("invisible");
    right.classList.add("invisible");

    mid.classList.remove("disabled");

    mid.innerHTML = "Restart";
}

function resetWordAndCount(){
    document.querySelector(".word").innerHTML = "___________";
    document.querySelector(".guesses-left").innerHTML = "Guesses left: 10";
}

function restartGame(){
    resetButtons();
    enableButtons();
    document.querySelector(".mid-button").onclick = startGame; 
}


function generateWord(word){
    var index = Math.floor(Math.random()*99);
    var wordToGuess = "";
    if(word === "easy")
    {
        easy = [
            "air", "bat", "cat", "dog", "ear", "fox", "gum", "hat", "ice", "jar", "kit", "log", "map", "net", "owl", "pen", "rat", "sun", "tag", "urn", "vet", "wax", "yam", "zip", "bug", "cow", "dip", "egg", "fig", "gig", "hop", "ink", "joy",
            "ball", "cake", "dock", "echo", "fish", "golf", "harm", "iron", "jump", "kite", "lamp", "milk", "navy", "oval", "pond", "quid", "roof", "sink", "tall", "unit", "vase", "wall", "wolf", "exit", "yard", "zinc", "arch", "bolt", "club",
            "dirt", "envy", "frog", "glow", "apple", "beach", "crisp", "drift", "eagle", "flame", "grape", "house", "ivory", "jolly", "kneel", "light", "mango", "night", "ocean", "pilot", "quilt", "robin", "sugar", "tiger", "ultra", "vivid",
            "wheat", "xenon", "yacht", "zebra", "alert", "bloom", "chess", "deity", "ethic", "fuzzy", "ghost"
        ];
        wordToGuess = easy[index];
    }
    else if(word === "medium")
    {
        medium = [
            "artist", "bubble", "candle", "donate", "effort", "frozen", "guitar", "harbor", "injury", "jungle", "kitten", "lumber", "mirror", "nature", "object", "puzzle", "quartz", "ribbon", "sunset", "temple", "update", "violet", "wallet",
            "xylene", "yellow", "zephyr", "admire", "branch", "circle", "detach", "embark", "flight", "gadget", "account", "balloon", "captain", "diamond", "eclipse", "furnace", "gallery", "hostile", "insight", "jubilee", "kitchen", "lantern",
            "mystery", "nectar", "organic", "package", "quarrel", "renewal", "stapler", "theater", "upgrade", "venture", "wetsuit", "xerarch", "yardage", "zealous", "alchemy", "blanket", "circuit", "dolphin", "evening", "freedom", "glacier",
            "activity", "bluebird", "catalyst", "detailed", "elephant", "festival", "gradient", "hardware", "immunity", "jubilant", "kerosene", "laminate", "monopoly", "novelist", "overcome", "plethora", "question", "routines", "sapphire",
            "tangible", "universe", "vacation", "wonderful", "xenolith", "yearbook", "zeppelin", "adequate", "backdrop", "chlorine", "doctrine", "envelope", "fidelity", "garrison"
        ];
        wordToGuess = medium[index];
    }
    else{
        hard = [
            "allegiant", "butterfly", "chocolate", "dandelion", "entourage", "furniture", "gladiator", "hamburger", "influence", "jellyfish", "knowledge", "lighthouse", "magnesium", "nightmare", "overpower", "prototype", "quicksand", "resonance",
            "skeleton", "telephone", "umbrella", "vocabulary", "waterfall", "xylophone", "yesterday", "zealously", "aerospace", "biography", "champagne", "democracy", "evolution", "framework", "guideline", "ambassador", "basketball", "compromise",
            "depression", "escalation", "fluctuate", "governance", "harmonious", "innovative", "juxtapose", "kaleidoscope", "luminosity", "motivation", "negotiable", "operations", "peripheral", "quarantine", "reinforced", "saturation", "thermostat",
            "university", "volatility", "widespread", "xylography", "youthfully", "zoological", "astronomer", "broadening", "conclusive", "disposable", "enthusiast", "flashlight", "germinated", "appreciation", "biodiversity", "consequential", "distillation",
            "entertainment", "flamboyance", "grandiosity", "horticulture", "imagination", "justifiable", "kindergarten", "legislation", "manipulation", "neutralizer", "observatory", "participation", "qualification", "restoration", "sustainability", "therapeutic",
            "utilization", "verification", "waterproofing", "xerophytically", "yachtsmanship", "zooplankton", "accelerator", "belligerence", "circumstance", "deliberation", "encapsulation", "foundational", "globalization"
        ];
        wordToGuess = hard[index];
    }
    guessWord(wordToGuess);
}

function wrongAnimation(){
    playAudio("wrong");
    // var picUrl = document.querySelector("img").src;
    // // var newUrl = picUrl.substring(0, picUrl.length - 4) + "-red" + picUrl.substring(picUrl.length - 4);
    // var newUrl = picUrl.replace(".png", "-red.png");
    // document.querySelector("img").src = newUrl;
    document.querySelector("body").classList.add("wrong");
    setTimeout(function(){
        document.querySelector("body").classList.remove("wrong");
        // document.querySelector("img").src = picUrl;
    }, 200);
}

function rightAnimation(){
    playAudio("correct");
    // var picUrl = document.querySelector("img").src;
    // // var newUrl = picUrl.substring(0, picUrl.length - 4) + "-green" + picUrl.substring(picUrl.length - 4);
    // var newUrl = picUrl.replace(".png", "-green.png");
    // document.querySelector("img").src = newUrl;

    document.querySelector("body").classList.add("right");
    setTimeout(function(){
        document.querySelector("body").classList.remove("right");
        // document.querySelector("img").src = picUrl;
    }, 200);
}

function resetImage(){
    document.querySelector("img").src = "./pictures/support.png";
}

function updateImage(nr){
    var image = document.querySelector("img");
    switch(nr){
        case 9:
            image.src = "./pictures/support.png";
            break;
        case 8:
            image.src = "./pictures/support.png";
            break;
        case 7:
            image.src = "./pictures/support.png";
            break;
        case 6:
            image.src = "./pictures/head.png";
            break;
        case 5:
            image.src = "./pictures/body.png";
            break;
        case 4:
            image.src = "./pictures/body.png";
            break;
        case 3:
            image.src = "./pictures/leftHand.png";
            break;
        case 2:
            image.src = "./pictures/rightHand.png";
            break;
        case 1:
            image.src = "./pictures/leftLeg.png";
            break;
        case 0:
            image.src = "./pictures/gameOver.png";
            break;
        default:
            console.log("Image issue");
            break;
    }
}

function guessWord(unknownWord){
    document.querySelector(".title-section > h3").innerHTML = "Press any key to reveal a letter!";
    document.querySelector(".word").innerHTML = "_".repeat(unknownWord.length);
    currentWord = "_".repeat(unknownWord.length);

    var guesses = 10;

    function handleEvent(event){

        var key = event.key.toLowerCase();

        if(key.match(/^[a-z]$/)){
            var updated = false;
            
            for(var i = 0; i < unknownWord.length; i++)
            {
                if(unknownWord[i] === key && currentWord[i] === "_")
                    {
                        currentWord = currentWord.substring(0, i) + key + currentWord.substring(i+1);
                        updated = true;
                    }
            }

            document.querySelector(".word").innerHTML = currentWord;

            if(updated){
                rightAnimation();
            }
            else{
                wrongAnimation();
                guesses--;
            }
        }
        else{
            wrongAnimation();
            guesses--;
        }

        updateImage(guesses);
        document.querySelector(".guesses-left").innerHTML = "Guesses left: " + guesses;
        checkGuessCount(guesses);
        checkWin();
    }

    function clearEvent(){
        document.removeEventListener("keypress", handleEvent);
    }

    function checkGuessCount(nr){
        if(nr <= 0)
        {
            document.querySelector(".title-section > h3").innerHTML = "You <span style=\"color: red\">lost</span>, press 'Restart' to play again!";

            clearEvent();
            restartGame();
        }

    }

    function checkWin(){
        if(currentWord.includes("_") === false)
        {
            document.querySelector(".title-section > h3").innerHTML = "You <span style=\"color: #4CA64C\">won</span>, press 'Restart' to play again!";

            clearEvent();
            restartGame();
        }
    }

    document.addEventListener("keypress", handleEvent);
}
