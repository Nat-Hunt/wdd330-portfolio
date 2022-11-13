console.log(window.navigator.userAgent);

console.log(document.cookie);

const cookies = document.cookie.split("; ");
for (crumb of cookies) {
  const [key, value] = crumb.split("=");
  console.log(`The value of ${key} is ${value}`);
}
