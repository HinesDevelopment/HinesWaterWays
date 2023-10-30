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
    <button id="all-in">All In</button>
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
        const allInButton = document.getElementById("all-in");
        const resultText = document.getElementById("result");
        let spinning = false;
        let balance = 500;
        let allInMode = false;

        // Define the payout amounts for different numbers of matching images
        const payouts = {
            1: 10,   // Pay 10 units for 1 matching image
            2: 30,   // Pay 30 units for 2 matching images
            3: 50,   // Pay 50 units for 3 matching images
            4: 100,  // Pay 100 units for 4 matching images
            5: 1000  // Pay 1000 units for 5 matching images (jackpot)
        };

        spinButton.addEventListener("click", () => {
            if (spinning || balance < 1) {
                return;
            }

            spinning = true;
            spinButton.disabled = true;
            allInButton.disabled = true;

            balance -= 1; // Deduct a small amount on every spin
            resultText.textContent = `Balance: $${balance}`;

            if (allInMode) {
                // Double the odds by duplicating the images
                images.push(...images);
            }

            const reels = document.querySelectorAll(".reel");

            let spinIteration = 0;

            function spinReels() {
                spinIteration++;
                resultText.textContent = `Balance: $${balance} - Spin ${spinIteration}`;

                reels.forEach((reel, index) => {
                    // Generate a random index for the images array
                    const randomIndex = Math.floor(Math.random() * images.length);
                    reel.innerHTML = `<img src="${images[randomIndex]}" alt="Image ${randomIndex + 1}">`;
                });

                setTimeout(() => {
                    const reelImages = Array from(reels, (reel) => reel.firstChild.getAttribute("src"));
                    const uniqueImages = new Set(reelImages);

                    // Count the number of matching images
                    const matchingCount = reelImages.length - uniqueImages.size + 1;

                    if (matchingCount === 5) {
                        // Grand jackpot if all 5 images match
                        balance += 100000;
                        resultText.textContent = `Balance: $${balance} - You have won the Grand Water Jackpot!`;
                    } else if (payouts[matchingCount]) {
                        // Pay the corresponding amount based on the number of matching images
                        balance += payouts[matchingCount];
                        resultText.textContent = `Balance: $${balance}`;
                    }

                    // If there's no match or not enough matches, stop spinning
                    if (matchingCount < 1 || matchingCount >= 5) {
                        spinButton.disabled = false;
                        allInButton.disabled = false;
                        spinning = false;
                    } else {
                        // If there's a match, continue spinning
                        spinReels();
                    }

                    if (allInMode) {
                        // Reset the images array if in "all in" mode
                        images.splice(images.length / 2);
                    }
                }, reels.length * 1000);
            }

            // Start the spinning process
            spinReels();
        });

        allInButton.addEventListener("click", () => {
            if (spinning || balance < 1 || allInMode) {
                return;
            }

            allInMode = true;
            allInButton.disabled = true;
        });
    </script>
</body>
</html>
