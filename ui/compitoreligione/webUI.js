window.addEventListener("DOMContentLoaded", () => {document.title = "Compito Religione | Danilo, Lavinia e Donia | " + new Date().getFullYear() + ""});
setInterval(() => {
    if (document.getElementById("button1")) {
        const btn1 = document.getElementById("button1"), btn2 = document.getElementById("button2"), btn3 = document.getElementById("button3"), btn4 = document.getElementById("button4"), btn5 = document.getElementById("button5"), btn6 = document.getElementById("button6"), btn7 = document.getElementById("button7"), btn8 = document.getElementById("button8"), btn9 = document.getElementById("button9"), btn10 = document.getElementById("button10"), btn11 = document.getElementById("button11"), btn12 = document.getElementById("button12"), btn13 = document.getElementById("button13"), btn14 = document.getElementById("button14"), btn15 = document.getElementById("button15");
        const ContainerFrase = document.getElementById("textfrase");
        const Config = {
            [1]: '"Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo." - Albert Schweitzer',
            [2]: '"Il fallimento è il trampolino di lancio per il successo." - Mary Kay Ash',
            [3]: '"La meraviglia è il principio di tutte le conoscenze." - Leonardo da Vinci',
            [4]: '"Le piccole cose sono ciò che rendono la vita grande." - John Wooden',
            [5]: '"Anche nel buio più profondo, c\'è sempre una luce che brilla." - Martin Luther King Jr.',
            [6]: '"Il tempo è il nostro bene più prezioso. Usa ogni momento per costruire il tuo futuro." - Sophia Loren',
            [7]: '"Le amicizie sincere durano per sempre." - Cicero',
            [8]: '"I sogni sono le stelle della tua mappa per il futuro. Segui le stelle e raggiungerai il tuo destino." - Harriet Tubman',
            [9]: '"Anche quando ti senti solo, ricorda che sei il protagonista della tua storia." - Debasish Mridha',
            [10]: '"Chiedere aiuto non è un segno di debolezza, ma di coraggio." - Barack Obama',
            [11]: '"Il coraggio non è l\'assenza di paura, ma la capacità di agire nonostante la paura." - Ambrose Redmoon',
            [12]: '"La paura è solo un\'illusione. Affrontala e scoprirai quanto sia potente il tuo coraggio." - Sconosciuto',
            [13]: '"L\'umiltà è la base della crescita personale. Ricorda sempre da dove vieni." - Rick Warren',
            [14]: '"Sorridi di fronte alle sfide, perché ogni problema è un\'opportunità travestita." - Sconosciuto',
            [15]: '"Siamo tutti protagonisti delle nostre storie. Scrivi la tua storia con determinazione e passione." - Mel Robbins',
        }
        
        btn1.addEventListener("click", () => {ContainerFrase.innerText = Config[1];})
        btn2.addEventListener("click", () => {ContainerFrase.innerText = Config[2];})
        btn3.addEventListener("click", () => {ContainerFrase.innerText = Config[3];})
        btn4.addEventListener("click", () => {ContainerFrase.innerText = Config[4];})
        btn5.addEventListener("click", () => {ContainerFrase.innerText = Config[5];})
        btn6.addEventListener("click", () => {ContainerFrase.innerText = Config[6];})
        btn7.addEventListener("click", () => {ContainerFrase.innerText = Config[7];})
        btn8.addEventListener("click", () => {ContainerFrase.innerText = Config[8];})
        btn9.addEventListener("click", () => {ContainerFrase.innerText = Config[9];})
        btn10.addEventListener("click", () => {ContainerFrase.innerText = Config[10];})
        btn11.addEventListener("click", () => {ContainerFrase.innerText = Config[11];})
        btn12.addEventListener("click", () => {ContainerFrase.innerText = Config[12];})
        btn13.addEventListener("click", () => {ContainerFrase.innerText = Config[13];})
        btn14.addEventListener("click", () => {ContainerFrase.innerText = Config[14];})
        btn15.addEventListener("click", () => {ContainerFrase.innerText = Config[15];})
    }
}, 1000);
