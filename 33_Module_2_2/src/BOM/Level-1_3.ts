const btn = document.querySelector("button") as HTMLButtonElement;
const output = document.querySelector("#output") as HTMLDivElement;

function displayBrowserInfo() {
  const browserName = navigator.appName;
  const betriebssystemArchitektur = window.navigator.platform;
  const browserVersion = window.navigator.userAgent;
  const width = window.screen.width;
  const height = window.screen.height;
  const innenhöheDokument = window.innerHeight;
  const innenbreiteDokument = window.innerWidth;
  const colorDepth = window.screen.colorDepth;
  const pixelDepth = window.screen.pixelDepth;

  output.innerHTML = `
- Browsername: ${browserName}<br>
- Betriebssystem-Architektur: ${betriebssystemArchitektur}<br>
- Browser-Version: ${browserVersion}<br>
- Window Auflösung: ${height} X ${width}<br>
- Innere Breite des Dokuments: ${innenbreiteDokument}<br>
- Innenhöhe des Dokumnets: ${innenhöheDokument}<br>
- Color Depth: ${colorDepth}<br>
- Pixel Depth: ${pixelDepth}<br>
`;
}

btn.addEventListener("click", displayBrowserInfo);
