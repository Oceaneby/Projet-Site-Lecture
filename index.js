const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
    mouses.forEach((mouse) => {
        mouse.style.top = e.pageY + 'px';
        mouse.style.left = e.pageX + 'px';
    });
});

//window .addEventListener('mousemove' , (e) => {
    //console.log('test');
   // cursor.style.top = e.y + 'px';
   // cursor.style.left = e.x + 'px';

   // mouse1.style.top = e.y + 'px';
    //mouse1.style.left = e.x + 'px';

   // mouse2.style.top = e.y + 'px';
   // mouse2.style.left = e.x + 'px';
//});
