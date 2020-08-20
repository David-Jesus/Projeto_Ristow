$('#down').on('click', function() {
    $('html, body').animate({ scrollTop: 1500 }, 1200);
});

// $('html, body').animate({ scrollTop: 200 }, 50);

/*Header (to mobile)*/

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("manipula").style.backgroundColor = "#fff";
    } else {
        x.style.display = "block";
        document.getElementById("manipula").style.backgroundColor = "#f1f1f1";
    }
}