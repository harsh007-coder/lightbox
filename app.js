var lightbox=document.createElement('div') 
lightbox.id='lightbox'  //<div id=lightbox></div>
document.body.appendChild(lightbox) //append child add lightbox to whole body

const images = document.querySelectorAll('img') //select all the images
images.forEach(image=>{
    image.addEventListener('click',e=>{
        lightbox.classList.add('active') //active effect added to images

        const img = document.createElement('img')
        img.src=image.src   //img src="images src="all images " 
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img) //include lightbox to img 
    })
})
lightbox.addEventListener('click', e =>{
    if (e.target !==e.currentTarget)return //this remove the current images if you click other images
    lightbox.classList.remove('active')
})