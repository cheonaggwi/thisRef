// 버튼 클릭 이벤트

const buttonList = document.querySelectorAll('#buttonAll *');

var buttonAppList = []

for (const i of buttonList) {
    if (i.id !== "button_2_1") {
        buttonAppList.push([document.querySelector('#'+i.id+'_App'),i]);
    }
}

for (const i of buttonAppList) {
    i[1].addEventListener('click',function(){
        i[0].style.display = 'block';
        requestAnimationFrame(() => {
            i[0].style.opacity = 1;
            i[0].style.transform = 'scale(1)';
            document.querySelector('#mainApp').style.transform = 'scale(1.05)';
        });
    })
    document.querySelector('#'+i[0].id+' .exit').addEventListener('click',function(){
        i[0].style.opacity = 0;
        i[0].style.transform = 'scale(0.9)';
        document.querySelector('#mainApp').style.transform = 'scale(1)';
        setTimeout(() => {
            i[0].style.display = 'none';
        }, 150);
    })
}

document.querySelector('#button_2_1').addEventListener('click',()=>{
    window.open("https://login.donga.ac.kr/login?rd_c_p=checked", "_blank");
})

// 밑 버튼 클릭 시 화면 전환

document.querySelector('#button_4_1').addEventListener('click',()=>{
    window.location.assign('home.html')
})

document.querySelector('#button_4_2').addEventListener('click',()=>{
    window.location.assign('campus.html')
})
document.querySelector('#button_4_3').addEventListener('click',()=>{
    window.location.assign('data.html')
})

// 화면 비율 정리

document.querySelector("#outApp").style.width = parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('height'))/35*18+'px';
document.querySelector("#underApp").style.width = parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('height'))/35*18+'px';
document.querySelector("#worldBorderLeft").style.width = (parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('width'))-parseFloat(document.querySelector("#outApp").style.width))/2+'px';
document.querySelector("#worldBorderRight").style.width = (parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('width'))-parseFloat(document.querySelector("#outApp").style.width))/2+'px';

window.addEventListener('resize', function() {
    document.querySelector("#outApp").style.width = parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('height'))/35*18+'px';
    document.querySelector("#underApp").style.width = parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('height'))/35*18+'px';
    document.querySelector("#worldBorderLeft").style.width = (parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('width'))-parseFloat(document.querySelector("#outApp").style.width))/2+'px';
    document.querySelector("#worldBorderRight").style.width = (parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('width'))-parseFloat(document.querySelector("#outApp").style.width))/2+'px';
})
