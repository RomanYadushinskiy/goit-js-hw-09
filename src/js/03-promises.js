import Notiflix from 'notiflix';

 const formRef = document.querySelector('.form');
 const delayRef = document.querySelector('[name="delay"]');
 const stepRef = document.querySelector('[name="step"]');
 const amountRef = document.querySelector('[name="amount"]');

 function createPromise(position, delay) {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       const shouldResolve = Math.random() > 0.3;
       if (shouldResolve) {
         resolve({ position, delay });
       } else {
         reject({ position, delay });
       }
     }, delay);
   });
 }

  formRef.addEventListener('submit', onSubmitForm);

  function onSubmitForm(e) {
    e.preventDefault();
    let delayTime = Number(delayRef.value);
    const stepTime = Number(stepRef.value);
    const amount = amountRef.value;

    for (let i = 1; i <= amount; i += 1) {
      createPromise(i, delayTime)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      delayTime += stepTime;
    }
  }

 