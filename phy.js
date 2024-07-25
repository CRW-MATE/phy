let body = document.getElementById("h1");
let btn = document.getElementById("btn");
let Vo = 0;
let s = 0;
let v = 0;
let ts = 0;
let te = 0;
let t = 0;
let id = 0;
let end = 0;
let a = 0;
const change = () => {
  Vo = 0;
  t = 0;
  s = 0;
  v = 0;
  end = !end;
  if (end) {
    btn.innerHTML = "end";
    Vo = eval(document.getElementById("Vo").value * Math.pow(10, -3));
    a = eval(document.getElementById("a").value * Math.pow(10, -6));
    s = 0;
    body.setAttribute.value = "end";
    id = window.setInterval(() => {
      ts = performance.now();

      if (s > 80 || s < 0) {
        Vo = -v;
        t = 0;
        a = 0;
      }
      t = t + 1;
      v = Vo + a * t;
      s = s + v;
      body.style.marginLeft = `${s}vw`;
      te = performance.now();
      console.log(1 - Math.round(te - ts) + "ms", t, v, Math.round(s));
    }, 1 - Math.round(te - ts));
  } else {
    btn.innerHTML = "start";
    body.style.marginLeft = `0vw`;
    t = 0;
    v = 0;
    s = 0;
    Vo = 0;
    a = 0;
    clearInterval(id);
  }
};
