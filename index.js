const content = document.getElementById("content");
const source = document.getElementById("source");

console.log(source);

function getJoke() {
  fetch("https://uselessfacts.jsph.pl/random.json")
    .then((res) => res.json())
    .then((data) => {
      const fact = data.text;
      const url = data.source_url;
      console.log(source);

      content.textContent = fact;
      source.href = url;
    });
}
getJoke();
document.body.addEventListener("click", getJoke);
