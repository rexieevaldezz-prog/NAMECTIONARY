function showLetter(letter){

const sections=document.querySelectorAll('.letter-section');

if(letter==='ALL'){
sections.forEach(section=>{
section.style.display='block';
});
}
else{
sections.forEach(section=>{
if(section.id===letter){
section.style.display='block';
}
else{
section.style.display='none';
}
});
}
}

function searchTerms(){

const input=document.getElementById('searchInput').value.toLowerCase();
const cards=document.querySelectorAll('.card');

cards.forEach(card=>{
const text=card.innerText.toLowerCase();

if(text.includes(input)){
card.style.display='block';
}
else{
card.style.display='none';
}
});
}