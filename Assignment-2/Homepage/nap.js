function disarrangeWords() {
    // Get the h3 element
    const h3Element = document.querySelector('.dance');
  
    // Check if the text is already changed
    if (h3Element.innerText !== "Unlocking(🔓) Solutions: Your Problems, Our Expertise – Where JAVAHOLIC Prevails!") {
      // Change the text
      h3Element.innerText = "Unlocking(🔓) Solutions: Your Problems, Our Expertise – Where JAVAHOLIC Prevails!";
      
      // Change the background color to red
      h3Element.style.backgroundColor = "navy";
      h3Element.style.color = "white"
    }
  }
  

//
  function toggleTextArea() {
    document.getElementById("notepadhai").style.display="block"
    document.getElementById("btn").style.display="block"
}

function inactive(params) {
    document.getElementById("notepadhai").style.display="none"
}

function btninactive(params) {
  document.getElementById("btn").style.display="none";
}


btninactive(); 
inactive(); 

function MoreLess(){
  var dots = document.getElementById('dots');
  var invisible = document.getElementById('invisible-text');
  var btnText= document.getElementById('btn'); 

  if(dots.style.display!='none'){
    dots.style.display='none'; 
    invisible.style.display='inline'; 
    btnText.innerHTML= 'Read Less';
    btnText.style.background='#3498db'
  }

  else{
    btnText.style.background='rgba(1, 255, 103, 0.7)'
    btnText.style.backdropFilter='blur(10px)'
    dots.style.display="inline";
    invisible.style.display="none";
    btnText.innerHTML="Read More"; 

  }
}

///
