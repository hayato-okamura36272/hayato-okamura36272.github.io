document.addEventListener("DOMContentLoaded", () => {
  console.log("test");
  
  const elements = document.querySelectorAll("[data-observe]");  // data-observe属性を持つ要素を取得

  const observerOptions = {
    root: null, // ビューポートをルートに設定
    rootMargin: "0px",
    threshold: 0.1 // 10%見えたら発火
  };

  // Intersection Observerのコールバック関数
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // 一度アニメーションを適用したら監視を解除
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // data-observe属性を持つ全要素を監視
  elements.forEach(element => {
    observer.observe(element);
  });
});
