function adjustStylesForMobile(mobile) {
    const imgContact = document.getElementById("imgContact");
    const textContact = document.getElementById("textContact");
    if (mobile) {
        imgContact.className = "col-md-6 order-2 align-self-center mt-5 mt-md-0";
        textContact.className = "col-md-6 order-1 align-self-center mt-4 mt-md-0";
    } else {
        imgContact.className = "col-md-6 order-2 align-self-center";
        textContact.className = "col-md-6 order-1 align-self-center";
    }
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) ? 'is-valid' : 'is-invalid';
}

function notificationWebSite(text) {
    const notificationDiv = document.getElementById("notificationWeb");
    const notificationText = document.getElementById("notificationText");
    const btNotifyDiv = bootstrap.Toast.getOrCreateInstance(notificationDiv);
    btNotifyDiv.show();
    notificationText.innerHTML = text;
}

const emailInput = document.getElementById("emailInput");
const message_emailInput = document.getElementById("message_emailInput");
const btnEmailSend = document.getElementById("btnSendEmail");
setInterval(() => {
    const emailInput = document.getElementById("emailInput");
    var emailValueIsValid = isValidEmail(emailInput.value);
    if (emailInput.value != "") {
        emailInput.className = "form-control " + emailValueIsValid;
    } else {
        emailInput.className = "form-control"
    }
}, 1000)

btnEmailSend.addEventListener("click", function () {
    var emailValueIsValid = isValidEmail(emailInput.value);
    if (emailValueIsValid == 'is-valid') {
        emailjs.send("service_umzj1zl", "template_q855jlm", {
            my_email: "danilo.giannotta.2009@gmail.com",
            message: message_emailInput.value,
            reply_to: emailInput.value,
        })
        .then(() => {
            notificationWebSite("Email Inviata Correttamente, Controlla la Tua Posta.")
        })
        .catch(() => {
            notificationWebSite("Errore: Invio dell'email Non Riuscito, Riprovare.")
        })
    } else {
        notificationWebSite("Email non Valida!")
    }
})

adjustStylesForMobile(window.matchMedia('(max-width: 767px)').matches);
window.addEventListener('resize', function () { adjustStylesForMobile(window.matchMedia('(max-width: 767px)').matches); });
document.oncontextmenu = function () { return false; };
document.onkeydown = function(event) {
    if (event.keyCode == 123 || (event.ctrlKey && event.shiftKey && (event.keyCode == 'I'.charCodeAt(0) || event.keyCode == 'C'.charCodeAt(0) || event.keyCode == 'J'.charCodeAt(0))) || (event.ctrlKey && event.keyCode == 'U'.charCodeAt(0))) {
        return false;
    }
};