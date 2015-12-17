
function dump(obj){ var txt=''; for(var i in obj)txt+="\n"+i+' :: '+obj[i]; alert(txt);}

function $(id){ return document.getElementById(id); }

var toolVisible = false;
var toolTop     = false;

function showTools(){
toolVisible=$("chkToolsVis").checked;
toolTop    =$("chkToolsTop").checked;
var t0 = $('divTools0');
var t1 = $('divTools1');
var t2 = $('divTools2');
t1.style.display=toolVisible?'block':'none';
var h0 = 0 , h1 = 0;
h0 = t0.offsetHeight+10; if(toolVisible){ t1.style.bottom=(10+h0)+'px';
h1 = t1.offsetHeight+10; }
if(!toolTop){
t0.style.top=''   ; t0.style.bottom=        '0' ;
t1.style.top=''   ; t1.style.bottom= h0    +'px';
t2.style.top='0px'; t2.style.bottom=(h0+h1)+'px'; return;}
t0.style.top=        '0' ; t0.style.bottom='';
t1.style.top= h0    +'px'; t1.style.bottom='';
t2.style.top=(h0+h1)+'px'; t2.style.bottom='0';
}

function onload(){
$("chkToolsVis").checked=toolVisible;
$("chkToolsTop").checked=toolTop;
showTools(); // dump($('divTools0'));
}

