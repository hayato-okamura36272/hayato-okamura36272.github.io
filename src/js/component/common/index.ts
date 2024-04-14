import anime from 'animejs';

export const common = () => {
    const movieSort = (): void => {
        const sortButton: HTMLElement | null = document.querySelector('.sort_block__btn');
        const sortModal: HTMLElement | null = document.querySelector('.movie_modal');
        const sortClose: HTMLElement | null = document.querySelector('.movie_modal__close');
        const sortInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.movie_modal input');
        const modalLayer: HTMLElement | null = document.querySelector('.movie_modal__layer');
        const body: HTMLElement | null = document.querySelector('body');
        
        if (sortButton && sortModal && sortClose && body && modalLayer) {
            const openModal = (): void => {
                sortModal.classList.add('is-active');
                body.style.overflow = 'hidden';
                // モーダル表示後にフォーカスを設定するために遅延を設ける
                setTimeout(() => {
                    // モーダル内の最初のinput要素にフォーカスを設定
                    const firstInput: HTMLElement | null = sortModal.querySelector('input');
                    if (firstInput) {
                        firstInput.focus();
            }
                }, 100);
            };
    
            const closeModal = (): void => {
                sortModal.classList.remove('is-active');
                body.style.overflow = 'auto';
                setTimeout(() => {
                    if (sortButton) {
                        sortButton.focus();
            }
                }, 100);
            };

            sortInputs.forEach(input => {
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        // inputがチェックボックスやラジオボタンの場合、そのチェック状態を切り替える
                        if (input.type === 'checkbox' || input.type === 'radio') {
                            input.checked = !input.checked;
                            e.preventDefault(); // Enterキーのデフォルト動作をキャンセル
                        }
                    }
                });
            });
    
            sortButton.addEventListener('click', openModal);
            sortButton.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.key === 'Enter') { // Enter key
                    openModal();
                }
            });
    
            sortClose.addEventListener('click', closeModal);
            sortClose.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.key === 'Enter') { // Enter key
                    closeModal();
                }
            });
            modalLayer.addEventListener('click', closeModal);
    
            document.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.keyCode === 27 && sortModal.classList.contains('is-active')) { // Esc key
                    closeModal();
                }
            });
        }
    };

    const switchTab = () => {
        const tabButton = document.querySelectorAll('.tab_block__item');
        const tabContent = document.querySelectorAll('.js-tab_contents');
        if (tabButton && tabContent) {
            tabButton.forEach((button, index) => {
                button.addEventListener('click', () => {
                    tabButton.forEach((btn) => {
                        btn.classList.remove('is-active');
                    });
                    tabContent.forEach((content, i) => {
                        anime({
                            targets: content,
                            opacity: [1, 0], // 透明度を1から0に変更
                            duration: 200, // 500ミリ秒のアニメーション
                            easing: 'easeInOutQuad', // アニメーションのイージング
                            complete: function () {
                                if (content instanceof HTMLElement) {
                                    content.style.display = 'none'; // アニメーション完了後に非表示
                                    content.classList.remove('is-active');
                                    if (i === index) {
                                        // 選択されたタブのコンテンツのみを表示
                                        content.style.opacity = '0'; // 透明度を0に設定
                                        content.style.display = 'block'; // 表示
                                        anime({
                                            targets: content,
                                            opacity: [0, 1], // 透明度を0から1に変更
                                            duration: 200, // 500ミリ秒のアニメーション
                                            easing: 'easeInOutQuad', // アニメーションのイージング
                                        });
                                        content.classList.add('is-active');
                                    }
                                }
                            },
                        });
                    });
                    // クリックされたタブをアクティブにする
                    button.classList.add('is-active');
                });
            });
        }
    };
    const detailTextMore = () => {
        const detailText = document.querySelectorAll('.js-detail_text');
        const detailMore = document.querySelectorAll('.js-detail_more');

        if (detailText && detailMore) {
            detailMore.forEach((more, index) => {
                more.addEventListener('click', () => {
                    const moreText = more.querySelector('p');
                    if (moreText) {
                        moreText.textContent = moreText.textContent === '閉じる' ? 'もっと見る' : '閉じる';
                    }
                    more.classList.toggle('is-close');
                    detailText.forEach((text, i) => {
                        if (i === index) {
                            text.classList.toggle('is-close');
                        }
                    });
                });
            });
        }
    };

    movieSort();
    switchTab();
    detailTextMore();
};
