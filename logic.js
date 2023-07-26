

// --------------------hamburger----------------------
     function phone_menu() {
      document.getElementById('menu').classList.toggle('icon');   
      document.querySelector('.visible').classList.toggle('visibility');
      document.getElementById('phone').classList.toggle('change');
  }

// ---------------- card slider logic --------------------------
var slider =document.getElementById('slider');
var items=slider.getElementsByClassName('item');

function prev(){
slider.prepend(items[items.length-1]);
}
function next(){
 slider.append(items[0]);
}


//---------------------- smtp  js to receive contact information

function send_email(){
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ashishgc8077@gmail.com",
    Password : "D8BEDC7EB57D8101E109F5EC1221450F64A2",
    To : 'ashishgc8077@gmail.com',
    From : document.getElementById('contact_email').value,
    Subject : "Contact Me",
    Body : "Name :"+ document.getElementById('contact_name').value +
        "<br> Email :" + document.getElementById('contact_email').value +
        "<br> Project :" + document.getElementById('contact_project').value +
        "<br> Message :" + document.getElementById('contact_message').value

}).then(
  message => alert(message)
);
}

// -------------------------------Dark/white theme

var icon=document.querySelector(".icon");

function theme(){
  document.body.classList.toggle('dark_theme');
  if(document.body.classList.contains("dark_theme")){
    icon.className="fa-sharp fa-solid fa-sun icon";
    console.log(icon);
  }
  else{
icon.className="fa-regular fa-moon  icon";
console.log(icon)
  }
}
  


// ---------------------------------------slide to top

var home=document.querySelector("#home");
function slidetop(){
  home.scrollIntoView({behavior:"smooth"});
}



