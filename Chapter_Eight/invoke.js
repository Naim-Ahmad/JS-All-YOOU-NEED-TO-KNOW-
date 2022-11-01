// Self invoke

let slf = (function () {
    return "Hello! I called myself";
  })();

console.log(slf)

let siiv = (function () {
    var inv = 'I am Self Invoke Function'
    return inv
})();

console.log(siiv)