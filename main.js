// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

function likeAndUnlike(){
  const unlikedButtons = document.querySelectorAll(".like-glyph")
  for (const unlikedButton of unlikedButtons){
    unlikedButton.addEventListener("click", e => {
      const heart = e.target
      const errorAlert = document.getElementById("modal")
      if(heart.className === "like-glyph"){
        mimicServerCall()
        .then(()=> {
          heart.textContent = "♥"
          heart.className = "activated-heart"
        })
        .catch(()=> {
          errorAlert.className = ""
          setTimeout(()=>{errorAlert.className = "hidden"}, 3000)
        })
      } else{
        heart.textContent = "♡"
        heart.className = "like-glyph"
      }  
    })
  }
}



likeAndUnlike()



