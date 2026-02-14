//메인화면 버튼 클릭시 이벤트
const buttonList = document.querySelectorAll('#buttonAll *');

var buttonAppList = []

for (const i of buttonList) {
    buttonAppList.push([document.querySelector('#'+i.id+'_App'),i]);
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

//옵션 버튼 클릭시 이벤트
document.querySelector('#optionButton').addEventListener('click', function() {
    document.querySelector('#optionApp').style.display = 'block';
    document.querySelector('#optionBackground').style.display = 'block';
    document.querySelector('#underApp').style.display = 'none';
    requestAnimationFrame(() => {
        document.querySelector('#optionApp').style.left = '30%';
    })
})

document.querySelector('#optionApp .exit').addEventListener('click', function() {
    document.querySelector('#optionApp').style.left = '100%';
    setTimeout(() => {
        document.querySelector('#optionApp').style.display = 'none';
        document.querySelector('#optionBackground').style.display = 'none';
        document.querySelector('#underApp').style.display = 'grid';
    }, 300);
})

document.querySelector('#optionBackground').addEventListener('click', function() {
    document.querySelector('#optionApp').style.left = '100%';
    setTimeout(() => {
        document.querySelector('#optionApp').style.display = 'none';
        document.querySelector('#optionBackground').style.display = 'none';
        document.querySelector('#underApp').style.display = 'grid';
    }, 300);
})

// 밑 버튼 클릭 시 화면 전환

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
