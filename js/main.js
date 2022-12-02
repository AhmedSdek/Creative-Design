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