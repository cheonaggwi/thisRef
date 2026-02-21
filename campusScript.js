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
