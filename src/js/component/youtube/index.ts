import YouTubePlayer from 'youtube-player';

let player1: any;
export const youtube = () => {
    if (!document.querySelector('.js-video01')) return;
    player1 = YouTubePlayer('video-player1');

    // 'loadVideoById' is queued until the player is ready to receive API calls.
    player1.loadVideoById('KqwwizvtTwk');
    // 'playVideo' is queue until the player is ready to received API calls and after 'loadVideoById' has been called.
    player1.playVideo();
    // 'stopVideo' is queued after 'playVideo'.
    player1.stopVideo().then(() => {
        // Every function returns a promise that is resolved after the target function has been executed.
    });
};

export const youtubeModal = () => {
    const thumbnail1 = document.querySelector('.js-thumbnail01');
    const video1 = document.querySelector('.js-video01');
    const modal = document.querySelector('.modal_block');
    const close = document.querySelector('.modal_block__close');
    const body = document.querySelector('body');

    thumbnail1?.addEventListener('click', () => {
        modal?.classList.add('is-active');
        video1?.classList.add('is-active');
        body!.style.overflowY = 'hidden';
    });
    close?.addEventListener('click', () => {
        modal?.classList.remove('is-active');
        video1?.classList.remove('is-active');
        body!.style.overflowY = 'initial';
        player1.stopVideo().then(() => {
            // Every function returns a promise that is resolved after the target function has been executed.
        });
    });
};

youtube();
youtubeModal();
