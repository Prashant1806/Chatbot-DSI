const btn = document.getElementById("btn");
const output = document.getElementById("outputText");

btn.addEventListener("click", () => {
  output.innerHTML = "Loading...";
  const apiKey = "OYSZEEVQ5C9Y70V0";
  const url = `https://www.alphavantage.co/query?function=OVERVIEW&apikey=${apiKey}&symbol=^BSESN`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const dividendYield = parseFloat(data.DividendYield);
      output.innerHTML = `<p>Sensex Dividend Yield: ${dividendYield.toFixed(2)}%</p>`;
    })
    .catch((error) => {
      console.log(error);
      output.innerHTML = "Error retrieving data. Please try again later.";
    });
});
