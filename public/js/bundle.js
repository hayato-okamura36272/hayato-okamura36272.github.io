document.addEventListener("DOMContentLoaded", () => {
  console.log("test");
  const elements = document.querySelectorAll("[data-observe]");
  const observerOptions = {
    root: null,
    // ビューポートをルートに設定
    rootMargin: "0px",
    threshold: 0.1
    // 10%見えたら発火
  };
  const observerCallback = (entries, observer2) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer2.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  elements.forEach((element) => {
    observer.observe(element);
  });
});
