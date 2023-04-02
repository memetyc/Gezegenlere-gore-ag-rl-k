const select = document.querySelector("select")
const img = document.querySelector(".planet-image")
const mass = document.getElementById("mass")
const description = document.querySelector(".description")
const btn = document.querySelector("button")
const p = document.createElement("p")

const image  =document.querySelector(".image")
console.log(mass.value)
p.textContent="Kilogram yazıp gezeninizi seçerek başlayabilirsiniz"
image.style.display="none"
description.appendChild(p)
btn.addEventListener("click",function(){
    
    
    let kg = parseFloat(mass.value)
    
    let gezegen  = select.value
    if(mass.value ==""){
        p.textContent="Bir ağırlık girmelisin"
        img.removeAttribute("src")
        image.style.display="none"
        description.appendChild(p)
    }else if(gezegen==""){
        p.textContent="Bir gezegen seçmelisin"
        image.style.display="none"
        description.appendChild(p)
    }else if(gezegen == "earth"){
        p.innerHTML=`Girdiğin kütlenin dünyadaki ağırlığı <br><span>${hesapla(gezegen,kg)}</span>`
        image.style.display="block"
       
        description.append(p)
        img.setAttribute("src","./img/earth.png")
    }else if(gezegen == "jupiter"){
        p.innerHTML=`Girdiğin kütlenin jupiterdeki ağırlığı <br><span>${hesapla(gezegen,kg)}</span>`
        image.style.display="block"
      
        description.append(p)
        img.setAttribute("src","./img/jupiter.png")
    }else if(gezegen == "mars"){
        p.innerHTML=`Girdiğin kütlenin marstaki ağırlığı <br><span>${hesapla(gezegen,kg)}</span>`
        image.style.display="block"
        description.append(p)
        img.setAttribute("src","./img/mars.png")
    }else if(gezegen == "mercury"){
        p.innerHTML=`Girdiğin kütlenin merkürdeki ağırlığı <br><span>${hesapla(gezegen,kg)}</span>`
        image.style.display="block"
        description.append(p)
        img.setAttribute("src","./img/mercury.png")
    }else if(gezegen == "moon"){
        p.innerHTML=`Girdiğin kütlenin aydaki ağırlığı <br><span>${hesapla(gezegen,kg)}</span>`
        image.style.display="block"
        description.append(p)
        img.setAttribute("src","./img/moon.png")
    }else if(gezegen == "neptune"){
        p.innerHTML=`Girdiğin kütlenin neptündeki ağırlığı <br><span>${hesapla(gezegen,kg)}</span>`
        image.style.display="block"
        description.append(p)
        img.setAttribute("src","./img/neptune.png")
    }else if(gezegen == "pluto"){
        p.innerHTML=`Girdiğin kütlenin plutondaki ağırlığı <br><span>${hesapla(gezegen,kg)}</span>`
        image.style.display="block"
        description.append(p)
        img.setAttribute("src","./img/pluto.png")
    }else if(gezegen == "saturn"){
        p.innerHTML=`Girdiğin kütlenin saturndeki ağırlığı <br><span>${hesapla(gezegen,kg)}</span>`
        image.style.display="block"
        description.append(p)
        img.setAttribute("src","./img/saturn.png")
    }else if(gezegen == "uranus"){
        p.innerHTML=`Girdiğin kütlenin uranüsteki ağırlığı <br><span>${hesapla(gezegen,kg)}</span>`
        image.style.display="block"
        description.append(p)
        img.setAttribute("src","./img/uranus.png")
    }else if(gezegen == "venus"){
        p.innerHTML=`Girdiğin kütlenin venusdeki ağırlığı <br><span>${hesapla(gezegen,kg)}</span>`
        image.style.display="block"
        description.append(p)
        img.setAttribute("src","./img/venus.png")
    }

})




const hesapla = (gezgen,kütle) =>{
    if(gezgen=="earth"){
       return (kütle * 9.81).toFixed(2)
    }else if(gezgen=="mars"){
       return (kütle*3.711).toFixed(2)
    }else if(gezgen=="jupiter"){
       return (kütle*24.79).toFixed(2)
    }else if(gezgen=="mercury"){
       return (kütle*3.7).toFixed(2)
    }else if(gezgen=="moon"){
       return (kütle*1.62).toFixed(2)
    }else if(gezgen=="neptune"){
       return (kütle*11.15).toFixed(2)
    }else if(gezgen=="pluto"){
       return (kütle*0.62).toFixed(2)
    }else if(gezgen=="saturn"){
       return (kütle*10.44).toFixed(2)
    }else if(gezgen=="venus"){
       return (kütle*8.87).toFixed(2)
    }else if(gezgen=="uranus"){
       return (kütle*8.87).toFixed(2)
    }
    
} 