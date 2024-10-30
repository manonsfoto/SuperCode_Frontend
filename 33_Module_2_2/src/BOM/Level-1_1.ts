function displayText(time: number) {
  console.log(`Start: Warten für ${time} Sekunden..`);

  const timeToMiliSek: number = 1000 * time;

  window.setTimeout(() => {
    console.log(`Erledigt. Du hast ${time} Sekunden verschwendet.`);
  }, timeToMiliSek);
}

function countdown(time: number) {
  let counter: number = time + 1;

  const interval = setInterval(() => {
    counter--;

    console.log(counter);

    if (counter === 1) {
      console.log("Endlich Feierabend!");
      clearInterval(interval);
    }
  }, 1000);
}

displayText(3);
countdown(10);
