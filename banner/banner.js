




function bannerLoop(elem) {

    const $el = document.querySelector(elem);
    const $items = $el.children;
    const count = $el.children.length - 1;
    let state = 0;
    $items[state].classList.add('active');



    const loop = () => {
        
        for (const span of $el.querySelectorAll('[data-hide]')){
            span.classList.remove('hidden');
        }

        $items[state].classList.remove('active');
        count <= state ? state = 0 : state++;
        $items[state].classList.add('active');

        for (const span of $items[state].querySelectorAll('[data-hide]')){
            setTimeout(() => span.classList.add('hidden'), span.dataset.hide);
        }

        setTimeout(() => loop(), $items[state].dataset.play || 5000);
    };

    setTimeout(() => loop(), $items[state].dataset.play || 5000);

};


bannerLoop('.js-banner-1');