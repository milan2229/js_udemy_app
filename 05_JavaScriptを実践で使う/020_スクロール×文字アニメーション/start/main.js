document.addEventListener('DOMContentLoaded', function () {
    
// text-animation.jsに以下のコードをカット＆ペースト
// してファイル分割をしましょう。
const els = document.querySelectorAll('.animate-title');
const cb = function(entries, observer) {
    entries.forEach(entry => {
    if(entry.isIntersecting) {
        const ta = new TextAnimation(entry.target);
        ta.animate();
        observer.unobserve(entry.target);
    } else {
    }
    });
  // alert('intersecting');

}
    const option = {
    root: null,
    rootMargin: "-300px 0px",
    threshold: 0,
    };
    const io = new IntersectionObserver(cb);
    els.forEach(el => io.observe(el));

});