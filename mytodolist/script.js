let addToDoButton=document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer');
let inputText=document.getElementById('İnputText');
addToDoButton.addEventListener('click ',function(){
let paragraph=document.createElement('p');
let clearToDo=document.getElementById('clearTodo');
paragraph.classList.add('paragraph-styling');
toDoContainer.appendChild(paragraph);
paragraph.innerHTML=inputText.value;
inputText.value="";
paragraph.addEventListener('click',function(){

paragraph.style.textDecoration='line-through';
paragraph.addEventListener('dbclick',function(){

toDoContainer.removeChild('paragraph');


});

});

clearToDo.addEventListener('click',function(){

paragraph.remove();

})

})


