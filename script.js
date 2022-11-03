const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.getElementById("result");

fetch("https://api.apilayer.com/fixer/symbols", {
  headers: {
    apikey: "BkQ6TJOCTFs96Qks9HjtzNGBYMNdmx98",
  },
})
  .then((response) => response.json())
  .then((result) => {
    let entries = Object.entries(result.symbols);
    for (let i in entries) {
      select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]} </option>`;
      select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
    }
  });

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = input.value;

  if (currency1 != currency2) {
    convert(currency1, currency2, value);
  } else {
    result.value = value;
  }
});

function convert(currency1, currency2, value) {
  fetch(
    `https://api.apilayer.com/fixer/convert?to=${currency2}&from=${currency1}&amount=${value}`,
    {
      headers: {
        apikey: "BkQ6TJOCTFs96Qks9HjtzNGBYMNdmx98",
      },
    }
  )
    .then((response) => response.json())
    .then((resultt) => {
      result.value = resultt.result;
    });
}
