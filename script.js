const formElement = document.querySelector("form");
const cardElement = document.querySelector("#card");
const validationElement = document.querySelector("#validation");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const cardNumber = document.querySelector("#card").value;
  const transportOption = document.querySelector("#transport").value;

  console.log(`Číslo karty: ${cardNumber}, způsob dopravy: ${transportOption}`);

  formElement.innerHTML = `
      <h1>Hotovo</h1>
      <p>Objednávka odeslána ke zpracování.</p>
   `;
});

cardElement.addEventListener("input", (e) => {
  const cardNumberLength = e.target.value.length;

  if (cardNumberLength < 16) {
    validationElement.textContent = `Číslo karty je příliš krátké. Chybí ${
      16 - cardNumberLength
    } číslic.`;
  } else if (cardNumberLength === 16) {
    validationElement.textContent = ``;
  } else {
    validationElement.textContent = `Číslo karty je moc dlouhé. Přebývá ${
      cardNumberLength - 16
    } číslic.`;
  }
});
