
var val = 20;

setInterval(function() {
    val--;


    if (val >= 0) {
        id = document.getElementById("timer");
        id.innerHTML = val;
    }
    if(val==0){
        document.getElementById("next").click();
    }
},1000);