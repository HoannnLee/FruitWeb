
// Show modal Login
var modal = document.querySelector('.modal-Login');
var modalContainer = document.querySelector('.modal-Login-container');
var dangnhap = document.querySelector('.user');

function showLogin(){
  modal.classList.add('open-modal');

}

function hideLogin(){
  modal.classList.remove('open-modal');
}

dangnhap.addEventListener('click', showLogin);

modal.addEventListener('click', hideLogin);

dangnhap.addEventListener('click', function(event){
    event.preventDefault();
});

modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
})



// Menu di chuyển khi scroll trình duyệt

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    // Scroll down
    document.querySelector(".menu").style.top = "-155px";
  } else {
    // Scroll up
    document.querySelector(".menu").style.top = "155px";
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);


// thay đổi source ảnh

// Lấy kích thước ban đầu của hình ảnh chính
var mainImageWidth = document.getElementById('main-image').width;

// Lấy tất cả các thẻ <img> có class là 'thumbnail'
var thumbnails = document.getElementsByClassName('thumbnail');

// Lặp qua từng thẻ và thêm sự kiện 'mouseenter'
for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseenter', function() {
        // Khi một thumbnail được nhấp vào, thay đổi nguồn hình ảnh của #mainImage thành nguồn hình ảnh của thumbnail đó
        var newSrc = this.src;
        document.getElementById('main-image').src = newSrc;
        // Áp dụng kích thước ban đầu của hình ảnh chính cho hình ảnh mới
        document.getElementById('main-image').width = mainImageWidth;
    });
}


// modal đăng nhập

// function showLogin(){
//     modal.classList.add('open-modal');
// }

// function hideLogin(){
//     modal.classList.remove('open-modal');
// }

// dangnhap.addEventListener('click',showLogin);

// // ngăn hành vi mặc định của thẻ a
// dangnhap.addEventListener('click',function(event){
//     event.preventDefault();
// });

// // ấn ra ngoài ẩn khung đăng nhập
// modal.addEventListener('click',hideLogin);

// // ngăn sự kiện nổi bọt tắt khung đăng nhập khi đang đăng nhập
// modalContainer.addEventListener('click',function(event){
//     event.stopPropagation();
// })



