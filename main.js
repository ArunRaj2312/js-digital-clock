function showTime(){
    var t=new Date()
    var h=t.getHours();
    var m=t.getMinutes();
    var s=t.getSeconds();
    var d=t.getDate();
    var mon=t.getMonth();
    var y=t.getFullYear();
    var day=t.getDay();
    var n;
    if(h<12){
        document.getElementById("am").checked=true;
    }
    else if(h>12){
        h=h-12;
        document.getElementById("pm").checked=true;
    }
    (h<10)? h="0"+h:h;
    (m<10)? m="0"+m:m;
    (s<10)? s="0"+s:s;
    document.getElementById("date").innerText=d;
    document.getElementById("mon").innerText=mon;
    document.getElementById("year").innerText=y; 
    document.getElementById("hour").innerText=h;
    document.getElementById("min").innerText=m;
    document.getElementById("sec").innerText=s; 
    
    switch(day){
        case 0:
            document.getElementById("sunday").checked=true;
            break;
        case 1:
            document.getElementById("monday").checked=true;
            break;
        case 2:
            document.getElementById("tuesday").checked=true;
            break;
        case 3:
            document.getElementById("wednesday").checked=true;
            break;
        case 4:
            document.getElementById("thursday").checked=true;
            break;
        case 5:
            document.getElementById("friday").checked=true;
            break;
        case 6:
            document.getElementById("saturay").checked=true;
            break;
    }
}
setInterval(function(){
    showTime();
},1000)


