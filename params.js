// Function to get URL parameters as an object
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const paramsObj = {};
  for (const [key, value] of params.entries()) {
    paramsObj[key] = value;
  }
  return paramsObj;
}

// Usage
const urlParams = getUrlParams();
console.log(urlParams);

console.log(urlParams[1]);

