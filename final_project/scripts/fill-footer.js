"use strict";
// fill in the base footer
const year = document.getElementById("year");
const lastUpdate = document.getElementById("last-update");
const resourcesUsed = document.getElementById("resourcesUsed");

const today = new Date();

year.innerHTML = `&copy ${today.getFullYear()} Pong | Nathan T. Hunt | WDD 330 Final `;
lastUpdate.innerHTML = `Last Updated: ${document.lastModified}`;
resourcesUsed.innerHTML = `<a href="https://en.wikipedia.org/api/rest_v1/#/">Wikimedia API</a>`;
