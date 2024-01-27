//button and span code for read more

const storyWrap = document.getElementById('spanwrapper');

storyWrap.addEventListener('click', e=> {

    //checks if what is clicked is a button with the class 'btn'
    if (e.target.className === 'btn') {
  
      //the previous element of the first article's button is text, idk. This works because the paragraph is the second child after h3
      const thePara = e.target.parentElement.children[1];
      const theSpan = thePara.getElementsByTagName('span');
  
      //This toggles the hidden class for both of the spans. I would have done a forEach but for some reason it didn't work
      theSpan[0].classList.toggle('hidden');
      theSpan[1].classList.toggle('hidden');
    
      //toggle read more/read less text
      if (e.target.innerHTML === 'Read More') {
        e.target.innerHTML = 'Read Less';
      }  else {
        e.target.innerHTML = 'Read More';
      }
    }
  })