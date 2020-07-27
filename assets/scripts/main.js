function greeting() {
  var day = new Date();
  var hour = day.getHours();
  let greetingText = ""
  switch(hour) {
      case 0: 
          greetingText = "The waves come after midnight." 
          break;
      case 1: 
          greetingText = "Let's fall asleep to a revolution, then wake up next to a sad excuse."
          break;
      case 2: 
          greetingText = "I got all I need, in a world of doubt. We got our champagne dreams, in an endless drought."
          break;
      case 3: 
          greetingText = "The lies I weave are all so intricate."
          break;
      case 4: 
          greetingText = "We could follow the sparks, I'll drive."
          break;
      case 5: 
          greetingText = "Don't you know there's a part of me that longs to go."
          break;
      case 6: 
          greetingText = "In my darkest hours I stumbled on a secret power."
          break;
      case 7: 
          greetingText = "Turn around and you’ll see what I see."
          break;
      case 8: 
          greetingText = "To be honest, what I liked, were the things I didn’t know."
          break;
      case 9: 
          greetingText = "Would you believe me now, if I say I got caught up in a wave, almost gave it away."
          break;
      case 10: 
          greetingText = "But I'm still not sure if fear's a rival or close relative to truth."
          break;
      case 11: 
          greetingText = "Hang your head low in the glow of the vending machine I'm not dying."
          break;
      case 12: 
          greetingText = "There's no going back against this California feeling."
          break;
      case 13: 
          greetingText = "I guess you win some and lose some, 'long as the outcome's income. I want it all, and then some."
          break;
      case 14: 
          greetingText = "It’s a train wreck, but I won’t crash it."
          break;
      case 15: 
          greetingText = "But here we are, after all the messes and confessions, to the stars."
          break;
      case 16: 
          greetingText = "I hope this summer breeze would last more than a season."
          break;
      case 17: 
          greetingText = "Look at the world, so close, and I'm halfway to it."
          break;
      case 18: 
          greetingText = "In the meantime we let it go, at the roadside we used to know."
          break;
      case 19: 
          greetingText = "You are what you love, not who loves you."
          break;
      case 20: 
          greetingText = "Why settle for less when there's more?"
          break;
      case 21: 
          greetingText = "'Cause you know the good die young, but so did this, and so it must be better than I think it is."
          break;
      case 22: 
          greetingText = "Try to shine. Stay wild."
          break;
      case 23: 
          greetingText = "When it rains it pours, so stay thirsty like before."
          break;
      default: 
          greetingText = "We could follow the sparks, I'll drive."
  }
}

function closeAbout() {
  const aboutBlock = document.querySelector("#aboutblock")
  aboutBlock.classList.remove('about-show')
}

function showAbout() {
  const aboutBlock = document.querySelector("#aboutblock")
  if (aboutBlock.classList.contains('about-show')) {
    aboutBlock.classList.remove('about-show')
  } else {
    aboutBlock.classList.add('about-show')
  }
}