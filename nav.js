
//  const ico=document.querySelector('.detail summary i')


//  const det=document.querySelector('.detail').addEventListener('clcik',()=>{
//     ico.classList.add('fa-solid fa-angle-up')
// })
$('.menu-btn').click(function () {
    $('nav .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
    $('.menu-btn i').toggleClass("fa-sharp fa-solid fa-xmark");
    $('nav').toggleClass("active");
    $('section').toggleClass('active')
})
$('.deta1 summary').click(function () {
    $('.deta1 summary i').toggleClass("fa-angle-up");
})
$('.deta2 summary').click(function () {
    $('.deta2 summary i').toggleClass("fa-angle-up");
})
