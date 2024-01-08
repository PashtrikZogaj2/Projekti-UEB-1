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

            // Add click event listener to each product item
            container.querySelectorAll(".product-section").forEach(item => {
                item.addEventListener("click", function (event) {
                    // Toggle the "enlarged" class when a product item is clicked
                    this.classList.toggle("enlarged");
                    event.stopPropagation(); // Prevent the click event from propagating to document
                    // Clear search bar when a product item is clicked
                    searchInput.value = "";
                });
            });

            // Add click event listener to document to close the enlarged box when clicking outside
            document.addEventListener("click", function (event) {
                const enlargedItems = container.querySelectorAll(".product-section.enlarged");
                if (enlargedItems.length > 0 && !enlargedItems[0].contains(event.target)) {
                    enlargedItems[0].classList.remove("enlarged");
                }
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

            // Modified to support multiple images
            house.images.forEach(imageSrc => {
                const img = document.createElement("img");
                img.className = "product-img";
                img.src = imageSrc;
                imgDiv.appendChild(img);
            });

            innerDiv.appendChild(imgDiv);

            const infoDiv = document.createElement("div");
            infoDiv.className = "product-info";

            const titleParagraph = document.createElement("p");
            titleParagraph.className = "product-title";
            titleParagraph.innerHTML = `<a href="#">${house.title}</a> ${house.address}`;
            infoDiv.appendChild(titleParagraph);


            const ratingParagraph = document.createElement("p");
            ratingParagraph.innerHTML = "Renters rated:";
            infoDiv.appendChild(ratingParagraph);

            const ratingStars = document.createElement("p");
            ratingStars.className = "product-rating";

            for (let i = 0; i < house.rating; i++) {
                const star = document.createElement("i");
                star.className = "fa fa-star";
                star.setAttribute("aria-hidden", "true");
                ratingStars.appendChild(star);
            }

            ratingStars.innerHTML += `<span>(${house.rating})</span>`;
            infoDiv.appendChild(ratingStars);

            const priceParagraph = document.createElement("p");
            priceParagraph.className = "product-price";
            priceParagraph.innerHTML = `
                <span class="product-original-price">${house.price}</span>
                <span class="product-per-month">per month</span>
            `;

            infoDiv.appendChild(priceParagraph);

            // Additional information
            

        
            innerDiv.appendChild(infoDiv);

            houseDiv.appendChild(innerDiv);
            container.appendChild(houseDiv);
        });
    }

    function updateDisplayedItems(query) {
        container.querySelectorAll(".product-section").forEach(item => {
            const productName = item.querySelector(".product-title a").innerText.toLowerCase();
            const itemType = item.className.split(" ").find(className => className.includes("item")) || "all-item";

            if ((productName.includes(query) || query === "") && (itemType === `${selectedType}-item` || selectedType === "all")) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    const clearSearchButton = document.getElementById("clear-search-button"); // Replace "clear-search-button" with the actual ID or class of your button
    clearSearchButton.addEventListener("click", function () {
        searchInput.value = ""; // Clear the search bar
    });
});
