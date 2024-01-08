const addressEl = document.getElementById("ipAddress");
console.log(addressEl);

let ipStatus = new XMLHttpRequest();

ipStatus.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    addressEl.textContent = ipStatus.responseText;
  }
};

ipStatus.open("GET", "https://ipv4.icanhazip.com/");
ipStatus.send();
