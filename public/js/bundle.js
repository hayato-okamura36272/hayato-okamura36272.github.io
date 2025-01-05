document.addEventListener("DOMContentLoaded", () => {
  console.log("test");
  const scrollAnimation = () => {
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
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
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
    images.forEach((image) => {
      image.style.opacity = "0";
      image.style.visibility = "hidden";
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageUrl = entry.target.getAttribute("data-image");
            imageContainer.classList.add("slide-in");
            images.forEach((image) => {
              const imageSrc = image.getAttribute("src");
              if (imageSrc === imageUrl) {
                image.style.opacity = "1";
                image.style.visibility = "visible";
              } else {
                image.style.opacity = "0";
                image.style.visibility = "hidden";
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
    const modalBackground = document.querySelector(".reserve_modal");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modal.classList.add("show");
      });
    });
    modalBackground.addEventListener("click", (event) => {
      if (event.target === modalBackground) {
        modal.classList.remove("show");
        modal.classList.add("hidden");
      }
    });
  };
  reserveModal();
  scrollAnimation();
  animationPrice();
});
