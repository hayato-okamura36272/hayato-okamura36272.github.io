document.addEventListener("DOMContentLoaded", () => {
  console.log("test");

  const scrollAnimation = () => {
    const elements = document.querySelectorAll("[data-observe]"); // data-observe属性を持つ要素を取得

    const observerOptions = {
      root: null, // ビューポートをルートに設定
      rootMargin: "0px",
      threshold: 0.1, // 10%見えたら発火
    };

    // Intersection Observerのコールバック関数
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // 一度アニメーションを適用したら監視を解除
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // data-observe属性を持つ全要素を監視
    elements.forEach((element) => {
      observer.observe(element);
    });
  };

  const animationPrice = () => {
    const sections = document.querySelectorAll(".price_section");
    const imageContainer = document.querySelector(
      ".price_container__decoration"
    );
    const images = document.querySelectorAll(".slide-image");

    // 画像の初期状態を制御するためのスタイル設定
    images.forEach((image) => {
      image.style.opacity = "0";
      image.style.visibility = "hidden";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageUrl = entry.target.getAttribute("data-image");

            // 左から右にスライド表示
            imageContainer.classList.add("slide-in");

            // 画像の切り替え処理
            images.forEach((image) => {
              const imageSrc = image.getAttribute("src");
              if (imageSrc === imageUrl) {
                image.style.opacity = "1"; // フェードイン
                image.style.visibility = "visible"; // フェードイン
              } else {
                image.style.opacity = "0"; // フェードアウト
                image.style.visibility = "hidden"; // フェードイン
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
  };

  const reserveModal = () => {
    const modal = document.querySelector(".reserve_modal");
    const btns = document.querySelectorAll("#reserve-btn");
    console.log(btns);
    
    const modalBackground = document.querySelector(".reserve_modal"); // モーダルの背景をクリックで閉じるために使用

    // ボタンをすべてループしてクリックイベントを設定
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.classList.remove("hidden"); // モーダル表示
        modal.classList.add("show");
      });
    });

    // モーダルの背景をクリックで閉じる
    modalBackground.addEventListener("click", (event) => {
      if (event.target === modalBackground) {
        modal.classList.remove("show");
        modal.classList.add("hidden"); // モーダルを閉じる
      }
    });
  };

  reserveModal();
  scrollAnimation();
  animationPrice();
});
