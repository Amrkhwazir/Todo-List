import {app, addDoc, collection, db, getDocs, doc, deleteDoc } from "./firebaseConfig.js    " 



let inputBar = document.querySelector('.inputBar');
let btn = document.querySelector('.btn');
let ul = document.querySelector('ul');
let listDiv = document.querySelector('.list');
let updatebutton = document.querySelector('.updatebutton');
let editBtn = document.querySelector('.editBtn');

// let dataId;

// getTodoListDataHandler()

btn.addEventListener('click', async () => {

    if(inputBar.value.trim() === ""){
    
        inputBar.value = ""
        return
    }


    // console.log(inputBar.value + "==> input value")
    // console.log(ul)
    
    

try {
    const docRef = await addDoc(collection(db, "data"), {
      inputData: inputBar.value,
  
    });
            inputBar.value = ""
            
            console.log("Document written with ID: ", docRef.id);
            getTodoListDataHandler()
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})

  async function getTodoListDataHandler(){
    
    const querySnapshot = await getDocs(collection(db, "data"));

    querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());
    const {inputData} = doc.data()
   const dataId = doc.id
    // console.log(dataId)

  const li = document.createElement('li');
  // console.log(li)
  
  li.innerHTML = `  <p>${inputData}</p>
  <button class="editBtn"> edit </button>
  <button class="deleteBtn" onclick="deleteItemHandler('${dataId}')"> delete </button>`

  ul.appendChild(li);

});

 }
  

 
  // Delete section //
  

  async function  deleteItemHandler(dataId){
    console.log("working")
    console.log(dataId)
  
    await deleteDoc(doc(db, "data", dataId));
    console.log("post delete")
    getTodoListDataHandler()
    window.location.reload()
  
  }
  
window.deleteItemHandler = deleteItemHandler
//        // delete all button shows
// //   deltItemBox.style.visibility = "visible"


    



//     // edit button create //


//     let editBtn = document.createElement('button');
// editBtn.className = "editBtn";

// li.appendChild(editBtn);

// let editText = document.createTextNode('Edit');
// editBtn.appendChild(editText);



// // Edit Section //

// editBtn.addEventListener('click', () => {

//     inputBar.value = p.innerText;
//     p.style.textDecoration = "line-through";
//     // inputBar.value = '';
//     editButton.classList.add('show')
    


// deltItemBtn.addEventListener('click', EveryThingRemove )
// function EveryThingRemove(){
//     ul.removeChild(li);

// }
// })

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



