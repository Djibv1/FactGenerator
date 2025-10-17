const content = document.getElementById("content");
const source = document.getElementById("source");

function getFact() {
  fetch("https://uselessfacts.jsph.pl/random.json")
    .then((res) => res.json())
    .then((data) => {
      const fact = data.text;
      const url = data.source_url;
      content.textContent = fact;
      source.href = url;
    });
}
getFact();
document.body.addEventListener("click", getFact);
