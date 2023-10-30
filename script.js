const images = [
    "https://hopeforfulanis.org/wp-content/uploads/2019/08/download-2.jpg",
    "https://hopeforfulanis.org/wp-content/uploads/2019/08/download-2.jpg",
    "https://hopeforfulanis.org/wp-content/uploads/2019/08/download-2.jpg",
    "https://hopeforfulanis.org/wp-content/uploads/2019/08/download-2.jpg",
    "https://hopeforfulanis.org/wp-content/uploads/2019/08/download-2.jpg"
];
const spinButton = document.getElementById("spin");
const resultText = document.getElementById("result");
let spinning = false;

let balance = 500;

spinButton.addEventListener("click", () => {
    if (spinning || balance < 1) {
        return;
    }

    spinning = true;
    spinButton.disabled = true;

    balance -= 1;
    resultText.textContent = `Balance: $${balance}`;

    const reels = document.querySelectorAll(".reel");

    reels.forEach((reel, index) => {
        setTimeout(() => {
            reel.innerHTML = `<img src="${images[index]}" alt="Image ${index + 1}">`;
        }, index * 1000);
    });

    setTimeout(() => {
        const reelImages = Array.from(reels, (reel) => reel.firstChild.getAttribute("src"));

        if (new Set(reelImages).size === 1) {
            // Increase the balance by a larger amount when all five images match to make it a 100% chance.
            balance += 10000;
        }

        resultText.textContent = `Balance: $${balance}`;
        spinButton.disabled = false;
        spinning = false;
    }, reels.length * 1000);
});
