document.addEventListener('DOMContentLoaded', function () {
    
    const cb = function(el, isIntersecting){
        if(isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.animate-title', cb);
// text-animation.jsに以下のコードをカット＆ペースト
// してファイル分割をしましょう。
// const els = document.querySelectorAll('.animate-title');
// const cb = function(entries, observer) {
//     entries.forEach(entry => {
//     if(entry.isIntersecting) {
//         // const ta = new TextAnimation(entry.target);
//         // ta.animate();
//         observer.unobserve(entry.target);
//     } else {
//     }
//     });
// };
    // const options = {
    // root: null,
    // rootMargin: "-300px 0px",
    // threshold: 0,
    // };
});

class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelector(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true,
            };
            this.cb = cb;
            this.options = Object.assign(defaultOptions, options);
            this.once = this.options.once;
            this._init();
    }
    _init(){
        const callback = function(entries, observer) {
            entries.forEach(entry => {
            if(entry.isIntersecting) {
                this.cb(entry.target, true);
                if(this.once) {
                    observer.unobserve(entry.target);
                }
            } else {
                this.cb(entry.target, false);
            }
        });
    }; 

            this.io = new IntersectionObserver(callback.bind(this), this.options);
            this.els.forEach(el => io.observe(el));        
    }

    destroy() {
        this.io.disconnect();
    }
}