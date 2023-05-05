let inputBar = document.querySelector('.inputBar')
// console.log(inputBar)
let btn = document.querySelector('.btn')
// console.log(btn)
let ul = document.querySelector('ul')
// console.log(ul)

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
   let removePara = p.remove(p.innerText);
    p.replaceChild(inputBar.value,removePara )

})

})
