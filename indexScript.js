// 화면 비율 정리

document.querySelector("#outApp").style.width = parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('height'))/35*18+'px';
document.querySelector("#worldBorderLeft").style.width = (parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('width'))-parseFloat(document.querySelector("#outApp").style.width))/2+'px';
document.querySelector("#worldBorderRight").style.width = (parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('width'))-parseFloat(document.querySelector("#outApp").style.width))/2+'px';

window.addEventListener('resize', function() {
    document.querySelector("#outApp").style.width = parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('height'))/35*18+'px';
    document.querySelector("#worldBorderLeft").style.width = (parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('width'))-parseFloat(document.querySelector("#outApp").style.width))/2+'px';
    document.querySelector("#worldBorderRight").style.width = (parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('width'))-parseFloat(document.querySelector("#outApp").style.width))/2+'px';
})

setTimeout(()=>{
    document.querySelector('#helloText').style.opacity = 1;
    document.querySelector('#mainApp').style.backgroundColor = "rgb(29, 165, 255)";
    setTimeout(()=>{
        document.querySelector('#mainApp').style.backgroundColor = "rgb(0, 155, 255)";
    },200)
    setTimeout(()=>{
        window.location.assign('home.html')
    },1300)
},1300)
