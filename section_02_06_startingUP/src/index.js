const button = document.createElement('button');

button.innerText = "CLICK ME";
button.onclick = () => {
  System.import('./image_viewer').then(module => {
    module.default();
  });
};


document.body.appendChild(button);
