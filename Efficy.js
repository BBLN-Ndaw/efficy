const oppoStatus = [
    {
      "K_OPPO_STATUS": 1,
      "STATUS": "1. Initial Contact",
      "SUCCESS": 0
    },
    {
      "K_OPPO_STATUS": 2,
      "STATUS": "2. Demonstration",
      "SUCCESS": 25
    },
    {
      "K_OPPO_STATUS": 3,
      "STATUS": "3. Proposal",
      "SUCCESS": 50
    },
    {
      "K_OPPO_STATUS": 4,
      "STATUS": "4. Negotiation",
      "SUCCESS": 75
    },
    {
      "K_OPPO_STATUS": 5,
      "STATUS": "5. Order",
      "SUCCESS": 100
    }
  ];
  
  const Module = class {
    constructor() {
  
    }
     addList(){
      let liststatus = document.getElementsByName("status")[0];
       let option = document.createElement("option");    
      for(let i = 0; i < oppoStatus.length; i++) {
      let option = document.createElement('option');
       option.textContent =oppoStatus[i].STATUS
      option.value =oppoStatus[i].SUCCESS;
      liststatus.add(option);
        }
       }
    start() {
    this.initEvent();
    this.addList();
        // Start modifying the form elements here!
        // You are allowed to add extra methods and properties to this class
    }
    initEvent()
    {
    let liststatus = document.getElementsByName("status")[0];
    liststatus.addEventListener('change',event=>{
     let successValue=event.target.value;
     let success = document.getElementsByName("success")[0];
     success.value=successValue;
    },false);
    
    let submitButton=document.getElementById("id");
    submitButton.addEventListener('click',event=>{
    let outPutValue= document.getElementsByClassName("output")[0];
    let successValue=document.getElementsByName("success")[0].value;
     let statusIndex = document.getElementsByName("status")[0].selectedIndex+1;
    let opp={status:statusIndex, success:successValue};
    let json= JSON.stringify(opp);
   
    outPutValue.textContent=json;
    event.preventDefault();
    
    },false);
    
    }
  }
  
  const main = new Module();
  main.start();