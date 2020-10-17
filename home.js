var addBtn = document.querySelector('#add-button').addEventListener('click', adder);
var tableDiv = document.getElementById('table-div');
var table = document.querySelector('table');
var savebtn = document.querySelector('#btn');
var statusDiv = document.querySelector('#status');




let addClick = 0;
let onoff = 0;


// Clicking The Add Button
function adder() {
    addClick++;
    // Creating New elements
    let newTr = document.createElement("tr");

    let newtd1 = document.createElement('td');
    newtd1.setAttribute('class', 'item-one'+addClick);

    let newtd2 = document.createElement('td');
    newtd2.setAttribute('class', 'item-two'+addClick);

    let newtd3 = document.createElement('td');
    newtd3.setAttribute('class', 'item-three'+addClick);

    // Creating Inner Html For TD's 

  newtd1.innerHTML ="<input class='text"+ addClick+"' type='text'>";
  newtd2.innerHTML ="<input class='time"+ addClick+ "'type='time'>";
  newtd3.innerHTML ="<input class='check"+ addClick+ "'type='checkbox'>";

 

// Creating Inner Html End
   tableDiv.style.display = 'initial';  // On first click the default table is shown
//    On Second Click 
    

           newTr.appendChild(newtd1); // appen new table data into new row
           newTr.appendChild(newtd2); // appen new table data into new row
           newTr.appendChild(newtd3); // appen new table data into new row
       
      table.appendChild(newTr); 
      onoff++;
      console.log('adder function' + onoff);
   document.querySelector('#btn').style.display = 'initial';

}

  
// When button "add list" is clicked

savebtn.addEventListener('click', saver);
var completeTaskCountr = 0;
function saver() {
  
 

  if (onoff ==1){
    onoff=0;
  }
  else {
  
  
  console.log('entered into');
  
        for(var i= addClick; i>0; i--){
          
            let textminone = document.querySelector('.text' + (i-1)).value; 
            let timeminone = document.querySelector('.time' + (i-1)).value;
            let checkminone = document.querySelector('.check'+ (i-1)).checked;

            
            document.querySelector('.item-one'+(i-1)).innerHTML = textminone; 
            document.querySelector('.item-two'+(i-1)).innerHTML = timeminone;
            if (checkminone){
              document.querySelector('.item-three'+(i-1)).innerHTML = 'Completed';
              completeTaskCountr++;
            }
            else {
              document.querySelector('.item-three'+(i-1)).innerHTML = 'Not Yet Completed';
            }
        }
    
  }


   
}

savebtn.addEventListener('click', function(){
  let text = document.querySelector('.text' + addClick).value;
  let time = document.querySelector('.time' + addClick).value;
  let check = document.querySelector('.check'+ addClick).checked;
  

  document.querySelector('.item-one'+addClick).innerHTML = text;
  document.querySelector('.item-two'+addClick).innerHTML = time;
      if (check){
        document.querySelector('.item-three'+addClick).innerHTML = 'Completed';
        completeTaskCountr++;
      }
      else {
        document.querySelector('.item-three'+addClick).innerHTML = 'Not Yet Completed';
      }
   document.querySelector('#btn').style.display = 'none';
});

 savebtn.addEventListener('click', statur);
   var staturvar = 0;
 function statur(){
    staturvar++;
    if (staturvar == 1) {
    var status = document.createElement('h3');
    status.setAttribute('class', 'status-class');
    /* total task counte */ var totaltasks =  document.querySelectorAll('tr').length;
    status.innerHTML= '<span>Total Tasks : ' + (totaltasks-1) + '</span> <span>' + 'Completed Tasks : ' + completeTaskCountr + '</span> <span>' + 'Remaining Tasks : ' + ((totaltasks-1)-completeTaskCountr) + '</span>' ;
    statusDiv.appendChild(status);
    }
    else {
      document.querySelector('.status-class').remove();
      var status = document.createElement('h3');
    status.setAttribute('class', 'status-class');
    /* total task counte */ var totaltasks =  document.querySelectorAll('tr').length;
    status.innerHTML= '<span>Total Tasks : ' + (totaltasks-1) + '</span> <span>' + 'Completed Tasks : ' + completeTaskCountr + '</span> <span>' + 'Remaining Tasks : ' + ((totaltasks-1)-completeTaskCountr) + '</span>' ;
    statusDiv.appendChild(status);
    }
    
 }