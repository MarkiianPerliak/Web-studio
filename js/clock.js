function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var strcount
    var x = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
    var x1 = x.getMonth() + 1 + "/" + x.getDate() + "/" + x.getYear();
    x1 = x1 + " - " + x.getHours( ) + ":" + x.getMinutes() + ":" + x.getSeconds();
    document.getElementById('ct').innerHTML = x1;

    tt = display_c();
}