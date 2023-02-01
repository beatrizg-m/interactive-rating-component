const initial = document.getElementById('initial');
const finish = document.getElementById('finish');
const submit = document.getElementById('submit');
const ratingButton = document.querySelectorAll('.ratingButton');
const assessment = document.querySelector('.assessment');
let selectedRate;

submit.addEventListener('click', (e) => {
    e.preventDefault();
    initial.classList.add('display-none');
    initial.classList.remove('initial');
    finish.classList.add('finish');
    finish.classList.remove('display-none');
})

ratingButton.forEach(item => {
    item.addEventListener('click', (e) => {
        if(!selectedRate){
           e.target.classList.add('active');
           selectedRate =  e.target;
           assessment.textContent = selectedRate.textContent;
        }
        else if(selectedRate === e.target){
            selectedRate.classList.remove('active');
            selectedRate = undefined;
            assessment.textContent = selectedRate.textContent;
        }
        else{
            selectedRate.classList.remove('active');
            selectedRate = e.target;
            selectedRate.classList.add('active');
            assessment.textContent = selectedRate.textContent;
        }

    })
});

