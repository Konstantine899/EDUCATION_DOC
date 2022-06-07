const { form } = document.forms; // Использую деструктуризацию для того что бы вытащить форму

function retrieveFormValue(event) {
  event.preventDefault();

  const { name, age, terms, plan } = form; // обращаюсь к полям

  const values = {
    name: name.value,
    age: age.value,
    terms: terms.checked,
    plan: plan.value,
  };

  console.log('v3', values);
}
form.addEventListener('submit', retrieveFormValue);
