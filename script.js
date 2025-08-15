// Typed text
const typingText = document.querySelector('.typing-text');
const words = ["Automation Tester","Selenium Expert","API Tester","CI/CD Enthusiast"];
let wIndex = 0;
let lIndex = 0;
let isDeleting=false;
function type(){
  const word = words[wIndex];
  typingText.textContent = isDeleting ? word.substring(0,lIndex--) : word.substring(0,lIndex++);
  if(!isDeleting && lIndex > word.length){
    isDeleting = true;
    setTimeout(type,1000);
    return;
  }
  if(isDeleting && lIndex===0){
    isDeleting = false;
    wIndex = (wIndex+1)%words.length;
  }
  setTimeout(type,isDeleting?60:100);
}
type();

// Tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    contents.forEach(sec=>{
      if(sec.id === tab.dataset.target){
        sec.classList.add('active');
      }else{
        sec.classList.remove('active');
      }
    });
  });
});
