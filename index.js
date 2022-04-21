window.onload = () => {
    const menu = document.getElementById("menu");
    const x = document.getElementById("x-menu");
    const navbar = document.getElementById("nav-list");
    const arrow = document.getElementById("arrow");
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) {
            hideMenu();
        }
    });
    window.addEventListener("scroll", () => {
        if (window.scrollY > 700) {
            hideMenu();
            showArrow();
        } else {
            hideArrow();
        }
    });

    const showArrow = () => {
        arrow.classList.remove("hidden");
        arrow.classList.add("block");
    };

    const hideArrow = () => {
        arrow.classList.add("hidden");
        arrow.classList.remove("block");
    };
    const showMenu = () => {
        menu.classList.add("hidden");
        menu.classList.remove("block");
        x.classList.remove("hidden");
        x.classList.add("block");
        navbar.classList.remove("hidden");
        navbar.classList.add("flex");
    };

    const hideMenu = () => {
        x.classList.add("hidden");
        x.classList.remove("block");
        menu.classList.remove("hidden");
        menu.classList.add("block");
        navbar.classList.add("hidden");
        navbar.classList.remove("flex");
    };
    menu.addEventListener("click", () => {
        showMenu();
    });
    x.addEventListener("click", () => {
        hideMenu();
    });
    arrow.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });
};
