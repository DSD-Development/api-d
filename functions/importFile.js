export function importScript(type, crossOR, src) {
    const script = document.createElement('script');
    script.src = src;
    script.type = type;
    if (crossOR != "") {script.crossOrigin = crossOR;}
    document.body.appendChild(script);
}

export function createAndImportLink(crossOR, int, rel, href) {
    const importLink = document.createElement('link');
    importLink.href = href;
    importLink.rel = rel;
    importLink.integrity = int;
    if (crossOR != "") {importLink.crossOrigin = crossOR;};
    document.head.appendChild(importLink);
}
