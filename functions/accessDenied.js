export function accessDeniedWebSite() {
    const accessDeniedWBComponent = {
        Style: `
            @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
            
            body {
                background-color: black;
            }
            
            .bi-cone-striped {
                position: absolute;
                left: 50%;
                top: 20%;
                transform: translate(-50%, -50%);
                color: red;
                font-size: 230px;
            }
            
            .title, .description {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                color: #fff;
                font-family: 'Poppins', sans-serif;
                width: 90%; 
                text-align: center; 
            }
            
            .title {
                top: 37%;
                font-size: 2em; 
            }
            
            .description {
                top: 44%;
                font-size: 1.2em; 
            }
            
            
            @media screen and (max-width: 768px) {
                .title {
                    font-size: 1.5em; 
                }
            
                .description {
                    top: 47%;
                    font-size: 0.9em; 
                }
            }
        `,
        Html: `
            <i class="bi bi-cone-striped"></i>
            <h1 class="title">Errore | Accesso all'ApiD Negato | Blocco Sito Web</h1>
            <p class="description">Contattare il Propietario di ApiD | Danilo Giannotta</p>
        `
    }
    var styleElement = document.createElement('style');
    styleElement.textContent = accessDeniedWBComponent.Style;
    document.head.appendChild(styleElement);
    document.body.innerHTML = accessDeniedWBComponent.Html;
    document.title = "Errore | Accesso all'ApiD Negato | Blocco Sito Web";
}