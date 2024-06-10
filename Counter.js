
let counterElement = document.getElementById("counterValue");
function onIncrement()
{
  let previousValue = counterElement.textContent;
  let updatedValue =parseInt(previousValue) +1;
  counterElement.textContent = updatedValue;
  counterElement.style.color="green";
  
}


function onDecrement()
{
    let previousValue =counterElement.textContent;
    let updatedValue = parseInt(previousValue) -1;
    counterElement.textContent =updatedValue;
    counterElement.style.color="red";
}

function onReset()
{
     let updatedCounterValue = 0;
     counterElement.textContent =updatedCounterValue;
}


    let g=78;
    let h=99;
    let tot = g+h;
    console.log(tot);