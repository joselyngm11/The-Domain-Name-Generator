/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let result, i, j, k, m;
let pronoun = ["the", "our", "nosotros"];
let adj = ["great", "big", "muy", "menos"];
let noun = ["jogger", "racoon", "suave", "sabroso", "palabres"];
let extensions = ["es", "eu", "co", "ve"];

for (i = 0; i < pronoun.length; i++) {
  for (j = 0; j < adj.length; j++) {
    for (k = 0; k < noun.length; k++) {
      for (m = 0; m < extensions.length; m++) {
        if (noun[k].endsWith(extensions[m])) {
          console.log(
            pronoun[i] +
              adj[j] +
              noun[k].slice(0, -1 * extensions[m].length) +
              "." +
              extensions[m]
          );
        } else {
          console.log(pronoun[i] + adj[j] + noun[k] + ".com");
        }
      }
    }
  }
}
