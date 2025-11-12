document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalw");
    const modalMessage = document.getElementById("modalw-message");

    const showModal = message => {
        modalMessage.textContent = message;
        modal.style.display = "flex";
    };

    modal.querySelector(".close").addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

    const form = document.querySelector(".application-form");
    const nameInput = form.querySelector('input[type="text"]');
    const phoneInput = form.querySelector('input[type="tel"]');

    nameInput.addEventListener("input", () => {
        nameInput.value = nameInput.value.replace(/[^А-Яа-яA-Za-z]/g, "");
    });

    phoneInput.addEventListener("input", () => {
        let v = phoneInput.value.replace(/\D/g, "");
        if (!v.startsWith("7")) v = "7" + v.replace(/^7/, "");
        phoneInput.value = "+7 " +
            (v.length > 1 ? `(${v.slice(1, 4)}) ` : "") +
            (v.length >= 4 ? v.slice(4, 7) : "") +
            (v.length >= 7 ? "-" + v.slice(7, 9) : "") +
            (v.length >= 9 ? "-" + v.slice(9, 11) : "");
    });

    form.addEventListener("submit", e => {
        e.preventDefault();
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        showModal("Заявка успешно отправлена! Мы свяжемся с вами.");
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const links = document.querySelector(".links");

    burger.addEventListener("click", () => {
        links.classList.toggle("active");
        burger.classList.toggle("active");
    });
});
