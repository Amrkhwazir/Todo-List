import {app, addDoc, collection, db, getDocs, doc, deleteDoc, updateDoc } from "./firebaseConfig.js    " 



let inputBar = document.querySelector('.inputBar');
let btn = document.querySelector('.btn');
let ul = document.querySelector('ul');


let dataId;
let globalDataId;

getTodoListDataHandler()


btn.addEventListener('click', postTodoData)

async  function postTodoData(){
  console.log("btn working")

    if(inputBar.value.trim() === ""){
    
      inputBar.value = ""
      return
  }

try {
  const docRef = await addDoc(collection(db, "data"), {
    inputData: inputBar.value,

  });
          inputBar.value = ""
          
          getTodoListDataHandler()
          console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
  }
    


  async function getTodoListDataHandler(){
    ul.innerHTML = "";
    const querySnapshot = await getDocs(collection(db, "data"));

    querySnapshot.forEach((doc) => {
  
      const {inputData} = doc.data()
    dataId = doc.id
    console.log(dataId)
  
    
    const li = document.createElement('li');
    console.log(li)
    
    li.innerHTML = `<p>${inputData}</p>
    <button class="editBtn" onclick="editHandler('${inputData}','${dataId}')"> edit </button>
    <button class="deleteBtn" onclick="deleteItemHandler('${dataId}')"> delete </button>`
    
    ul.appendChild(li);
    
});

 }
  
  // Delete section //
  

  async function  deleteItemHandler(dataId){
    console.log("working")
    console.log(dataId)
  // 
   try {
     await deleteDoc(doc(db, "data", dataId));
     console.log("post delete") 
     getTodoListDataHandler()
    } catch (error) {
     console.log(error, ">> deleteHandler not working")
   }
  }
  
  
  //        // delete all button shows
// //   deltItemBox.style.visibility = "visible"


// // Edit Section //

async function updateHandler(){

  console.log("updateHandler working");
  try {
    
    const washingtonRef = doc(db, "data", globalDataId);
    console.log(globalDataId);
    
    console.log(dataId, ">>> data id globally")
    
    await updateDoc(washingtonRef, {
      inputData: inputBar.value
    });
    
    window.location.reload()
    inputBar.value = '';
  } catch (error) {
    
    console.log(error, ">>> updateHandler not working")  
   
}}
    


function editHandler(inputData, dataId){
  
  inputBar.value = inputData ;
  globalDataId = dataId
  console.log(dataId, inputData,"editHandler working")   
  
  btn.innerHTML = "update"
  
  btn.removeEventListener("click", postTodoData);
  btn.addEventListener("click", updateHandler)
  
  
  }


  
  
  window.deleteItemHandler = deleteItemHandler
  window.editHandler = editHandler

// All Item Delete //

// let deltItemBox = document.createElement('div');
// deltItemBox.style.visibility = "hidden"
// deltItemBox.className = "allItemDelt";
// listDiv.appendChild(deltItemBox);

// let deltItemBtn = document.createElement('button');
// deltItemBtn.className = "deltItemBtn";
// deltItemBox.appendChild(deltItemBtn);
// let deltItemBtnText = document.createTextNode('Delete All Item');
// deltItemBtn.appendChild(deltItemBtnText);
// console.log(deltItemBox)



