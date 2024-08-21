
let chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!','@','#','%','&',];
let num =document.getElementById('num')
let count;
num.onblur = function(){
    count = num.value ;
} 
let btn = document.querySelector(".generate");
// console.log(random)

btn.addEventListener("click", ()=> {
    let res ='';
    if(count<=0){
        document.querySelector(".serial").innerHTML='Enter Valid Number';
    }
    else {
        for(let i =0 ; i<count;i++){
            let random = Math.floor(Math.random()*chars.length);
            // res.push(chars[random])
            res+=chars[random];
        }
        document.querySelector(".serial").innerHTML=res;
    }

})
