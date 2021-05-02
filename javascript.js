var linkList = ["Zoom", "PVD", "Quarentine", "OneFish", "Bait", "Faer", "RISO", "Abram"]

function openClose(elementId) {
    var x = document.getElementById(elementId);
    for (i = 0; i < linkList.length; ++i)
        if (elementId != linkList[i]) {
            listId = document.getElementById(linkList[i])
            listId.style.display = "none"
        }
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function info(title, date, medium, dimentions, production)
{
    document.getElementById("title").innerHTML = title;
    document.getElementById("date").innerHTML = date;
    document.getElementById("medium").innerHTML = medium;
    document.getElementById("dimentions").innerHTML = dimentions;
    document.getElementById("production").innerHTML = production;
    
    document.getElementById("title").classList.add("yarnk");
    document.getElementById("date").classList.add("yarnk");
    document.getElementById("medium").classList.add("yarnk");
    document.getElementById("dimentions").classList.add("yarnk");
    document.getElementById("production").classList.add("yarnk");
    

}

function zoom() {
    openClose("Zoom")
    info("Zoom School", "Nov 2020", "Video", "HD", "After Effects")
}
function pvd() {
    openClose("PVD")
    info("PVD Tunnel", "Oct 2020", "Brown & White Butcher Paper", "18x24in and 11x17in", "Lazerjet Printer")

}
function quarentine() {
    openClose("Quarentine")
    info("Quarentine Colaborative", "May 2020", "Google Slides", "16:10", "Google Slides")

}
function oneFish() {
    openClose("OneFish")
    info("One Fish, Two Fish", "September 2020", "Matt White Paper, Cardstock", "18x24in", "Lazerjet Printer, Risograph")

}
function bait() {
    openClose("Bait")
    info("Click Bait", "September 2019", "Matt White Paper, Gifs", "8.5x11in", "Lazerjet Printer")

}
function faer() {
    openClose("Faer")
    info("Faer", "December 2020", "PDF (right now), Gifs, Website", "5.5x8in", "Wordpress")

}
function riso() {
    openClose("RISO")
    info("RISO Book/Various Prints", "November 2020", "Perfect bound cardstock", "5.5x8in", "Risograph")

}
function abram() {
    openClose("Abram")
    info("Abram & Felix", "November 2019", "Accordian Book", "5.5x8in (?)", "Lazerjet Printer")

}

