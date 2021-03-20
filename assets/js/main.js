!(function () {
    "use strict";
    const t = (t, e = !1) => ((t = t.trim()), e ? [...document.querySelectorAll(t)] : document.querySelector(t)),
        e = (e, o, i, s = !1) => {
            let l = t(o, s);
            l && (s ? l.forEach((t) => t.addEventListener(e, i)) : l.addEventListener(e, i));
        },
        o = (t, e) => {
            t.addEventListener("scroll", e);
        };
    let i = t("#navbar .scrollto", !0);
    const s = () => {
        let e = window.scrollY + 200;
        i.forEach((o) => {
            if (!o.hash) return;
            let i = t(o.hash);
            i && (e >= i.offsetTop && e <= i.offsetTop + i.offsetHeight ? o.classList.add("active") : o.classList.remove("active"));
        });
    };
    window.addEventListener("load", s), o(document, s);
    const l = (e) => {
        let o = t(e).offsetTop;
        window.scrollTo({ top: o, behavior: "smooth" });
    };
    let a = t(".back-to-top");
    if (a) {
        const t = () => {
            window.scrollY > 100 ? a.classList.add("active") : a.classList.remove("active");
        };
        window.addEventListener("load", t), o(document, t);
    }
    e("click", ".mobile-nav-toggle", function (e) {
        t("body").classList.toggle("mobile-nav-active"), this.classList.toggle("bi-list"), this.classList.toggle("bi-x");
    }),
        e(
            "click",
            ".scrollto",
            function (e) {
                if (t(this.hash)) {
                    e.preventDefault();
                    let o = t("body");
                    if (o.classList.contains("mobile-nav-active")) {
                        o.classList.remove("mobile-nav-active");
                        let e = t(".mobile-nav-toggle");
                        e.classList.toggle("bi-list"), e.classList.toggle("bi-x");
                    }
                    l(this.hash);
                }
            },
            !0
        ),
        window.addEventListener("load", () => {
            window.location.hash && t(window.location.hash) && l(window.location.hash);
        });
    let n = t("#preloader");
    n &&
        window.addEventListener("load", () => {
            n.remove();
        });
    const c = t(".typed");
    if (c) {
        let t = c.getAttribute("data-typed-items");
        (t = t.split(",")), new Typed(".typed", { strings: t, loop: !0, typeSpeed: 100, backSpeed: 50, backDelay: 2e3 });
    }
    window.addEventListener("load", () => {
        let o = t(".portfolio-container");
        if (o) {
            let i = new Isotope(o, { itemSelector: ".portfolio-item" }),
                s = t("#portfolio-flters li", !0);
            e(
                "click",
                "#portfolio-flters li",
                function (t) {
                    t.preventDefault(),
                        s.forEach(function (t) {
                            t.classList.remove("filter-active");
                        }),
                        this.classList.add("filter-active"),
                        i.arrange({ filter: this.getAttribute("data-filter") }),
                        i.on("arrangeComplete", function () {
                            AOS.refresh();
                        });
                },
                !0
            );
        }
    }),
        window.addEventListener("load", () => {
            AOS.init({ duration: 1e3, easing: "ease-in-out", once: !0, mirror: !1 });
        });
})();
