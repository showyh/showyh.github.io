document.write('<div id="htright" class="float_r align_r"></div>');
function show_student_time(){ 
window.setTimeout("show_student_time()", 1000); 
BirthDay=new Date("2014/08/09");
today=new Date(); 
timeold=(today.getTime()-BirthDay.getTime()); 
sectimeold=timeold/1000 
secondsold=Math.floor(sectimeold); 
msPerDay=24*60*60*1000 
e_daysold=timeold/msPerDay 
daysold=Math.floor(e_daysold); 
e_hrsold=(e_daysold-daysold)*24; 
hrsold=Math.floor(e_hrsold); 
e_minsold=(e_hrsold-hrsold)*60; 
minsold=Math.floor((e_hrsold-hrsold)*60); 
seconds=Math.floor((e_minsold-minsold)*60); 
	htright.innerHTML='<font color=#fff>我荒废的心和你一起走过，无数个日日夜夜；</br></br><font color="ooffff"> The years we have been spent together : </br></br> '+daysold+'天'+hrsold+'时'+minsold+'分'+seconds+'秒 </font></br> </br>Love u forever and ever.</br>--by showy</font></br></br><font size="3" color="ff00ff">&nbsp;&nbsp;&nbsp;&nbsp;2014/08/09</font><DIV style="DISPLAY: none">';
	} 
show_student_time(); 