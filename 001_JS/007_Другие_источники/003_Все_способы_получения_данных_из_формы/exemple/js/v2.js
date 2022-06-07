const isCheckboxOrRadio = (type) => ['checkbox', 'radio'].includes(type); // при проверке 'checkbox', 'radio' возвращает true, во всех остальных случаях false

const form = document.getElementById('form');

function retrieveFormValue(event) {
  event.preventDefault();

  const fields = document.querySelectorAll('input', 'select', 'textarea'); // выбираю все элементы формы
  const values = {};

  fields.forEach((field) => {
    const { name, value, type, checked } = field;

    values[name] = isCheckboxOrRadio(type) ? checked : value;
  });
  console.log('v2', values);
}

form.addEventListener('submit', retrieveFormValue);
