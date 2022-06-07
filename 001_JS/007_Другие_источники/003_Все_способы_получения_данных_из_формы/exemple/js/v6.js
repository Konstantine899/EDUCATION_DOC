const isCheckboxOrRadio = (type) => ['checkbox', 'radio'].includes(type); // при проверке 'checkbox', 'radio' возвращает true, во всех остальных случаях false

const { form } = document.forms;

function retrieverFormValue(event) {
  event.preventDefault();

  const values = {};

  for (let field of form) {
    const { name } = field;

    if (name) {
      const { type, checked, value } = field;
      values[name] = isCheckboxOrRadio(type) ? checked : value; // Записываю значения по ключу name
    }
  }
  console.log('v6', values);
}

form.addEventListener('submit', retrieverFormValue);
