export const offersSubmitHandler = (formSelector) => {
    const form = document.querySelector(formSelector);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const link = getElements(".offers__row-input:checked")[0].value;
        location.href = link;
    });
};