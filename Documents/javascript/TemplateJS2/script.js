// const age =document.getElementsById('age')="age"
// const weight =document.getElementById('weight')="weight"

function validate() {
  var ag = document.getElementById('ag').value;
  var wt = document.getElementById("wt").value;
  

  let msg1 = " Congratulations : Your weight is Normal ";
  let msg2 = " Caution : Your Weight is Overweight";
  let msg3 = " Caution : Your Weight is Underweight";
  if (ag>=5 && ag<=7) {
      if(wt>=15 && wt<=20){
        document.getElementById("agee").innerHTML =msg1;
    }
    else if(wt>20){
        document.getElementById("agee").innerHTML =msg2;

    }
    else if(wt<15){
        document.getElementById("agee").innerHTML =msg3;
    }
    
    
  }
  if (ag>=8 && ag<=10) {
    if(wt>=21 && wt<=25){
      document.getElementById("agee").innerHTML =msg1;
  }
  else if(wt>25){
      document.getElementById("agee").innerHTML =msg2;

  }
  else if(wt<21){
      document.getElementById("agee").innerHTML =msg3;
  }
  
  
} 
if (ag>=11 && ag<=15) {
    if(wt>=26 && wt<=30){
      document.getElementById("agee").innerHTML =msg1;
  }
  else if(wt>26){
      document.getElementById("agee").innerHTML =msg2;

  }
  else if(wt<30){
      document.getElementById("agee").innerHTML =msg3;
  }
  
  
}
if (ag>=16 && ag<=20) {
    if(wt>=31 && wt<=40){
      document.getElementById("agee").innerHTML =msg1;
  }
  else if(wt>40){
      document.getElementById("agee").innerHTML =msg2;

  }
  else if(wt<31){
      document.getElementById("agee").innerHTML =msg3;
  }
  
  
}  // else {
    //document.getElementById("agee").innerHTML =msg2;
 // }
}
