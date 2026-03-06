'use strict'

/*access and modificate properties of window to navegator*/



function getBom(){
    console.log(window.innerWidth);
    console.log(window.innerHeight);
}
//same
console.log(screen.width);
console.log(screen.height);

console.log(window.location.href); //url


function redirect(url){
    window.location.href = url;
}
//redirect to google.com

redirect('https://www.google.com');