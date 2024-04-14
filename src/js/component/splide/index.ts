import Splide, { Options } from '@splidejs/splide';

export const mainSplide = (): void => {
    const targets = document.querySelectorAll('.js-mainslide') as NodeListOf<HTMLElement>;
    if (!targets) return;
    const options: Options = {
        type: 'loop',
        perPage: 1,
        arrows: false,
        autoplay: true,
        interval: 5000,
        speed: 1000,
        pagination: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        classes: {
            pagination: 'splide__pagination splide_dot',
        },
    };
    targets.forEach((target) => {
        const mySplide = new Splide(target, options);
        mySplide.mount();
    });
};

export const primarySplide = (): void => {
    const targets = document.querySelectorAll('.js-primary-slide');
    if (!targets.length) return;
    
    const options: Options = {
        type: 'loop',
        padding: '12.5%',
        gap: 33,
        arrows: true,
        autoplay: true,
        interval: 5000,
        speed: 1000,
        pagination: false,
        breakpoints: {
            767: {
                destroy: true,
            },
        },
    };


    const adjustArrows = (splide: Splide): void => {
        // アクティブなスライドの画像の高さを取得します。
        const activeSlideImg = splide.root.querySelector('.splide__slide.is-active img') as HTMLImageElement;
        if (!activeSlideImg) return;
        
          //margin-topの40pxを追加
        const imgHeight = activeSlideImg.clientHeight + 40;
        const arrows = splide.root.querySelectorAll('.splide__arrow');
        
        arrows.forEach((arrow) => {
            const arrowHeight = (arrow as HTMLElement).clientHeight;
            (arrow as HTMLElement).style.top = `${(imgHeight / 2) - (arrowHeight / 2)}px`;
        });
    };

    targets.forEach((target) => {
        const splide = new Splide(target as HTMLElement, options);
        splide.mount();

        // 最初の画像が読み込まれた後に矢印の位置を調整
        const firstImage = target.querySelector('img') as HTMLImageElement;
        if (firstImage.complete) {
            // 画像が既に読み込まれている場合は直ちに調整
            adjustArrows(splide);
        } else {
            // 画像の読み込みを待ってから調整
            firstImage.addEventListener('load', () => adjustArrows(splide));
        }

        splide.on('mounted move', () => adjustArrows(splide));
    });

    window.addEventListener('resize', () => {
        targets.forEach(target => {
            const splide = new Splide(target as HTMLElement);
            adjustArrows(splide);
        });
    });
};

export const secondarySplide = (): void => {
    const targets = document.querySelectorAll('.js-secondary-slide') as NodeListOf<HTMLElement>;
    if (!targets) return;
    const options: Options = {
        type: 'loop',
        padding: '18.5%',
        gap: 33,
        arrows: true,
        autoplay: true,
        interval: 5000,
        speed: 1000,
        pagination: false,
        breakpoints: {
            767: {
                destroy: true,
                label: 'My Gallery',
            },
        },
    };
    const adjustArrows = (splide: Splide): void => {
        // アクティブなスライドの画像の高さを取得します。
        const activeSlideImg = splide.root.querySelector('.splide__slide.is-active img') as HTMLImageElement;
        if (!activeSlideImg) return;
        
          //margin-topの40pxを追加
        const imgHeight = activeSlideImg.clientHeight + 40;
        const arrows = splide.root.querySelectorAll('.splide__arrow');
        
        arrows.forEach((arrow) => {
            const arrowHeight = (arrow as HTMLElement).clientHeight;
            (arrow as HTMLElement).style.top = `${(imgHeight / 2) - (arrowHeight / 2)}px`;
        });
    };

    targets.forEach((target) => {
        const splide = new Splide(target as HTMLElement, options);
        splide.mount();

        // 最初の画像が読み込まれた後に矢印の位置を調整
        const firstImage = target.querySelector('img') as HTMLImageElement;
        if (firstImage.complete) {
            // 画像が既に読み込まれている場合は直ちに調整
            adjustArrows(splide);
        } else {
            // 画像の読み込みを待ってから調整
            firstImage.addEventListener('load', () => adjustArrows(splide));
        }

        splide.on('mounted move', () => adjustArrows(splide));
    });


    window.addEventListener('resize', () => {
        targets.forEach(target => {
            const splide = new Splide(target as HTMLElement);
            adjustArrows(splide);
        });
    });
};

