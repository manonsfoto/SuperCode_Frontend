import Alien from "./classes/Alien";

const groot = new Alien("Groot", "Braun");
groot._planet = "Jupiter";
groot._galaxy = "Milky Way";

const thanos = new Alien("Thanos", "Purple");
thanos._planet = "PA-99-N2";
thanos._galaxy = "Andromeda";

const gamora = new Alien("Gamora", "Green");
gamora._planet = "Messier 101";
gamora._galaxy = "Pinwheel Galaxy";

console.log(groot);
console.log(groot.color);
groot._name = "groot102";
console.log(groot);
