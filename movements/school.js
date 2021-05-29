let marks=document.getElementById("header")
let about=document.getElementById("about")
let work=document.getElementById("work")
let contacts=document.getElementById("contacts")
let back=document.getElementById("button")
about.onmouseover=()=>{
about.style.color="#FCB875"
}
work.onmouseover=()=>{
work.style.color="#FCB875";
}
contacts.onmouseover=()=>{
contacts.style.color="#FCB875";
}

about.onmouseout=()=>{
    about.style.color="white";
}
work.onmouseout=()=>{
    work.style.color="white";
}
contacts.onmouseout=()=>{
    contacts.style.color="white";
}
back.onmouseover=()=>{
    back.style.color="#FCB875"
}
back.onmouseout=()=>{
    back.style.color="white"
}
back.onclick=()=>{
    back.location.href=""
}
about.onclick=()=>{
    about.location.href=""
}
contacts.onclick=()=>{
    contacts.location.href=""
}
work.onclick=()=>{
    work.location.href=""
}