const ratingBtn = document.querySelectorAll('button.rating-btn');
const submitBtn = document.querySelector('.submit-btn');
const cardCont = document.querySelector('.card-container')
const thankYouCont = document.querySelector('.thank-you-container')
const ratingNum = document.querySelector('.thank-you-number')

submitBtn.addEventListener('click', () => {
    cardCont.remove()
    thankYouCont.classList.add('thank-you-container-active');
});


for(let i = 0; i < ratingBtn.length; i++){
    ratingBtn[i].addEventListener('click', (e) => {
        let value = e.target.value;
        ratingNum.innerHTML = value;
    })
};