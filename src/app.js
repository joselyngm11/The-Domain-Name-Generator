/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let result, i, j, k;
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

for (i = 0; i < pronoun.length; i++) {
  for (j = 0; j < adj.length; j++) {
    for (k = 0; k < noun.length; k++) {
      result = pronoun[i] + adj[j] + noun[k] + ".com";
      console.log(result);
    }
  }
}
