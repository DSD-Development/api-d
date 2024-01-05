export const WebComponent = {
    "00001": { // Sito Web Danilo
        Style: `
            * {
                user-select: none;
                cursor: url(../img/cursor.png), default;
            }
            
            body {
                background-image: url(../img/background.jpg);
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                object-fit: cover;
                overflow-x: hidden;
            }
            
            html {
                scroll-behavior: smooth;
            }
            
            ::-webkit-scrollbar {
                display: none;
            }
            
            .bgMenuLat {
                background-color: rgb(0, 0, 0);
            }
            
            .bgTwo {
                background-image: url(../img/background2.png);
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                object-fit: cover;
            }
            
            .btnSendEmail {
                width: 100%;
                height: 30px;
                background-color: rgb(116, 116, 116);
                border: none;
                border-radius: 25px;
                color: #fff;
                font-size: 18px;
                font-weight: 700;
            }
            
            .copyright {
                position: relative;
                width: 100%;
                height: 200px;
                background-color: black;
            }
            
            .copyright img {
                position: absolute;
                left: 25%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 240px;
            }
            
            .copyright .text1 {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                font-size: 20px;
                color: #fff;
            }
            
            .copyright .text2 {
                position: absolute;
                left: 75%;
                top: 50%;
                transform: translate(-50%, -50%);
                font-size: 15px;
                color: #fff;
                white-space: nowrap;
            }
            
            .copyright .text2 a {
                text-decoration: none;
                color: gray;
            }
            
            @media (max-width: 1300px) {
                .copyright {
                    position: static;
                    height: 160px;
                    text-align: center;
                }
            
                .copyright img {
                    position: static;
                    left: auto;
                    transform: none;
                    width: 120px;
                    margin-top: 30px;
                }
            
                .copyright .text1 {
                    position: static;
                    left: auto;
                    top: auto;
                    transform: none;
                    font-size: 14px; 
                    margin-top: 20px;
                }
            
                .copyright .text2 {
                    position: static;
                    left: auto;
                    top: auto;
                    transform: none;
                    font-size: 10px; 
                }
            
                .copyright .text2 a {
                    text-decoration: underline;
                    color: gray;
                }
            }
        `,
        Html: `
            <div class="container-fluid position-absolute" id="fuochiArtificio" style="height: 100vh;"></div>

            <nav class="navbar navbar-expand-lg sticky-top navbar-dark">
                <div class="container-fluid mt-3" style="width: 90%;">
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/img/scritta.png" width="170" height="60" class="d-inline-block align-top">
                    </a>
                    <button class="navbar-toggler" id="btnOpenMenu"
                        style="border: 2px solid white; background-color: rgba(0, 0, 0, 0.781);" type="button"
                        data-bs-toggle="collapse" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars" style="color: #fff; font-size: 30px;"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active fw-bold" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fw-bold" href="#chisi">Chi Sono?</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active fw-bold" href="#contact">Contattami</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="container-fluid" style="height: 85vh;">
                <div class="container" style="margin-top: 120px;">
                    <div class="row">
                        <div class="col-12 col-md-6 order-md-1">
                            <h1 class="text-center text-md-start text-white fw-bold" style="font-size: 50px;">Danilo
                                Giannotta <br><span id="typed-text"></span></h1>
                            <p class="text-center text-md-start mt-4" style="color: rgb(189, 189, 189);">Mi chiamo Danilo, e
                                sin da quando ho ricevuto il mio primo computer, ho avuto una passione innata per la
                                tecnologia e la programmazione. Fin da giovane, ho trascorso innumerevoli ore a immergermi
                                nel mondo dei codici e degli algoritmi, affascinato dal modo in cui possono dare vita a
                                straordinari siti web.</p>
                        </div>
                        <div class="col-12 col-md-6 order-md-2">
                            <img src="assets/img/programmer.svg" class="img-fluid custom-image">
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid bg-black" style="margin-top: 200px; height: auto;">
                <div class="container" id="chisi">
                    <div class="row" style="padding: 30px;">
                        <div class="col-12 col-md-6 order-md-2 align-self-center" id="chisiimg" style="margin-top: 50px;">
                            <img src="assets/img/htmlcss.svg" class="img-fluid float-md-end" width="500">
                        </div>
                        <div class="col-12 col-md-6 order-md-1 align-self-center" style="margin-top: 50px;">
                            <h2 class="fw-bold text-white">Chi Sono?</h2>
                            <p class="text-center text-md-start mt-3" id="chisitext" style="color: rgb(189, 189, 189);">
                                Il mio approccio si basa su una combinazione di creatività, conoscenza tecnica e attenzione
                                ai dettagli. Mi impegno a comprendere appieno le esigenze e gli obiettivi di ogni cliente,
                                in modo da creare un sito web che rispecchi la loro identità e che sia in linea con i valori
                                del loro marchio. Utilizzo le ultime tecnologie e strumenti per garantire un'esperienza di
                                navigazione intuitiva e coinvolgente per gli utenti. Dal design moderno e accattivante
                                all'ottimizzazione per i motori di ricerca, mi assicuro che ogni aspetto del sito sia curato
                                al massimo livello.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid bgTwo" style="min-height: 100vh">
                <div class="container" id="contact">
                    <div class="row">
                        <div class="col-md-6 order-2 align-self-center" id="imgContact" style="margin-top: 200px;">
                            <img src="assets/img/email.svg" class="img-fluid mx-auto d-block" style="max-width: 100%;">
                        </div>
                        <div class="col-md-6 order-1 align-self-center" id="textContact" style="margin-top: 200px;">
                            <h1 class="fw-bold text-white">Contattami</h1>
                            <p class="text-white mt-4">Hai Bisogno di un Sito Web a Basso Costo?<br>
                                Se mi Contatti da Qui avrai il 30% di Sconto!<br>
                                Cosa Aspetti?!
                            </p>
                            <form>
                                <div class="form-floating mt-4">
                                    <input type="text" class="form-control" id="emailInput" placeholder="name@gmail.com"
                                        required>
                                    <label for="emailInput">Email</label>
                                </div>
                                <br>
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="message_emailInput"
                                        style="height: 100px"></textarea>
                                    <label for="message_emailInput">Messaggio</label>
                                </div>
                                <button class="mt-3 btnSendEmail" id="btnSendEmail" type="button"><i
                                        class="fa-solid fa-paper-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="copyright">
                <img src="assets/img/scritta.png" class="logoFot">
                <p class="text1">Tutti i Diritti sono Riservati</p>
                <p class="text2">Created and Developed by Danilo Giannotta</p>
            </div>

            <div class="offcanvas offcanvas-end bgMenuLat" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <i class="fa-solid fa-arrow-left" data-bs-toggle="collapse" data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation" id="menuArrow"
                        style="color: #fff; font-size: 30px; cursor: pointer;"></i>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav text-center">
                        <li class="nav-item">
                            <a class="nav-link active fw-bold text-white" href="#">
                                <img src="assets/img/scritta.png" class="img-fluid">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fw-bold text-white" style="font-size: 40px;" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fw-bold text-white" style="font-size: 40px;" href="#chisi">Chi Sono?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fw-bold text-white" style="font-size: 40px;"
                                href="#contact">Contattami</a>
                        </li>
                        <br>
                        <li class="nav-item">
                            <p class="nav-link text-white" href="#">
                                <script>document.write("© Copyright " + new Date().getFullYear() + " | Danilo Giannotta")</script>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="toast-container position-fixed bottom-0 end-0 p-3" data-bs-theme="dark">
                <div id="notificationWeb" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <img src="assets/img/scritta.png" class="rounded me-2 img-fluid" width="50">
                        <strong class="me-auto text-white">| Notifica</strong>
                    </div>
                    <div class="toast-body text-white" id="notificationText"></div>
                </div>
            </div>
        `
    }
}