export const tertiarySplide = (): void => {
    const targets = document.querySelectorAll('.js-tertiary-slide') as NodeListOf<HTMLElement>;
    if (!targets) return;
    const options: Options = {
        type: 'loop',
        padding: '29.5%',
        gap: 33,
        arrows: true,
        autoplay: true,
        interval: 5000,
        speed: 1000,
        pagination: false,
        breakpoints: {
            767: {
                destroy: true,
                label: 'My Gallery',
            },
        },
    };
    const adjustArrows = (splide: Splide): void => {
        // アクティブなスライドの画像の高さを取得します。
        const activeSlideImg = splide.root.querySelector('.splide__slide.is-active img') as HTMLImageElement;
        if (!activeSlideImg) return;
        
        //margin-topの40pxを追加
        const imgHeight = activeSlideImg.clientHeight + 40;
        const arrows = splide.root.querySelectorAll('.splide__arrow');
        
        arrows.forEach((arrow) => {
            const arrowHeight = (arrow as HTMLElement).clientHeight;
            (arrow as HTMLElement).style.top = `${(imgHeight / 2) - (arrowHeight / 2)}px`;
        });
    };

    targets.forEach((target) => {
        const splide = new Splide(target as HTMLElement, options);
        splide.mount();

        // 最初の画像が読み込まれた後に矢印の位置を調整
        const firstImage = target.querySelector('img') as HTMLImageElement;
        if (firstImage.complete) {
            // 画像が既に読み込まれている場合は直ちに調整
            adjustArrows(splide);
        } else {
            // 画像の読み込みを待ってから調整
            firstImage.addEventListener('load', () => adjustArrows(splide));
        }

        splide.on('mounted move', () => adjustArrows(splide));
    });

    window.addEventListener('resize', () => {
        targets.forEach(target => {
            const splide = new Splide(target as HTMLElement);
            adjustArrows(splide);
        });
    });
};

export const posterSplide = (): void => {
    const targets = document.querySelectorAll('.js-poster-slide') as NodeListOf<HTMLElement>;
    if (!targets) return;
    const options: Options = {
        type: 'loop',
        gap: 33,
        autoplay: true,
        interval: 5000,
        speed: 1000,
        pagination: true,
        fixedWidth: 280,
        perMove: 1,
        classes: {
            pagination: 'splide__pagination splide_dot',
        },
        breakpoints: {
            767: {
                destroy: true,
                label: 'My Gallery',
            },
        },
    };
    targets.forEach((target) => {
        const mySplide = new Splide(target, options);
        mySplide.on('pagination:mounted', function (data) {
            // ULエレメントにカスタムクラスを追加
            data.list.classList.add('splide__pagination--custom');

            // 総スライド数を取得
            const totalSlides = mySplide.length;

            // 各ページネーション項目のテキストを設定
            data.items.forEach(function (item, index) {
                // 現在のページ番号（1から始まるように調整）
                const currentPage = index + 1;
                // ページ番号と総ページ数を使用してテキストを設定
                item.button.textContent = `${currentPage}/${totalSlides}`;
            });
        });

        mySplide.mount();
    });
};

export const gallerySplide = (): void => {
    const targets = document.querySelectorAll('.js-gallery-slide') as NodeListOf<HTMLElement>;
    if (!targets) return;
    const options: Options = {
        type: 'loop',
        padding: '18.5%',
        gap: 33,
        arrows: false,
        autoplay: true,
        interval: 5000,
        speed: 1000,
        pagination: true,
        breakpoints: {
            767: {
                padding: '10%',
                gap: 16,
            },
        },
    };
    targets.forEach((target) => {
        const mySplide = new Splide(target, options);
        mySplide.mount();
    });
};

export const movieListSplide = (): void => {
    const targets = document.querySelectorAll('.js-movie-list') as NodeListOf<HTMLElement>;
    if (!targets) return;
    const options: Options = {
        type: 'loop',
        gap: 30,
        padding: '10%',
        autoplay: true,
        interval: 5000,
        speed: 1000,
        pagination: true,
        arrows: false,
        destroy: true,
        breakpoints: {
            767: {
                destroy: false,
                label: 'My Gallery',
            },
        },
    };
    targets.forEach((target) => {
        const mySplide = new Splide(target, options);
        mySplide.mount();
    });
}