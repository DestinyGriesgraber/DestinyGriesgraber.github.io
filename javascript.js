function openClose(elementID)
{
    var x = document.getElementById(elementID);
    if (x.style.display === "block") 
    {
        x.style.display = "none";
    }
    else 
    {
        x.style.display = "block";
    }
}
function zoom() {
    openClose("Zoom")
    document.addEventListener('mouseup', function(e) {
        var active = $( ".selector" ).accordion("option", "active");
        var container = document.getElementById("Zoom");
        if (!active.contains(e.target)) {
            container.style.display = 'none';
        }
    });
}

function pvd() {
    openClose("PVD")
}
function quarentine() {
    openClose("Quarentine")
}
function oneFish() {
    openClose("OneFish")
}
function bait() {
    openClose("Bait")
}
function faer() {
    openClose("Faer")
}
function riso() {
    openClose("RISO")
}
function abram() {
    openClose("Abram")
}