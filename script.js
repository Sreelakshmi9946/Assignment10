//1) Change the text of the heading (h1) element to "Text Changed!". 
const heading = document.querySelector('h1')
console.log(heading.textContent)
heading.textContent = "Text Changed!"

//2) Change the text color of all paragraphs with the class text to blue.
const paragraphs = document.querySelectorAll('.text')
console.log(paragraphs)
paragraphs.forEach(paragraph => {
    paragraph.style.color = 'blue';
});
/*const paragraphs = document.getElementsByClassName('text')
paragraphs[0].style.color = 'blue'
paragraphs[1].style.color = 'blue'*/

//3) Log the text content of each li element to the console. 
const listItems = document.querySelectorAll('.list-item')
listItems.forEach(listItem =>{
    console.log(listItem.textContent)
})
/*const listItems = document.getElementsByClassName('list-item')
console.log(listItems[0].textContent)
console.log(listItems[1].textContent)
console.log(listItems[2].textContent)*/

//4) Change the background color of the first li element to yellow. 
listItems[0].style.backgroundColor = 'yellow'

//5) Change the text color of all li elements to green.
listItems.forEach(listItem =>{
    listItem.style.color = 'green'
})


