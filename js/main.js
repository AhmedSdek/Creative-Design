
let btn = document.querySelector('.toggle-menu');
let menu = document.querySelector('.links');

btn.onclick = function(){
this.classList.toggle('menu-active');
menu.classList.toggle('open')
};

document.addEventListener('click',function(e){

    if(e.target !== btn && e.target !== menu ){

    if(menu.classList.contains('open')){
        btn.classList.toggle('menu-active');
        menu.classList.toggle('open')
    }
    }
}) ;
menu.onclick = function(e){
    e.stopPropagation();
    
};

$(document).ready(function(){
    $('a').click(function(){
        $('a').removeClass()
        $(this).addClass('active');
    })
});

$(window).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 400){
            $('.first-up').fadeIn(1000);
        }else{
            $(".first-up").fadeOut();
        }
    })
});
$(window).ready(function(){
    $(".first-up").on('click', function(){
        $(window).scrollTop(0);
    });
});
// smooth scroll to div 
const allLinks = document.querySelectorAll('.links a');
function scrollToSections (element){
    element.forEach(ele => {
        ele.addEventListener('click', (e) =>{
            e.preventDefault();
            document.querySelector(e.target.dataset.value).scrollIntoView({
                behavior: 'smooth'
            })
        });
    });
};
scrollToSections(allLinks);

//......
let hederText = document.querySelector('.section-text h1');
let hederP = document.querySelector('.section-text p');

window.onload = function(){
    hederText.style.left = '0';
    hederP.style.left = '0';
};

let aboutImg = document.querySelector('.about-us .img-cont');
let aboutText = document.querySelector('.about-us .text-cont');
let offerImg = document.querySelector('.offers .img-cont');
let offerText = document.querySelector('.offers .text-cont');


window.addEventListener('scroll', ()=> {
        // console.log(document.documentElement.scrollTop);
        if (this.document.documentElement.scrollTop >= 210){
            aboutImg.style.left = '0';
            aboutText.style.right = '0';
        }else{
            aboutImg.style.left = '-700px';
            aboutText.style.right = '-700px';
        };
        if(this.document.documentElement.scrollTop >= 1065){
            aboutImg.style.left = '-700px';
            aboutText.style.right = '-700px';
        };

        if (this.document.documentElement.scrollTop >= 890){
            offerImg.style.left = '0';
            offerText.style.right = '0';
        }else{
            offerImg.style.left = '-700px';
            offerText.style.right = '-700px';
        };
        if(this.document.documentElement.scrollTop >= 1645){
            offerImg.style.left = '-700px';
            offerText.style.right = '-700px';
        }
});

let settingBtn = document.querySelector('.setting-box .setting i');
let settingBox = document.querySelector('.setting-box')
settingBtn.addEventListener('click', function(){
    settingBox.classList.toggle('open');
    settingBtn.classList.toggle('fa-spin');

});

let light = document.querySelector('.left .light');
let dark = document.querySelector('.right .dark');
let nav = document.querySelector('.nav-section');
let setting = document.querySelector('.setting-box .setting');
let about = document.querySelector('.about-us');
let pargraph = document.querySelector('.text-cont .about-p');
let contact = document.querySelector('.contact');
let offerP = document.querySelector('.opffer-p');
let offerp2 = document.querySelector('.opffer-p2');
let contactLeft = document.querySelector('.contact-cont .left h3');
let contacRight = document.querySelector('.contact-cont .right h3');
let li = document.querySelectorAll('.contact-cont i');


light.addEventListener('click', function(){
        light.style.opacity='1';
    dark.style.opacity = '0.4';
    nav.style.backgroundColor = 'white';
    settingBox.style.backgroundColor = 'white';
    settingBox.style.color = 'black';
    setting.style.backgroundColor = 'white';
    about.style.backgroundColor= '#eee';
    document.body.style.backgroundColor= 'white';
    contact.style.backgroundColor= 'white';
    offerP.style.color= 'black';
    offerp2.style.color= 'black';
    pargraph.style.color= 'black';
    contactLeft.style.color= 'black';
    contacRight.style.color= 'black';
    for (var i = 0; i < li.length; i++){
        li[i].style.color='black'
    };
    
// set localstoreg
localStorage.removeItem('dark');
localStorage.setItem('light', 'white');
});
dark.addEventListener('click', function(){
    dark.style.opacity='1';
    light.style.opacity = '0.4';
    nav.style.backgroundColor = 'black';
    settingBox.style.backgroundColor = 'black';
    settingBox.style.color = 'white';
    setting.style.backgroundColor = 'black';
    document.body.style.backgroundColor= 'black';
    about.style.backgroundColor= 'black';
    pargraph.style.color= 'white';
    contact.style.backgroundColor= 'black';
    offerP.style.color= 'white';
    offerp2.style.color= 'white';
    contactLeft.style.color= 'white';
    contacRight.style.color= 'white';
    for (var i = 0; i < li.length; i++){
        li[i].style.color='white'
    };

    // set localstoreg
    localStorage.removeItem('light');
localStorage.setItem('dark', 'black');
});
console.log(localStorage);

if (localStorage.getItem('dark') === "black"){

    dark.style.opacity='1';
    light.style.opacity = '0.4';
    nav.style.backgroundColor = 'black';
    settingBox.style.backgroundColor = 'black';
    settingBox.style.color = 'white';
    setting.style.backgroundColor = 'black';
    document.body.style.backgroundColor= 'black';
    about.style.backgroundColor= 'black';
    pargraph.style.color= 'white';
    contact.style.backgroundColor= 'black';
    offerP.style.color= 'white';
    offerp2.style.color= 'white';
    contactLeft.style.color= 'white';
    contacRight.style.color= 'white';
    for (var i = 0; i < li.length; i++){
        li[i].style.color='white'
    };
}else{
    light.style.opacity='1';
    dark.style.opacity = '0.4';
    nav.style.backgroundColor = 'white';
    settingBox.style.backgroundColor = 'white';
    settingBox.style.color = 'black';
    setting.style.backgroundColor = 'white';
    about.style.backgroundColor= '#eee';
    document.body.style.backgroundColor= 'white';
    contact.style.backgroundColor= 'white';
    offerP.style.color= 'black';
    offerp2.style.color= 'black';
    pargraph.style.color= 'black';
    contactLeft.style.color= 'black';
    contacRight.style.color= 'black';
    for (var i = 0; i < li.length; i++){
        li[i].style.color='black'
    };
}