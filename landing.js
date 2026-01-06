document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    console.warn("GSAP not loaded – check script tag in landing.html");
    return;
  }

  const tl = gsap.timeline({
    defaults: {
      duration: 0.9,
      ease: "power3.out"
    }
  });

  // Base vignette
  tl.from("#bg-base", {
    opacity: 0,
    scale: 1.05,
    duration: 1.2
  });

  // Panels slide in
  tl.from("#left-panel", {
    x: "-12%",
    opacity: 0
  }, "-=0.9");

  tl.from("#right-panel", {
    x: "12%",
    opacity: 0
  }, "-=0.9");

  tl.from("#frame-btm", {
    y: "18%",
    opacity: 0
  }, "-=0.8");

  // Center HUD + door
  tl.from("#center-hud", {
    scale: 0.8,
    opacity: 0
  }, "-=0.7");

  tl.from("#door-leaf", {
    scaleY: 0,
    transformOrigin: "50% 100%",
    opacity: 0
  }, "-=0.6");

  tl.from("#lock-handle", {
    x: -30,
    opacity: 0
  }, "-=0.5");

  // Texts
  tl.from("#text-left-panel", {
    y: 25,
    opacity: 0
  }, "-=0.4");

  tl.from("#text-btm-panel", {
    y: 25,
    opacity: 0
  }, "-=0.35");

  tl.from("#milad-text", {
    x: 60,
    opacity: 0
  }, "-=0.4");

  // Start button pop in
  tl.from("#start-button", {
    scale: 0.6,
    opacity: 0
  }, "-=0.3");

  // Door scan line looping animation
  gsap.fromTo("#door-scan-line",
    {
      yPercent: 0,
      opacity: 0.9
    },
    {
      yPercent: -120,
      opacity: 0,
      duration: 1.8,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.4
    }
  );

  // Start button hover micro-bounce (extra, on top of CSS)
  const startBtn = document.getElementById("start-button");
  if (startBtn) {
    startBtn.addEventListener("mouseenter", () => {
      gsap.to(startBtn, { scale: 1.05, duration: 0.2, ease: "power2.out" });
    });
    startBtn.addEventListener("mouseleave", () => {
      gsap.to(startBtn, { scale: 1.0, duration: 0.2, ease: "power2.out" });
    });

    // Click -> fade landing out, then go to configurator (index.html)
    startBtn.addEventListener("click", () => {
      gsap.to("#landing-root", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
        onComplete() {
          window.location.href = "index.html";
        }
      });
    });
  }
});
