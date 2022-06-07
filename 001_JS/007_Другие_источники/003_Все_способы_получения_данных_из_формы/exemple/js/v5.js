const { form } = document.forms;

function retrieveFormValue(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries());
  console.log('>>', values);
}

form.addEventListener('submit', retrieveFormValue);
