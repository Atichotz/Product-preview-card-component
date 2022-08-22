const cardr = document.querySelector('.card-r'),
pf1 = cardr.querySelector('.pf1');

const smallDevice = window.matchMedia("(max-width: 375px)");
smallDevice.addEventListener("change",handleDeviceChange);

  // Run it initially
  handleDeviceChange(smallDevice);

function handleDeviceChange(e) {
    if (e.matches) pf1.innerHTML = "Gabrielle Essence <br> Eau De Parfum";
    else pf1.innerHTML = "Gabrielle <br> Essence Eau <br> De Parfum";
}
