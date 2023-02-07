function press(obj){
    
    if(document.getElementById("checkbox").checked){
        var x=obj.innerHTML.toUpperCase();
    }
    else{
        var x=obj.innerHTML.toLowerCase();
    }
    document.getElementById("showbox").innerHTML+=x;
}
function space(obj){
    obj.innerHTML="\xa0";
    document.getElementById("showbox").innerHTML+=obj.innerHTML;
}

function cleartext(){
    document.getElementById("showbox").innerHTML="";
}
function uppercase(){
    var x= document.getElementById("showbox").innerHTML;
    alert(x.toUpperCase());
}
function charAt(){
    var x= document.getElementById("showbox").innerHTML;
    var innerbox= document.getElementById("checkinput").value;
    alert(x.charAt(innerbox));
}
function charcodeat(){
    var x= document.getElementById("showbox").innerHTML;
    var innerbox= document.getElementById("checkinput").value;
    alert(x.charCodeAt(innerbox));
}
function LowerCase(){
    var x= document.getElementById("showbox").innerHTML;
    alert(x.toLowerCase());
}
function Trim(){
    var x= document.getElementById("showbox").innerHTML;
    alert(x.trim());
}
function include(){
    var x= document.getElementById("showbox").innerHTML;
    var innerbox= document.getElementById("checkinput").value;
    alert(x.includes(innerbox));
}
function indexof(){
    var x= document.getElementById("showbox").innerHTML;
    var innerbox= document.getElementById("checkinput").value;
    alert(x.indexOf(innerbox));
}
function lastindexof(){
    var x= document.getElementById("showbox").innerHTML;
    var innerbox= document.getElementById("checkinput").value;
    alert(x.lastIndexOf(innerbox));
}
function startwith(){
    var x= document.getElementById("showbox").innerHTML;
    var innerbox= document.getElementById("checkinput").value;
    alert(x.startsWith(innerbox));
}
function endwith(){
    var x= document.getElementById("showbox").innerHTML;
    var innerbox= document.getElementById("checkinput").value;
    alert(x.endsWith(innerbox));
}