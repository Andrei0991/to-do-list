let addItems = document.getElementById('btn');
let newList = document.getElementById('myItems');
let inputField = document.getElementById('myInput');

addItems.addEventListener('click', function(){
    var newElement = document.createElement('p');
    newElement.innerText = inputField.value;
    newList.appendChild(newElement);
    inputField.value = "";
    newElement.addEventListener('click', function(){
        newElement.style.textDecoration = 'line-through';
    })
    newElement.addEventListener('dblclick', function(){
        newList.removeChild(newElement);
    })
})



