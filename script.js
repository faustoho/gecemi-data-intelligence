document.addEventListener("DOMContentLoaded", () => {

    // Ano automático do rodapé
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // Menu mobile
    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const menu =
        document.getElementById("menu");


    if (mobileMenuButton && menu) {

        mobileMenuButton.addEventListener("click", () => {

            const isOpen =
                menu.classList.toggle("active");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        // Fecha o menu após clicar em um item
        const menuLinks =
            menu.querySelectorAll("a");

        menuLinks.forEach((link) => {

            link.addEventListener("click", () => {

                menu.classList.remove("active");

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }

});