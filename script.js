// Typing text rotation
const typingText = document.querySelector('.typing-text');
const words = ["Automation Tester","Selenium Expert","API Tester","CI/CD Enthusiast"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting=false;

function type(){
  const currentWord = words[wordIndex];
  typingText.textContent = isDeleting ? currentWord.substring(0,letterIndex--) : currentWord.substring(0,letterIndex++);
  if(!isDeleting && letterIndex > currentWord.length){
    isDeleting = true;
    setTimeout(type,1000);
    return;
  }
  if(isDeleting && letterIndex === 0){
    isDeleting = false;
    wordIndex = (wordIndex+1)%words.length;
  }
  setTimeout(type,isDeleting ? 50 : 100);
}
type();

// Tabs logic + fade transition
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    contents.forEach(c=>{
      if(c.id === tab.dataset.target){
        c.classList.add('active');
      }else{
        c.classList.remove('active');
      }
    });
  });
});
