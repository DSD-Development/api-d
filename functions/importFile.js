export function importScript(type, crossOR, src) {
    const script = document.createElement('script');
    script.src = src;
    script.type = type;
    if (crossOR != "") {script.crossOrigin = crossOR;}
    document.body.appendChild(script);
}