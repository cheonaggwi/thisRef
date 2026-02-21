// 시간에 따른 배경 색

document.querySelector('#mainApp').style.backgroundColor = "rgb(0, 155, 255)";

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
