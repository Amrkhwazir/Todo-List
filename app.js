let inputBar = document.querySelector('.inputBar');
// console.log(inputBar)
let btn = document.querySelector('.btn');
// console.log(btn)
let ul = document.querySelector('ul');
// console.log(ul)
let listDiv = document.querySelector('.list');
// console.log(listDiv)


btn.addEventListener('click', () => {

    if(inputBar.value.trim() === ""){
    
        inputBar.value = ""
        return
    }

    // console.log(inputBar.value + "==> input value")
    // console.log(ul)
    
    const li = document.createElement('li');
    ul.appendChild(li);
    // console.log(li)

 const p = document.createElement("p");
 li.appendChild(p);
//  console.log(p)
    p.innerText = inputBar.value
    
        inputBar.value = ""
        
       // delete all button shows
  deltItemBox.style.visibility = "visible"

        // Delete button create //

    let deleteBtn = document.createElement('button');
    //  console.log(deleteBtn)
     deleteBtn.className = "deleteBtn";
    li.appendChild(deleteBtn);

    let deleteText = document.createTextNode("Delete");
    // console.log(deleteText)
    deleteBtn.appendChild(deleteText);


    // edit button create //


    let editBtn = document.createElement('button');
editBtn.className = "editBtn";
// console.log(editBtn)
li.appendChild(editBtn);

let editText = document.createTextNode('Edit');
editBtn.appendChild(editText);


    // Delete section //
deleteBtn.addEventListener('click', () => {
    ul.removeChild(li);
})


// Edit Section //

editBtn.addEventListener('click', () => {

    inputBar.value = p.innerText;
    p.style.textDecoration = "line-through";
    btn.style.visibility = "hidden";
    let editButton = document.querySelector('.editbutton');
    editButton.style.visibility = "visible";
    editButton.addEventListener('click', ()=>{
        p.innerHTML = inputBar.value
        p.style.textDecoration = "none";
        inputBar.value = '';
    })
   
    
})




deltItemBtn.addEventListener('click', EveryThingRemove )
function EveryThingRemove(){
    ul.removeChild(li);

}})

// All Item Delete //

let deltItemBox = document.createElement('div');
deltItemBox.style.visibility = "hidden"
deltItemBox.className = "allItemDelt";
listDiv.appendChild(deltItemBox);

let deltItemBtn = document.createElement('button');
deltItemBtn.className = "deltItemBtn";
deltItemBox.appendChild(deltItemBtn);
let deltItemBtnText = document.createTextNode('Delete All Item');
deltItemBtn.appendChild(deltItemBtnText);
// console.log(deltItemBox)



