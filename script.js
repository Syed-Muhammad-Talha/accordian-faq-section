const faqs = document.querySelectorAll(".question-box");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        toggleFaq(faq);
    })    
});

const toggleFaq = (faq) => {
    faqs.forEach(otherFaq => {
        if (otherFaq !== faq) {
            const otherAnswer = otherFaq.querySelector("p");
            const otherPlus = otherFaq.querySelector(".fa-circle-plus");
            const otherMinus = otherFaq.querySelector(".fa-circle-minus");
            
            otherAnswer.classList.remove("show");
            otherPlus.style.display = "inline";
            otherMinus.style.display = "none";
        }
    });

    const answer = faq.querySelector("p");
    const plusIcon = faq.querySelector(".fa-circle-plus");
    const minusIcon = faq.querySelector(".fa-circle-minus");

    if(answer.classList.contains("show")){
        answer.classList.remove("show");
        plusIcon.style.display = "inline";
        minusIcon.style.display = "none";
    }else{
        answer.classList.add("show");
        plusIcon.style.display = "none";
        minusIcon.style.display = "inline";
        faq.scrollIntoView({ behavior: "smooth", block: "center" }); 
    }
}