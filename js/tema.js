const govde = document.body;
const kayitliTema = localStorage.getItem("tema");

if (kayitliTema === "karanlik") {
  govde.classList.add("karanlik-tema");
} else {
  govde.classList.remove("karanlik-tema");
}