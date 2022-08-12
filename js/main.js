class Slider {

    constructor(elem) {
        this.$elem = document.querySelector(elem);
        this.$elemContainer = this.$elem.querySelector('.slider-container');
        this.$slides = this.$elemContainer.children;
        this.slidesCount = this.$slides.length - 1;

        this.translate = 0;

        this.$prev = this.$elem.querySelector('.prev');
        this.$next = this.$elem.querySelector('.next');

        this.updateTranslate(this.translate);


        this.$prev.addEventListener('click', this.prev);
        this.$next.addEventListener('click', this.next);
    }

    prev = () => {
        if (this.translate == 0 || this.translate < 0) {
            this.translate = this.slidesCount;
        }
        else if (this.translate > 0 && this.translate <= this.slidesCount) {
            this.translate = this.translate - 1;
        }
        else if (this.translate == this.slidesCount) {
            this.translate = 0;
        }
        this.updateTranslate();
    }

    next = () => {
        if (this.translate >= this.slidesCount) {
            this.translate = 0;
        }
        else if (this.translate < this.slidesCount) {
            this.translate = this.translate + 1;
        }
        this.updateTranslate();
    }
    updateTranslate = () => {
        this.$elemContainer.style.transform = 'translateX(-' + this.translate * 100 + '%)';
    };

};



const firstSlider = new Slider('.slider');


const swiper = new Swiper('.slider-collections', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 4,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
});



tippy('[data-tippy-content]', {
    
})
