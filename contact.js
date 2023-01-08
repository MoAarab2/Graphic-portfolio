const form = document.getElementById("fcf-form-id");
const thank = document.getElementById("thank");
const btn = document.getElementById('fcf-button');
const fullForm = document.getElementById('fcf-form')

const sendMail = (mail) => {
  fetch("https://tranquil-mountain-64265.herokuapp.com/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
};

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
  thank.style.display = 'block';
  form.reset();
  btn.disabled = true;
  fullForm.style.display = 'none';
});