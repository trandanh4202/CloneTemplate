const images = document.querySelectorAll(".image img");
const gallery = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery-inner img");
const close = document.querySelector(".gallery .close");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

var currentIndex=0

function ShowGallery(){
    if ( currentIndex == images.length - 1)
    {
        next.classList.add('hide')
    }
    else
    {
        next.classList.remove('hide')
    }

    if( currentIndex == 0)
    {
        prev.classList.add('hide')
    }
    else
    {
        prev.classList.remove('hide')
    }
    gallery.classList.add('show')
    galleryImg.src=images[currentIndex].src
}

images.forEach(function(image,index){
    image.addEventListener('click',function(){
        currentIndex=index
        ShowGallery()
    })
})

close.addEventListener('click',function(){
    gallery.classList.remove('show')
})

prev.addEventListener('click',function(){
    if(currentIndex!=0)
    {
        currentIndex--
    }
    else
    {
        undefined
    }
    ShowGallery()
})

next.addEventListener('click',function(){
    if(currentIndex != images.length -1)
    {
        currentIndex++
    }
    else
    {
        undefined
    }
    ShowGallery()
})

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) gallery.classList.remove("show");
  });
  