const gallery=document.getElementById("Gallery")
const galleryRectangle=document.getElementById("GalleryRectangle")
const galleryText=document.getElementById("GalleryText")

const Aducation=document.getElementById("Aducation")
const AducationRectangle=document.getElementById("AducationRectangle")
const AducationText=document.getElementById("AducationText")

const aboutMe=document.getElementById("aboutMe")
const contacts=document.getElementById("contacts")
const work=document.getElementById("work")
const language =document.getElementById("language")

contacts.onclick=()=>{
   document.location.href="contacts.html"
}

gallery.onmouseover = () =>{
gallery.style.width= '500px'
gallery.style.height= '500px'
gallery.style.left= '230px'
gallery.style.top= '328px'
galleryRectangle.style.visibility='visible'
galleryText.style.visibility='visible'
gallery.style.filter='brightness(70%)'
}

galleryRectangle.onmouseover = () =>{
    gallery.style.width= '500px'
    gallery.style.height= '500px'
    gallery.style.left= '230px'
    gallery.style.top= '328px'
    galleryRectangle.style.visibility='visible'
    galleryText.style.visibility='visible'
    gallery.style.filter="brightness(70%)"
    }
    galleryText.onmouseover = () =>{
        gallery.style.width= '500px'
        gallery.style.height= '500px'
        gallery.style.left= '230px'
        gallery.style.top= '328px'
        galleryRectangle.style.visibility='visible'
        galleryText.style.visibility='visible'
        gallery.style.filter="brightness(70%)"
        }


gallery.onmouseout = () =>{
    gallery.style.width= '480px'
    gallery.style.height= '480px'
    gallery.style.left= '240px'
    gallery.style.top= '338px'
    galleryRectangle.style.visibility='hidden'
galleryText.style.visibility='hidden'
gallery.style.filter="brightness(100%)"
}


    Aducation.onmouseover = () =>{
        Aducation.style.width= '500px'
        Aducation.style.height= '500px'
        Aducation.style.left= '1190px'
        Aducation.style.top= '328px'
        AducationRectangle.style.visibility='visible'
AducationText.style.visibility='visible'
Aducation.style.filter='brightness(70%)'
    }
        
        
    Aducation.onmouseout = () =>{
        Aducation.style.width= '480px'
        Aducation.style.height= '480px'
        Aducation.style.left= '1200px'
        Aducation.style.top= '338px'
        AducationRectangle.style.visibility='hidden'
        AducationText.style.visibility='hidden'
        Aducation.style.filter='brightness(100%)'
        }

        AducationRectangle.onmouseover = () =>{
            Aducation.style.width= '500px'
        Aducation.style.height= '500px'
        Aducation.style.left= '1190px'
        Aducation.style.top= '328px'
        AducationRectangle.style.visibility='visible'
AducationText.style.visibility='visible'
Aducation.style.filter='brightness(70%)'
            }
            AducationText.onmouseover = () =>{
                Aducation.style.width= '500px'
        Aducation.style.height= '500px'
        Aducation.style.left= '1190px'
        Aducation.style.top= '328px'
        AducationRectangle.style.visibility='visible'
AducationText.style.visibility='visible'
Aducation.style.filter='brightness(70%)'
                }


                aboutMe.onmouseover=()=>{

                   aboutMe.style.color= '#FCB875'
                   
                }
                aboutMe.onmouseout=()=>{

                    aboutMe.style.color= '#FFFAF5'
                    
                 }
 contacts.onmouseover=()=>{

    contacts.style.color= '#FCB875'
 }
 contacts.onmouseout=()=>{

    contacts.style.color= '#FFFAF5'
 }
 work.onmouseover=()=>{

    work.style.color= '#FCB875'
 }
 work.onmouseout=()=>{

    work.style.color= '#FFFAF5'
 }
 language.onmouseover=()=>{

    language.style.color= '#FCB875'
 }
 language.onmouseout=()=>{

    language.style.color= '#FFFAF5'
 }