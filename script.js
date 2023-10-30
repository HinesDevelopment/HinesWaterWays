const images = ["image_link_here", "data:image/png;base64,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", "image_link_here", "image_link_here", "image_link_here"];
const spinButton = document.getElementById("spin");
const resultText = document.getElementById("result");

let balance = 500;

spinButton.addEventListener("click", () => {
    if (balance >= 1) {
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
                resultText.textContent = `Balance: $${balance}`;
            } else if (new Set(reelImages).size === 2) {
                balance += 10;
                resultText.textContent = `Balance: $${balance}`;
            } else if (new Set(reelImages).size === 3) {
                balance += 2;
                resultText.textContent = `Balance: $${balance}`;
            }
        }, reels.length * 1000);
    }
});
