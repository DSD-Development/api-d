export function startProtection(siteName) {
    document.oncontextmenu = function() {return false;};
    window.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === "s") {event.preventDefault();}
        if (event.ctrlKey && event.shiftKey && event.key === "I") {event.preventDefault();}
        if (event.key === "F12") {event.preventDefault();}
    });
    console.log('%c' + siteName + ' | Protezione Applicata', 'font-family: Poppins; font-size: 12px;');
}