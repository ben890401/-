
const menuBtn = document.getElementById('menu-btn');
const navText = document.getElementById('nav-text');

menuBtn.addEventListener('click', function () {
    navText.classList.toggle('show');
});
let images1 = ["./work-img/剑术师0.jpg", "./work-img/傷害減輕.png", "./work-img/30px-Icon_剑术师.png"];
let images2 = ["./work-img/斧术师0.jpg", "./work-img/傷害減輕.png", "./work-img/30px-Icon_斧术师.png"];
let images3 = ["./work-img/格斗家0.jpg", "./work-img/傷害減輕.png", "./work-img/30px-Icon_格斗家.png"];
let images4 = ["./work-img/枪术师0.jpg", "./work-img/傷害減輕.png", "./work-img/30px-Icon_枪术师.png"];
let images5 = ["./work-img/弓箭手0.jpg", "./work-img/傷害減輕.png", "./work-img/30px-Icon_弓箭手.png"];
let images6 = ["./work-img/咒术师0.jpg", "./work-img/傷害減輕.png", "./work-img/30px-Icon_咒术师.png"];
let images7 = ["./work-img/秘术师0.jpg", "./work-img/傷害減輕.png", "./work-img/30px-Icon_秘术师.png"];
let images8 = ["./work-img/幻术师0.jpg", "./work-img/傷害減輕.png", "./work-img/30px-Icon_幻术师.png"];
let imageList = [images1, images2, images3, images4, images5, images6, images7, images8];

for (let i = 1; i <= 8; i++) {
    let intervalId;
    let imageSwitch = 0;
    document.getElementById(`images${i}`).addEventListener("mouseenter", function () {
        intervalId = setInterval(function () {
            document.getElementById(`images${i}`).src = imageList[i - 1][imageSwitch];
            imageSwitch = (imageSwitch + 1) % imageList[i - 1].length;
        }, 1000);
    });
    document.getElementById(`images${i}`).addEventListener("mouseleave", function () {
        document.getElementById(`images${i}`).src = imageList[i - 1][0];
        clearInterval(intervalId);

    });
}
let currentSlide = 0; // 当前显示的图片索引
const slides = document.querySelectorAll('.carousel-images img'); // 获取所有图片
const totalSlides = slides.length; // 总图片数

// 更新轮播图片
function updateCarousel() {
    const carousel = document.querySelector('.carousel-images');
    carousel.style.transform = `translateX(${-currentSlide * 100}%)`; // 使用 transform 来移动图片
}

// 切换到上一张或下一张
function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // 保证循环切换
    updateCarousel();
}

// 自动轮播
setInterval(function () {
    moveSlide(1); // 每3秒切换到下一张
}, 3000);

function jumpSlide(n) {
    const carousel = document.querySelector('.carousel-images');
    carousel.style.transform = `translateX(${-(n - 1) * 100}%)`;
}

