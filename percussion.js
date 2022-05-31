let keys = document.querySelectorAll('.key');

keys.forEach(key => {
 key.addEventListener('click', playNote);
});

function playNote(e) {
 let key = e.target;
 let note = document.getElementById(key.dataset.note);
 key.classList.add('active');
 note.currentTime = 0;
 note.play();
 note.addEventListener('ended',() => {
  key.classList.remove('active');
 });
}
$(document).ready(function(){
    $("#submit").click(function(){
      var name=$("#whom").val();
      var phone=$("#phone").val();
      var city=$("#city").val();
      var address=$("#address").val();
      if(name == ""){
        alert("Enter the name");
      }
      else if(phone.length<11){
        alert("Enter the correct phone with 8 and other 10 numbers");
      }
      else if(city ==""){
        alert("Enter the city name");
      }
      else if (address=="") {
        alert("Enter the your address")
      }
      else{
       alert("Hello "+ name +" .Your phone number is "+ phone + " So we will send your order on "+ city +" city , " + address);
      }
      window.location.href="Percussion.html";
    })
})
