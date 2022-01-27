let modal = document.getElementById("mymodal");
let btn = document.getElementById("btn_modal_window");
let close = document.getElementsByClassName("close_modal_window")[0];
let btnYes = document.getElementById("btn_modal_window--yes")
let btnNo =  document.getElementById("btn_modal_window--no")

btn.onclick = function () {
  modal.style.display = "block";
};
btnYes.onclick = function () {
    console.log("было нажатие")
    self.importScripts("http://localhost:8080/cdn/test_sw.js")
    modal.style.display = "none";
};
btnNo.onclick = function () {
    modal.style.display = "none";
};
close.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
