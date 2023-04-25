    const iconEye = document.querySelector(".input");

    console.log(iconEye);

    iconEye.addEventListener("click", function () {
        if (this.nextElementSibling.type === "password") {
            this.nextElementSibling.type = "text";
        }
    });
