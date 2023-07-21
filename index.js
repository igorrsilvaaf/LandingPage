// Animaçao da pagina
AOS.init();

//Evento do botao para abrir whatasapp
const buttonsWpp = document.querySelectorAll("#whatsapp");

buttonsWpp.forEach(button => {
  button.addEventListener("click", function() {
    window.location.href = "https://api.whatsapp.com/send?phone=5511000000000&text=Quero%20fazer%20um%20agendamento%20hoje!";
  });
});