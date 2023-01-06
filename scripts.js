function changeName()
{
    let text_x = document.getElementById("right-right").textContent;
    let text_y = document.getElementById("right-left").textContent;
    document.getElementById("right-left").innerHTML=text_x;
    document.getElementById("right-right").innerHTML=text_y;
}

function getSquare(){
    let a = 3;
    let h = 5;
    var p = (1/2) * a * h;
    var text = document.getElementById("right-left").textContent;
    document.getElementById("right-left").innerHTML = text + p;
}

function askAboutCookies()
{
  if(document.cookie){
  let save_cookies = prompt("YOUR COOKIES:\n"+getAllCookies().toString()+"Do you want to delete cookies?(yes/no)","yes");
  if(save_cookies=="yes")
  {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        alert("The cookies were deleted successfully.Refresh the page to see.");
    }
  }
  else{
  alert("The cookies are saved.")
  }
}
else
{
  alert("You have no cookies");
}
document.getElementById("focus_form").style.display = "none";
}


function checkCookie() {
    let numbers = document.getElementById("form_number").value;
    if (numbers != "") {
      alert("Your max number is: "+ maxNumber(numbers).toString());
        setCookie("value_"+ numbers, maxNumber(numbers).toString(), 2);
        location.reload();
    
    } 
    
}

function maxNumber(numbers)
{
    var numbersArray = numbers.split(" ");
    var maxNum = parseInt(numbersArray[0]);
    for(var i = 1; i < numbersArray.length; i++){
        if(parseInt(numbers[i]) > maxNum){
            maxNum = parseInt(n);
        }
    }
    return maxNum;

}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

let last_known_scroll_position = 0;
let ticking = false;

function makeWidth() {
    document.querySelector("body").style.fontWeight = "6";
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      makeWidth();
      ticking = false;
    });

    ticking = true;
  }
});

var selects = [];

onload = function() {
 filter(document.getElementById("sel1"), selects);
}

function filter(sel) {
 var val = sel.options[sel.selectedIndex].value;
 if (selects[sel] == undefined) selects[sel] = [];

 switch (val) {
 case '1': document.getElementById("focus_form").style.display = "none";;
  break;
 case '2': document.getElementById("focus_form").style.display = "block"; ;
  break;
 default : document.getElementById("focus_form").style.display = "none";;
 }
}


function addElement() {
    const newNode = document.createElement("li");
    const newBut = document.createElement("button");
    newBut.innerHTML = "delete";
    
    
    let name = document.getElementById("fname").value;
    newBut.addEventListener('click',function()
    {
      var old = localStorage.getItem("names").toString();
      let coma_after = old.search(name+",");
      let coma_before = old.search(","+  name);
      if(coma_after!=-1){
      var new_text = old.replace(name+",", "");
      }
      else{
        if(coma_before!=-1)
        {
          var new_text = old.replace(","+name, "");
        }
        else{
          var new_text = old.replace(name, "");
        }
      }
      
      
      localStorage.setItem("names", new_text);
      document.location.reload();
      
    });
     const textNode = document.createTextNode(name);
     newNode.appendChild(textNode);
     
     const list = document.getElementById("myList");
     list.insertBefore(newNode, list.children[0]);
     newNode.appendChild(newBut);
     var old = localStorage.getItem("names");
     if (old === null) old = "";
     else{
       old+=",";
     }
     localStorage.setItem("names", old+ name);
     
     
   }