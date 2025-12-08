
const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector("select.from");
const toCurr = document.querySelector("select.to");
const msg = document.querySelector(".msg");
const swapBtn = document.querySelector(".fa-arrow-right-arrow-left");


for(let selectValue of dropdowns){
    for(code in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if(selectValue.classList.contains("from") && code === "USD"){
          newOption.selected = "selected";
        }else if(selectValue.classList.contains("to") && code == "INR"){
          newOption.selected = "selected";
        }
        selectValue.append(newOption);
    }

    selectValue.addEventListener("change", (evt)=>{
      updateFlag(evt.target);
    })
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const from = fromCurr.value.toLowerCase();
  const to = toCurr.value.toLowerCase();

  const url = `${BASE_URL}/currencies/${from}.json`;

  let response = await fetch(url);
  let data = await response.json();

  // New format: data[from][to]
  const rate = data[from][to];

  const finalAmount = (amtVal * rate).toFixed(2);

  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

swapBtn.addEventListener("click", () => {
  // swap the selected values
  let temp = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = temp;

  // update flags after swap
  updateFlag(fromCurr);
  updateFlag(toCurr);
});

window.addEventListener("load", () => {
  updateExchangeRate();
});