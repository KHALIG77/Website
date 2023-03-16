const signInBtn = document.querySelector("#sign-in")
const sections = document.querySelector("#for-dp-none")
const adminLogin = document.querySelector("#admin-panel")
const loginBtn = document.querySelector(".login-btn")
const inputs = document.querySelectorAll(".login-box input")
const adminData = document.querySelector("#data")
const addNewItemBtn = document.querySelector(".btn-new-item")
const addItemSection = document.querySelector(".add-item")
const myTable=document.querySelector(".myTable");
const btnShowItem =document.querySelector(".btn-show-item")
const boxShow =document.querySelector("#menu")

const staticAdmin = {
    login:"xaliq",
    password:"xaliq123"

}
let user = {
  userlogin:"",
  userpassword:""

}
let items = []

navSignBtn()

function navSignBtn(){
signInBtn.addEventListener("click",function(){
    
    sections.classList.toggle("d-none")
    adminLogin.classList.remove("d-none")
})
}

loginAdmin()

function loginAdmin(){


inputs.forEach(function(input){
    input.addEventListener("change",function(){
        const{name:inputName,value}=this
        user[inputName] = value
       
    })
    
})

loginBtn.addEventListener("click",function(){
    
    if(user.userlogin===staticAdmin.login&&user.userpassword===staticAdmin.password){
        adminLogin.classList.toggle("d-none")
        adminData.classList.toggle("d-none")

        addNewItemBtn.addEventListener("click",function(){
            addItemSection.classList.remove("d-none")
            addItem()
        })
        
        search()   

    }
    else{
      
alert("SEHVDIR")
      
      
    }
})



}

function addItem(){
    const addBtnForSubmit = document.querySelector('.add-btn-for-submit');

    addBtnForSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  
  let category = document.querySelector('#category').value;
  let lastPrice = document.querySelector('#lastPrice').value;
  let nowPrice = document.querySelector('#nowPrice').value;
  let chefName = document.querySelector('#chefName').value;
  let item = {
    id:0,
    category:"",
    lastPrice: 0,
    nowPrice:0,
    masterChef:""


}

  if(lastPrice===""||nowPrice===""||chefName===""){
    alert("PLEASE ADD ALL INFO")

  }
  else{
   
    item.id=items.length+1
    item.category=category;
    item.lastPrice=lastPrice;
    item.nowPrice=nowPrice;
    item.masterChef=chefName
    items.push(item)
    console.log(items)
    
    
    
  }

  addTable(items[items.length-1])
  function addTable(index){
    console.log(index)
  
        let row=myTable.insertRow(-1);
        let cell1=row.insertCell(0);
        let cell2=row.insertCell(1);
        let cell3=row.insertCell(2);
        let cell4=row.insertCell(3);
        let cell5=row.insertCell(4);

cell1.innerHTML = index.id;
cell2.innerHTML = index.category;
cell3.innerHTML = index.lastPrice;
cell4.innerHTML = index.nowPrice;
cell5.innerHTML = index.masterChef + '<button class="btn-danger btn-for-delete">Delete</button>';
let deleteButton = cell5.querySelector('button'); 
deleteButton.setAttribute('id', index.id); 

deleteButton.addEventListener("click", function(e) {
  let id = deleteButton.id;
  let index = items.findIndex(obj => obj.id == id);
console.log(id,index)
  if (index !== -1) {
    items.splice(index, 1);
    row.remove();
  }
});
    
    }

});

}


function search() {
    let input = document.getElementById('myInput');
   
    if (input) { 
      input.addEventListener("input", function() {
        let value = this.value.toLowerCase();
         let rows = document.querySelectorAll(".myTable tr")
        rows.forEach(function(row) {
          let text = row.textContent.toLowerCase();
          console.log(text)
          if (text.includes(value)) {
            row.style.display = "";
          } else {
            row.style.display = "none";
          }
        });
      });
    }
  }
  
btnShowItem.addEventListener("click",function(){
sections.classList.toggle("d-none")
signInBtn.classList.toggle("d-none")

})