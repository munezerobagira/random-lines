let counter = 0;

const messages = document.querySelectorAll(".c-virtual_list__item");
messages.forEach((element) => {
  console.log(element.childNodes[0]);
});
