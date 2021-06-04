function timeNow(){
    
    dateObject= new Date();
	var hours=dateObject.getHours();
	var minutes=dateObject.getMinutes();
	var seconds=dateObject.getSeconds();
	
    
    var currentTimeNow= hours +":"+ minutes +":"+ seconds +"  AM ";
    
    document.getElementById("time").innerHTML= currentTimeNow;
            }
    setInterval(timeNow,1000);