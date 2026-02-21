// 화면 비율 정리
if (document.querySelector('html').id !== "index"){
document.querySelector("#underApp").style.width = parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('height'))/35*18+'px';
window.addEventListener('resize', function() {
    document.querySelector("#underApp").style.width = parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('height'))/35*18+'px';
})}

document.querySelector("#outApp").style.width = parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('height'))/35*18+'px';
document.querySelector("#worldBorderLeft").style.width = (parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('width'))-parseFloat(document.querySelector("#outApp").style.width))/2+'px';
document.querySelector("#worldBorderRight").style.width = (parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('width'))-parseFloat(document.querySelector("#outApp").style.width))/2+'px';

window.addEventListener('resize', function() {
    document.querySelector("#outApp").style.width = parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('height'))/35*18+'px';
    document.querySelector("#worldBorderLeft").style.width = (parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('width'))-parseFloat(document.querySelector("#outApp").style.width))/2+'px';
    document.querySelector("#worldBorderRight").style.width = (parseFloat(window.getComputedStyle(document.querySelector('body')).getPropertyValue('width'))-parseFloat(document.querySelector("#outApp").style.width))/2+'px';
})

// 밑 버튼 클릭 시 화면 전환
if (document.querySelector('html').id !== "index"){
document.querySelector('#button_4_1').addEventListener('click',()=>{
    window.location.assign('home.html')
})

document.querySelector('#button_4_2').addEventListener('click',()=>{
    window.location.assign('campus.html')
})
document.querySelector('#button_4_3').addEventListener('click',()=>{
    window.location.assign('data.html')
})}