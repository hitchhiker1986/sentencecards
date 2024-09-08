let german_card = document.getElementById("german_card");
let hungarian_card = document.getElementById("hungarian_card");
german_card.addEventListener("click", (e) => {
    german_card.style.display = "none";
    hungarian_card.style.display = "block";
    }
);

hungarian_card.addEventListener("click", (e) => {
    hungarian_card.style.display = "none";
    german_card.style.display = "block";
    }
);