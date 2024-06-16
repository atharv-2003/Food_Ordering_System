let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}


function SendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    foodName: document.getElementById("foodName").value,
    address: document.getElementById("address").value,
  };

  const serviceID = "service_sp8y90l";
  const templateID = "template_msjswlt";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("foodName").value = "";
        document.getElementById("address").value = "";
        console.log(res);
        alert("Thank You For your order! Your support is very appriciated")

    })
    .catch(err=>console.log(err));

}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();
