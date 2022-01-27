zodiak.onclick = function () {
    let a = document.querySelector("#bulan").value;
    let b = document.querySelector("#tanggal").value;
    let zodiak = "";
    if ((b>= 21 && b <=31 & a==3)||(b>=1&& b <=19 & a==4)){
        zodiak = "ARIES";
    }
    if ((b>= 20 && b <=30 & a==4)||(b>=1&& b <=20 & a==5)){
        zodiak = "TAURUS";
    }
    if ((b>= 21 && b <=31 & a==5)||(b>=1&& b <=20 & a==6)){
        zodiak = "GEMINI";
    }
    if ((b>= 21 && b <=30 & a==6)||(b>=1&& b <=22 & a==7)){
        zodiak = "CANCER";
    }
    if ((b>= 23 && b <=31 & a==7)||(b>=1&& b <=22 & a==8)){
        zodiak = "LEO";
    }
    if ((b>= 23 && b <=31 & a==8)||(b>=1&& b <=22 & a==9)){
        zodiak = "VIRGO";
    }
    if ((b>= 23 && b <=30 & a==9)||(b>=1&& b <=22 & a==10)){
        zodiak = "LIBRA";
    }
    if ((b>= 23 && b <=31 & a==10)||(b>=1&& b <=21 & a==11)){
        zodiak = "SCORPIO";
    }
    if ((b>= 22 && b <=30 & a==11)||(b>=1&& b <=21 & a==12)){
        zodiak = "SAGITARIUS";
    }
    if ((b>= 23 && b <=31 & a==12)||(b>=1&& b <=19 & a==1)){
        zodiak = "CAPRICORN";
    }
    if ((b>= 20 && b <=31 & a==1)||(b>=1&& b <=18 & a==2)){
        zodiak = "AQUARIUS";
    }
    if ((b>= 19 && b <=29 & a==2)||(b>=1&& b <=20 & a==3)){
        zodiak = "PISCES";
    }
    document.querySelector("#hasil").innerHTML = zodiak;
}