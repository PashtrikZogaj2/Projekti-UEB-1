document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("product-container");
    const searchInput = document.querySelector(".search-textbox");
    const housesData = [];
    let selectedType = "all";

    // Fetch JSON data (you might need a server for this in real scenarios)
    fetch("./rent.json")
        .then(response => response.json())
        .then(houses => {
            housesData.push(...houses);
            displayItems();

            searchInput.addEventListener("input", function () {
                updateDisplayedItems(this.value.trim());
            });

            const menuItems = document.querySelectorAll(".main-menu li a");

            // Add click event listener to each menu item
            menuItems.forEach(item => {
                item.addEventListener("click", function (event) {
                    event.preventDefault();

                    selectedType = this.innerText.toLowerCase();

                    // Hide all items
                    container.querySelectorAll(".product-section").forEach(item => {
                        item.style.display = "none";
                    });

                    // Show items based on the selected type
                    if (selectedType === "all") {
                        container.querySelectorAll(".product-section").forEach(item => {
                            item.style.display = "block";
                        });
                    } else {
                        container.querySelectorAll(`.${selectedType}-item`).forEach(item => {
                            item.style.display = "block";
                        });
                    }
               // Clear search bar when a button is clicked
               searchInput.value = "";
            });
        });
    })
        .catch(error => console.error("Error fetching JSON data:", error));

    function displayItems() {
        housesData.forEach(house => {
            const houseDiv = document.createElement("div");
            houseDiv.className = `width-25 product-section ${house.type}-item`;

            const innerDiv = document.createElement("div");
            innerDiv.className = "product-border";

            const imgDiv = document.createElement("div");
            imgDiv.className = "product-img-center";

            const img = document.createElement("img");
            img.className = "product-img";
            img.src = house.imgSrc;
            imgDiv.appendChild(img);

            innerDiv.appendChild(imgDiv);

            const productName = document.createElement("p");
            productName.className = "product-name";
            productName.innerHTML = `<a href="#">${house.productName}</a>`;
            innerDiv.appendChild(productName);

            const ratingParagraph = document.createElement("p");
            ratingParagraph.innerHTML = "Renters rated:";
            innerDiv.appendChild(ratingParagraph);

            const ratingStars = document.createElement("p");
            ratingStars.className = "product-rating";

            for (let i = 0; i < house.rating; i++) {
                const star = document.createElement("i");
                star.className = "fa fa-star";
                star.setAttribute("aria-hidden", "true");
                ratingStars.appendChild(star);
            }

            ratingStars.innerHTML += `<span>(${house.rating})</span>`;
            innerDiv.appendChild(ratingStars);

            const priceParagraph = document.createElement("p");
            priceParagraph.className = "product-price";
            priceParagraph.innerHTML = `
                <span class="product-original-price">${house.originalPrice}</span>
                <span class="product-per-month">per month</span>
            `;

            innerDiv.appendChild(priceParagraph);
            houseDiv.appendChild(innerDiv);
            container.appendChild(houseDiv);
        });
    }

    function updateDisplayedItems(query) {
        container.querySelectorAll(".product-section").forEach(item => {
            const productName = item.querySelector(".product-name a").innerText.toLowerCase();
            const itemType = item.className.split(" ").find(className => className.includes("item")) || "all-item";

            if ((productName.includes(query) || query === "") && (itemType === `${selectedType}-item` || selectedType === "all")) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
    const clearSearchButton = document.getElementById("clear-search-button"); // Replace "clear-search-button" with the actual ID or class of your button
    clearSearchButton.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            searchInput.value = ""; // Clear the search bar
        }
        
    });
});
