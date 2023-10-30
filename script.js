<!DOCTYPE html>
<html>
<head>
    <style>
        .reel {
            display: inline-block;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div class="reel"></div>
    <div class="reel"></div>
    <div class="reel"></div>
    <div class="reel"></div>
    <div class="reel"></div>
    <button id="spin">Spin</button>
    <p id="result">Balance: $500</p>

    <script>
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
        let matching = false;

        spinButton.addEventListener("click", () => {
            if (spinning || balance < 1) {
                return;
            }

            spinning = true;
            spinButton.disabled = true;

            balance -= 1;
            resultText.textContent = `Balance: $${balance}`;

            const reels = document.querySelectorAll(".reel");

            let spinIteration = 0;

            function spinReels() {
                spinIteration++;
                resultText.textContent = `Balance: $${balance} - Spin ${spinIteration}`;

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
                        matching = true;
                    } else {
                        matching = false;
                    }

                    if (matching) {
                        // If there's a match, continue spinning
                        spinReels();
                    } else {
                        resultText.textContent = `Balance: $${balance}`;
                        spinButton.disabled = false;
                        spinning = false;
                    }
                }, reels.length * 1000);
            }

            // Start the spinning process
            spinReels();
        });
    </script>
</body>
</html>
