const submit = document.getElementById("new-guest-book-submit");
const guestBook = document.getElementById("guest-book");
const textField = document.getElementById("new-guest-book-text");

submit.addEventListener("click", (event) => {
  const inputText = textField.value;
  const newReply = document.createElement("li");
  newReply.innerHTML = inputText;
  guestBook.appendChild(newReply);
});
