const signs = document.querySelectorAll(".sign");
const quantities = document.querySelectorAll(".sign_quantity");
const signs_real = [];

signs.forEach((sign, index) => {
    sign.addEventListener("click", () => {
        const currentCount = parseInt(quantities[index].textContent);
        quantities[index].textContent = currentCount + 1;
        signs_real.push(sign.textContent);
        let signs_real_num = signs_real.map(Number);
        let sum = signs_real_num.reduce((acc, num) => acc + num, 0)
        let gradeCalc = sum / signs_real_num.length;
        let submit = document.querySelector(".submit");
        submit.addEventListener("click", ()=> {
            let result = document.querySelector(".result");
            result.textContent = Math.round(gradeCalc * 10) / 10;
        });
    });
});