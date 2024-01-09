var timer;
var inactivityLimit = 11000; 

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
