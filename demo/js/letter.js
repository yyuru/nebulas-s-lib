// var letter = '"顾桂林"';
// var arr=letter.split('');

// var dom=document.getElementById("letter");

// var time;
// var temp;
// for(let i = 0;i<arr.length;i++){
//     time=i*100;
//     setTimeout(() => {
//         temp=document.createElement('span');
//         temp.classList.add("fade");
//         temp.innerHTML=arr[i];
//         dom.appendChild(temp); 
//     }, time);
   
// }
var dom=document.getElementById('number');
var num=0;
for(let i=0;i<100;i++){
    
    setTimeout(() => {
        num++
    dom.innerHTML=num;
   
    
    }, 5*i);
}

