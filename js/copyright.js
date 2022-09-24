// add copywright info for footer
const currentDate = new Date();
const copyright = "&copy ";
const name = " | Nathan T. Hunt | Alabama";
document.querySelector('#year').innerHTML = copyright.concat(currentDate.getFullYear(), name);
const lastUpdate = "Last Updated: ";
document.querySelector('#last-update').textContent = lastUpdate.concat(document.lastModified);