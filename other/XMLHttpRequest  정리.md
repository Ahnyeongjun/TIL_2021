#### XMLHttpRequest  정리

const xhr = new XMLHttpRequest(); 

xhr.open('METHOD', 'PORT'); 

xhr.send();//request

 xhr.onreadystatechange = function (e) {  if (xhr.readyState !== XMLHttpRequest.DONE) return;   if(xhr.status === 200) {

 // 200: OK => https://httpstatuses.com 

   console.log(xhr.responseText); 

 } else {    console.log("Error!");  } };