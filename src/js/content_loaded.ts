import scrollAnimations from './component/scroll_animation';
import anime from './component/anime';
import {
    mainSplide,
    primarySplide,
    secondarySplide,
    tertiarySplide,
    posterSplide,
    gallerySplide,
    movieListSplide,
} from './component/splide';
import { accordion, movieModalAccordion } from './component/accordion';
import { youtube, youtubeModal } from './component/youtube';

export default () => {
    new scrollAnimations().add(document.querySelectorAll('[data-anim-elm]'));
    anime();
    mainSplide();
    primarySplide();
    secondarySplide();
    tertiarySplide();
    posterSplide();
    youtube();
    youtubeModal();
    gallerySplide();
    movieModalAccordion();
    accordion();
   movieListSplide();
};
