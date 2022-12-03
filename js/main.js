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
