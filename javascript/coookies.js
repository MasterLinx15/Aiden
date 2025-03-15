// cookie creating
function createCookie() {
    const name = document.getElementById("cookieName").value;
    const value = document.getElementById("cookieValue").value;
    document.cookie = `${name}=${value}; path=/`;
    document.getElementById("output").innerText = `Cookie "${name}" set!`;
  }
  
// cookie finding
  function findCookie() {
    const name = document.getElementById("cookieName").value + "=";
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      if (cookie.startsWith(name)) {
        const value = cookie.split("=")[1];
        document.getElementById("output").innerText = `Cookie Value: ${value}`;
        return;
      }
    }
    document.getElementById("output").innerText = "Cookie not found.";
  }
  
// cookie destroy
  function destroyCookie() {
    const name = document.getElementById("cookieName").value;
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    document.getElementById("output").innerText = `Cookie "${name}" deleted!`;
  }
  