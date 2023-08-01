// Animaçao da pagina
AOS.init();

//Evento do botao para abrir whatasapp
const buttonsWpp = document.querySelectorAll("#whatsapp");

buttonsWpp.forEach(button => {
  button.addEventListener("click", function() {
    window.open("https://api.whatsapp.com/send?phone=5548991781573&text=Quero%20fazer%20um%20agendamento%20hoje!", "_blank");
  });
});


  // Função que irá mostrar a mensagem de sucesso no envio
  function showSuccessMessage() {
    document.getElementById("scheduleForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
    document.querySelector(".schedule-description h2").innerText = "Mensagem enviada";
  }

  document.getElementById("scheduleForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    showSuccessMessage(); // Mostra a mensagem de sucesso
  });