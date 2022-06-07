const form = document.getElementById('form'); // Нахожу форму

function retrieveFormValue(event) {
  event.preventDefault(); // т.к. форму на сервер отправлять не нужно вызываю этот метод. Отправка происходит без перезагрузки

  //получаю поля формы и достаю из них значения
  const name = form.querySelector('[name="name"]');
  age = form.querySelector('[name="age"]');
  terms = form.querySelector('[name="terms"]');
  plan = form.querySelector('[name="plan"]');

  // Создаю объект в который помещаю полученные данные
  const values = {
    name: name.value,
    age: age.value,
    plan: plan.value,
    terms: terms.checked, // checkbox
  };
  console.log('v1', values);
}

form.addEventListener('submit', retrieveFormValue); // при отправке фрмы срабатывает событие submit, оно обычно используется для валидации формы перед отправкой на сервер или для предотвращения отправки и обработки ее с помощью JS
