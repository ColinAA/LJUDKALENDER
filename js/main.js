window.addEventListener("load", function (){
    // Få dagens datum
    var today = new Date;
    // Sätt start-datum för varje lucka
    var lucka1 = new Date("2021/12/01");
    var lucka2 = new Date("2021/12/02");
    var lucka3 = new Date("2021/12/03");
    var lucka4 = new Date("2021/12/04");
    var lucka5 = new Date("2021/12/05");
    var lucka6 = new Date("2021/12/06");
    var lucka7 = new Date("2021/12/07");
    var lucka8 = new Date("2021/12/08");
    var lucka9 = new Date("2021/12/09");
    var lucka10 = new Date("2021/12/10");
    var lucka11 = new Date("2021/12/11");
    var lucka12 = new Date("2021/12/12");
    var lucka13 = new Date("2021/12/13");
    var lucka14 = new Date("2021/12/14");
    var lucka15 = new Date("2021/12/15");
    var lucka16 = new Date("2021/12/16");
    var lucka17 = new Date("2021/12/10");
    var lucka18 = new Date("2021/12/18");
    var lucka19 = new Date("2021/12/19");
    var lucka20 = new Date("2021/12/20");
    var lucka21 = new Date("2021/12/21");
    var lucka22 = new Date("2021/12/22");
    var lucka23 = new Date("2021/12/23");
    var lucka24 = new Date("2021/12/24");

    var id2 = new Date("2021/12/02");
    var id4 = new Date("2021/12/04");
    var id6 = new Date("2021/12/06");
    var id8 = new Date("2021/12/08");
    var id10 = new Date("2021/12/10");
    var id12 = new Date("2021/12/12");
    var id14 = new Date("2021/12/14");
    var id16 = new Date("2021/12/16");
    var id18 = new Date("2021/12/18");
    var id20 = new Date("2021/12/20");
    var id22 = new Date("2021/12/22");
    var id24 = new Date("2021/12/24");




    var firstEnd = new Date("2021/12/01");

    // Få luckans plats via ID
    var lucka1ID = document.getElementById("lucka1c");
    var lucka2ID = document.getElementById("lucka2c");
    var lucka3ID = document.getElementById("lucka3c");
    var lucka4ID = document.getElementById("lucka4c");
    var lucka5ID = document.getElementById("lucka5c");
    var lucka6ID = document.getElementById("lucka6c");
    var lucka7ID = document.getElementById("lucka7c");
    var lucka8ID = document.getElementById("lucka8c");
    var lucka9ID = document.getElementById("lucka9c");
    var lucka10ID = document.getElementById("lucka10c");
    var lucka11ID = document.getElementById("lucka11c");
    var lucka12ID = document.getElementById("lucka12c");
    var lucka13ID = document.getElementById("lucka13c");
    var lucka14ID = document.getElementById("lucka14c");
    var lucka15ID = document.getElementById("lucka15c");
    var lucka16ID = document.getElementById("lucka16c");
    var lucka17ID = document.getElementById("lucka17c");
    var lucka18ID = document.getElementById("lucka18c");
    var lucka19ID = document.getElementById("lucka19c");
    var lucka20ID = document.getElementById("lucka20c");
    var lucka21ID = document.getElementById("lucka21c");
    var lucka22ID = document.getElementById("lucka22c");
    var lucka23ID = document.getElementById("lucka23c");
    var lucka24ID = document.getElementById("lucka24c");

    var br2ID = document.getElementById("br2c");
    var br4ID = document.getElementById("br4c");
    var br6ID = document.getElementById("br6c");
    var br8ID = document.getElementById("br8c");
    var br10ID = document.getElementById("br10c");
    var br12ID = document.getElementById("br12c");
    var br14ID = document.getElementById("br14c");
    var br16ID = document.getElementById("br16c");
    var br18ID = document.getElementById("br18c");
    var br20ID = document.getElementById("br20c");
    var br22ID = document.getElementById("br22c");
    var br24ID = document.getElementById("br24c");




    var firstID = document.getElementById("firstMessage");

    if (today >= id2)
    br2ID.classList.remove("brINACTIVE");
    if (today >= id4)
    br4ID.classList.remove("brINACTIVE");
    if (today >= id6)
    br6ID.classList.remove("brINACTIVE");
    if (today >= id8)
    br8ID.classList.remove("brINACTIVE");
    if (today >= id10)
    br10ID.classList.remove("brINACTIVE");
    if (today >= id12)
    br12ID.classList.remove("brINACTIVE");
    if (today >= id14)
    br14ID.classList.remove("brINACTIVE");
    if (today >= id16)
    br16ID.classList.remove("brINACTIVE");
    if (today >= id18)
    br18ID.classList.remove("brINACTIVE");
    if (today >= id20)
    br20ID.classList.remove("brINACTIVE");
    if (today >= id22)
    br22ID.classList.remove("brINACTIVE");
    if (today >= id24)
    br24ID.classList.remove("brINACTIVE");



    if (today >= firstEnd)
    firstID.classList.add("luckaINACTIVE");
    // Om datumet har passerat = visa luckan
    if (today >= lucka1)
    lucka1ID.classList.remove("luckaINACTIVE");
    if (today >= lucka2)
    lucka2ID.classList.remove("luckaINACTIVE");
    if (today >= lucka3)
    lucka3ID.classList.remove("luckaINACTIVE");
    if (today >= lucka4)
    lucka4ID.classList.remove("luckaINACTIVE");
    if (today >= lucka5)
    lucka5ID.classList.remove("luckaINACTIVE");
    if (today >= lucka6)
    lucka6ID.classList.remove("luckaINACTIVE");
    if (today >= lucka7)
    lucka7ID.classList.remove("luckaINACTIVE");
    if (today >= lucka8)
    lucka8ID.classList.remove("luckaINACTIVE");
    if (today >= lucka9)
    lucka9ID.classList.remove("luckaINACTIVE");
    if (today >= lucka10)
    lucka10ID.classList.remove("luckaINACTIVE");
    if (today >= lucka11)
    lucka11ID.classList.remove("luckaINACTIVE");
    if (today >= lucka12)
    lucka12ID.classList.remove("luckaINACTIVE");
    if (today >= lucka13)
    lucka13ID.classList.remove("luckaINACTIVE");
    if (today >= lucka14)
    lucka14ID.classList.remove("luckaINACTIVE");
    if (today >= lucka15)
    lucka15ID.classList.remove("luckaINACTIVE");
    if (today >= lucka16)
    lucka16ID.classList.remove("luckaINACTIVE");
    if (today >= lucka17)
    lucka17ID.classList.remove("luckaINACTIVE");
    if (today >= lucka18)
    lucka18ID.classList.remove("luckaINACTIVE");
    if (today >= lucka19)
    lucka19ID.classList.remove("luckaINACTIVE");
    if (today >= lucka20)
    lucka20ID.classList.remove("luckaINACTIVE");
    if (today >= lucka21)
    lucka21ID.classList.remove("luckaINACTIVE");
    if (today >= lucka22)
    lucka22ID.classList.remove("luckaINACTIVE");
    if (today >= lucka23)
    lucka23ID.classList.remove("luckaINACTIVE");
    if (today >= lucka24)
    lucka24ID.classList.remove("luckaINACTIVE");


});
