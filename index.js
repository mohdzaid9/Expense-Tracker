let budgetInputBox = document.getElementById('budgetInputBox')
let expenseInputBox = document.getElementById('expenseInputBox')
let budgetBtn = document.getElementById('budgetBtn')
let expenseBtn = document.getElementById('expenseBtn')
let budgetBoxInner = document.getElementById('BudgetBoxInner')
let expenseBoxInner = document.getElementById('expenseBoxInner')
let balanceBoxInner = document.getElementById('balanceBoxInner')
let productnameBox = document.getElementById('productNameBox')
let productNameInputBox = document.getElementById('productNameInputBox')
let productPriceBox = document.getElementById('productPriceBox')
let listNumberBox = document.getElementById('listNumberBox')


//budget box handler

const budgetFill =()=>{
    budgetBtn.addEventListener('click',()=>{
        console.log(budgetInputBox.value)
        budgetBoxInner.innerHTML = budgetInputBox.value 
    })
}
budgetFill()



//expense Box handler

const expenseFill=()=>{
    let sum = 0 
    let listCounter = 0
    
    expenseBtn.addEventListener('click',()=>{
        //expense Box handler
        sum =  Number(expenseInputBox.value) + Number(sum)
           expenseBoxInner.innerHTML=sum
        

           //balance box handler
           balanceBoxInner.innerHTML = Number(budgetInputBox.value) - Number(sum)
           console.log(balanceBoxInner.value)
           
           //add Prododucts function
            
           const addNotes=()=>{
            let note = document.createElement('h3')
            note.innerHTML = productNameInputBox.value
            productNameInputBox.value=''
            
            let price = document.createElement('h3')
            price.innerHTML = expenseInputBox.value
            expenseInputBox.value = '' 
            listCounter++
            //increasing list
            let list = document.createElement('h3')
            list.innerHTML= listCounter

    
            productnameBox.append(note)
            productPriceBox.append(price)
            listNumberBox.append(list)
           }
           addNotes()
        })
}
expenseFill()


           //button disabling 


// if(productNameInputBox.value=''){
//   expenseBtn.disabled=true
// }