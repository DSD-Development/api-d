var timer;
var inactivityLimit = 2 * 60 * 1000; 

function resetTimer() {
      clearTimeout(timer);
      timer = setTimeout(function() {
            location.reload();
      }, inactivityLimit);
}

export function antiAfk() {
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keydown', resetTimer);
    document.addEventListener('scroll', resetTimer);
}
