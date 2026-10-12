"use strict";
const fragmenta = "120c560619020046050e033660251000005500002e0d47103405025b";
const fragmentb = "3b0d2c19523b1b2c3445111628024f032a22194e111b27341855142016";
const keya = "qu4ck";
const keyb = "duck!";

function decodexorhex(hex, key) { if (!/^(?:[0-9a-fa-f]{2})*$/.test(hex)) { throw new error("invalid hexadecimal data."); } if (!key) { throw new error("missing xor key."); } const bytes = hex.match(/.{2}/g) || []; let decoded = ""; for (let i = 0; i < bytes.length; i++) { const byte = parseint(bytes[i], 16); const keybyte = key.charcodeat(i % key.length);
        decoded += string.fromcharcode(byte ^ keybyte); } return decoded; }

function recoverduckflag() { const parta = decodexorhex(fragmenta, keya); const partb = decodexorhex(fragmentb, keyb); return parta + partb; }
window.revealduckflag = function() { const results = document.getelementbyid("search-results");
    results.innerhtml = `         <h3>🕵️ classified duck evidence found!</h3>         <div class="flag-result">${recoverduckflag()}</div>     `; };
document.addeventlistener("domcontentloaded", function() { const form = document.getelementbyid("search-form"); const input = document.getelementbyid("duck-search"); const results = document.getelementbyid("search-results");
    form.addeventlistener("submit", function(event) { event.preventdefault(); const query = input.value.trim(); if (!query) { results.textcontent = "please enter a search query."; return; }
        results.innerhtml = `             <h3>🦆 search results</h3>             <p>searching the duck archive for:                 <strong>${query}</strong>             </p>             <p class="muted">                 no matching duck records found. try another query.             </p>         `; }); });