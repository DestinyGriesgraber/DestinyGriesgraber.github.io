var linkList =["Zoom", "PVD", "Quarentine", "OneFish", "Bait", "Faer", "RISO", "Abram"]

function openClose(elementId)
{
    var x = document.getElementById(elementId);
    for (i = 0; i < linkList.length; ++i)
        if( elementId != linkList[i])
        {   listId= document.getElementById(linkList[i])
            listId.style.display = "none"
        }
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