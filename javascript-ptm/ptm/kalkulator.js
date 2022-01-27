kali.onclick = function () {
    let a = document.querySelector("#bil1").value;
    let b = document.querySelector("#bil2").value;
    let c = a * b;
    document.querySelector("#hasil").innerHTML = c;
}
bagi.onclick = function () {
    let a = document.querySelector("#bil1").value;
    let b = document.querySelector("#bil2").value;
    let c = a/b;
    document.querySelector("#hasil").innerHTML = c;
}
tambah.onclick = function () {
    let a = document.querySelector("#bil1").value;
    let b = document.querySelector("#bil2").value;
    let c = parseFloat(a) + parseFloat(b);
    document.querySelector("#hasil").innerHTML =c;
}
kurang.onclick = function () {
    let a = document.querySelector("#bil1").value;
    let b = document.querySelector("#bil2").value;
    let c = a-b;
    document.querySelector("#hasil").innerHTML = c;
}
function halo() {
    alert ("Never Gonna Give You UP , Never Gonna Let You Down , Never Gonna Turn Around And Hurt You , Never Gonna Make You Cry , Never Gonna Say Goodbye , Never Gonna Tell A Lie And Hurt You ");
}
