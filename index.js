// Animaçao da pagina
AOS.init();

//Evento do botao para abrir whatasapp
const buttonsWpp = document.querySelectorAll("#whatsapp");

buttonsWpp.forEach(button => {
  button.addEventListener("click", function() {
    window.open("https://api.whatsapp.com/send?phone=5548991781573&text=Quero%20fazer%20um%20agendamento%20hoje!", "_blank");
  });
});


   // Função que irá trocar a mensagem do h2
   function SuccessMessage() {
    var heading = document.getElementById("schedule-heading");
    heading.innerText = "Mensagem enviada.";
    heading.style.color = "yellow";
  }