 function loadFile () {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  }

let Name  = promp('Enter your name')
document.getElementById('name').innerHTML = Name

let Country = promp('Enter Your Country')
document.getElementById('country').innerHTML = Country
 
let Following = promp('Enter Your Following '+"(◕‿◕)")
document.getElementById('count').innerHTML = Following