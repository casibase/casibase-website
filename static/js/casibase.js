(function(w, d, s, c, i) {
  const j = d.createElement(s);
  j.async = false;
  j.src = "https://tcdn.casibase.org/casibase.js";
  j.onload = function() {
    w[c]("init", {
      endpoint: "https://ai.casibase.com",
      themeColor: "rgb(89,54,213)",
    });
  };
  const f = d.getElementsByTagName(s)[0];
  f.parentNode.insertBefore(j, f);
  w[c] = w[c] || function() {
    (w[c].q = w[c].q || []).push(arguments);
  };
})(window, document, "script", "casibaseChat");
