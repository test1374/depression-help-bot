var messages = ["𝗕𝗢𝗧 - Hello!"];
var input = "";
keyPressed = function() {
    if(keyCode === BACKSPACE || keyCode === DELETE) {
        input = input.slice(0,-1);
    } else if(keyCode < 16 && keyCode !== ENTER || keyCode > 18 && keyCode !== ENTER && keyCode < 33 && keyCode !== ENTER || keyCode > 47 && keyCode !== ENTER) { 
    input = input + key.toString();
    }
    if(keyCode === ENTER && input !== "") {
        messages.push("𝗬𝗢𝗨 - " + input);
        input = "";
    }
};
var talk = function(question1, question2, responce) {
    if(messages[messages.length - 1].toLowerCase() === "𝗬𝗢𝗨 - " + question1.toLowerCase() || messages[messages.length - 1].toLowerCase() === "𝗬𝗢𝗨 - " + question2.toLowerCase()) {
        messages.push("𝗕𝗢𝗧 - " + responce);
    }
};
function setup() {
  createCanvas(700, 400);
}
draw = function() {
    talk("i want to kill myself", "i want to die", "If you experience suicidal thoughts, please call this number for help \n833-456-4566");
    talk("im sad", "", "Don't be. Listen to happy music.");
    talk("hi", "", "whats your name?");
    talk("hello", "", "whats your name?");
    talk("i feel sad", "im sad", "If you feel sad, try listening to happy music");
    talk("i hate myself", "i dont like who i am","You are beautiful and unique. You can be whoever you want to be.");
    talk("i feel depressed", "im depressed","If you feel depressed, the worst thing you can do is to not let anybody know about it. Tell someone or try to get a therapist.");
    talk("i want to hurt myself", "should i hurt myself?","If you feel like harming yourself, don't. It's bad and can turn into a habit. Instead of hurting yourself, try listening to music or cooking.");
    talk("i want to cut myself", "should i cut myself?","If you feel like cutting yourself, instead draw butterflies on your arm. If they fade, draw them again. If you cut yourself\nyou kill the butterflies.");
    talk("i feel better", "i feel good","I'm happy that you feel that way. If you get sad or depressedagain, remember what I've said.");
    talk("nobody loves me", "everyone hates me","You are beatiful and you are loved.");
    talk("im lonely", "im alone","You are never truly alone. There is always someone there for you.");
    talk("im worthless", "You are priceless.");
    talk("nice", "Thanks! :D");
    talk("thx", "No problem :)");
    talk("thanks", "No problem :)");
    background(51, 51, 51);
    textAlign(LEFT, CENTER);
    for(var i = messages.length; i > 0; i--) {
        fill(255, 255, 255);
        text(messages[i - 1], 5, 320 - (i - messages.length) * -40, 690, 50);
    }
    if(input === "Tab" || input === "CapsLock" || input === "Meta") {
      input = "";
    }
    if(messages.length > 13) {
        messages.splice(0, 1);
    }
    if(mouseX >= 5 && mouseX <= 695 && mouseY >= 370 && mouseY <= 395 && mouseIsPressed) {
        prompt();
    }
    fill(112, 112, 112);
    rect(5, 370, 690, 25, 3);
    fill(255, 255, 255);
    text(input + "_", 10, 372, 680, 20);
};

