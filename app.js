 
 function settingToggle() {
    let setting = document.querySelector('.setting');
    setting.classList.toggle('setting-height-js');
}

let darkbtn = document.querySelector('#darkbtn');
darkbtn.onclick = function(){
    darkbtn.classList.toggle("onbtn");
    document.body.classList.toggle('dark-theme')
    
    if(localStorage.getItem('theme') == 'light'){
    localStorage.setItem('theme','dark');

    }else{
    localStorage.setItem('theme','light');

    }
    
}
 
if(localStorage.getItem('theme') == 'light'){
    darkbtn.classList.remove('onbtn');
    document.body.classList.remove('dark-theme')

}
else if(localStorage.getItem('theme') == 'dark'){

    darkbtn.classList.add('onbtn');
    document.body.classList.add('dark-theme')
}
else{
    localStorage.setItem('theme','light');

}


let like = '';

function likebtn(){
    let likebutton = document.querySelector('.like-js')
    like++
    likebutton.innerText = `${like}`
     
}
 

let like2 = '';

function likebtn2(){
    let likebutton2 = document.querySelector('.like2-js')
    like2++
    likebutton2.innerText = `${like2}`
         
}
  

let like3 = '';

function likebtn3(){
    let likebutton3 = document.querySelector('.like3-js')
    like3++
    likebutton3.innerText = `${like3}`
         
}
 


let like4 = '';

function likebtn4(){
    let likebutton4 = document.querySelector('.like4-js')
    like4++
    likebutton4.innerText = `${like4}`
         
}



let like5 = '';

function likebtn5(){
    let likebutton5 = document.querySelector('.like5-js')
    like5++
    likebutton5.innerText = `${like5}`
         
}
