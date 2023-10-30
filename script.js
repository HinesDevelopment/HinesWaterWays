const images = ["https://hopeforfulanis.org/wp-content/uploads/2019/08/download-2.jpg", "image_link_here", "image_link_here", "image_link_here", "image_link_here"];
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
            const randomImage = images[Math.floor(Math.random() * images.length)];
            reel.innerHTML = `<img src="${randomImage}" alt="Image ${index + 1}">`;
        }, index * 1000);
    });

    setTimeout(() => {
        const reelImages = Array.from(reels, (reel) => reel.firstChild.getAttribute("src"));

        if (new Set(reelImages).size === 1) {
            balance += 10000;
        } else if (new Set(reelImages).size === 2) {
            balance += 10;
        } else if (new Set(reelImages).size === 3) {
            balance += 2;
        }

        resultText.textContent = `Balance: $${balance}`;
        spinButton.disabled = false;
        spinning = false;
    }, reels.length * 1000);
});

