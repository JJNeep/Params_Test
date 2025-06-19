// Function to get URL parameters as an object
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const paramsObj = {};
  for (const [key, value] of params.entries()) {
    paramsObj[key] = value;
  }
  return paramsObj;
}

const Text = document.getElementById('id');

// Usage
const urlParams = getUrlParams();
console.log(urlParams);

console.log(urlParams[["hello"]]);
if (urlParams[["hello"]] = 1) {
  Text.textContent="hello to u too"
}
