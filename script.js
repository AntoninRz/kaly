const burger = document.querySelector(".burger");
const navMobil = document.querySelector(".link-list-mobile");

function showNavMobil () {
    navMobil.style.display = "flex";
    burger.style.display = "none";
}

function hiddenNavMobil () {
    navMobil.style.display = "none";
    burger.style.display = "flex";
}