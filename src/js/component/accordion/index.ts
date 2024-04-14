import { slideToggle } from '../Utils/utils';

export const accordion = () => {
    // .js-accordion-wrap 要素のリストを取得
    const accordionWrappers = document.querySelectorAll('.js-accordion-wrap');

    accordionWrappers.forEach((accordionWrapper) => {
        // 各アコーディオンラッパー内のタイトルとコンテンツを取得
        const button = accordionWrapper.querySelector('.js-accordion-title');
        const container = accordionWrapper.querySelector('.js-accordion-content');

        // ボタンが存在する場合、クリックイベントを設定
        if (button) {
            button.addEventListener('click', () => {
                button.classList.toggle('is-open');
                slideToggle(container);
            });
        }
    });

    // recruit_infoページのmoreボタン
    const recruitInfoMoreAccordion = document.querySelector('.js-recruit_info-more-accordion-wrap');
    const recruitInfoMoreContent = recruitInfoMoreAccordion?.querySelector('.js-recruit_info-more-accordion-content');
    const recruitInfoMoreButton = recruitInfoMoreAccordion?.querySelector('.js-recruit_info-more-accordion-button');

    recruitInfoMoreButton?.addEventListener('click', ()=>{
        recruitInfoMoreButton.classList.toggle('is-open');
        slideToggle(recruitInfoMoreContent);
    })
};

export const movieModalAccordion = (): void => {
    const isSp: boolean = window.innerWidth < 768;
    if (!isSp) return;
    const modalAccordion: NodeListOf<HTMLElement> = document.querySelectorAll('.modal_contents__section');
    const modalAccordionTitle: NodeListOf<HTMLElement> = document.querySelectorAll('.modal_contents__label');
    const modalAccordionContents: NodeListOf<HTMLElement> = document.querySelectorAll('.modal_contents__main');

    // 共通の処理を行う関数を定義
    const addClassToElements = (elements: NodeListOf<HTMLElement>, className: string): void => {
        elements.forEach(element => {
            element.classList.add(className);
        });
    };

    // 各セレクタとクラス名を指定して関数を呼び出す
    addClassToElements(modalAccordion, 'js-accordion-wrap');
    addClassToElements(modalAccordionTitle, 'js-accordion-title');
    addClassToElements(modalAccordionContents, 'js-accordion-content');
};