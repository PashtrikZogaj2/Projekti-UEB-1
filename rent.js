
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
                houseDiv.id = `${house.id}`;
                houseDiv.onclick = () => displayDetailedInfo(house.id);
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

    function displayDetailedInfo(houseId) {
        // Find the house data based on the ID
        const house = housesData.find(item => item.id === houseId);

        // Create detailed section dynamically based on the house data
        const detailedSection = document.createElement("section");
        detailedSection.className = "container-fluid detailed-section";

        const row1 = document.createElement("section");
        row1.className = "row";
        row1.style.height = "50%";

        const imageColumn = document.createElement("section");
        imageColumn.className = "col-3 image-holder";
        const imageSlider = document.createElement("div");
        imageSlider.className = "w3-content w3-display-container";

        // Add images to the slider
        house.images.forEach((imageSrc, index) => {
            const img = document.createElement("img");
            img.className = "mySlides";
            img.src = imageSrc;
            img.style.width = "100%";
            imageSlider.appendChild(img);
        });

        // Add navigation buttons for the slider
        const prevButton = document.createElement("a");
        prevButton.className = "w3-btn-floating w3-display-left";
        prevButton.innerHTML = "&lt;";
        prevButton.onclick = () => plusSlides(-1);
        imageSlider.appendChild(prevButton);

        const nextButton = document.createElement("a");
        nextButton.className = "w3-btn-floating w3-display-right";
        nextButton.innerHTML = "&gt;";
        nextButton.onclick = () => plusSlides(1);
        imageSlider.appendChild(nextButton);

        imageColumn.appendChild(imageSlider);
        row1.appendChild(imageColumn);

        const detailsColumn = document.createElement("section");
        detailsColumn.className = "col-9";

        const titlePriceRow = document.createElement("section");
        titlePriceRow.className = "row";
        titlePriceRow.style.height = "20%";

        const titleHolderColumn = document.createElement("section");
        titleHolderColumn.className = "col-6 title-holder";
        const title = document.createElement("h4");
        title.id = "title";
        title.textContent = house.title;
        titleHolderColumn.appendChild(title);

        const priceHolderColumn = document.createElement("section");
        priceHolderColumn.className = "col-6 price-holder";
        const price = document.createElement("h4");
        price.id = "price";
        price.textContent = house.price;
        priceHolderColumn.appendChild(price);

        titlePriceRow.appendChild(titleHolderColumn);
        titlePriceRow.appendChild(priceHolderColumn);

        const descriptionRow = document.createElement("section");
        descriptionRow.className = "row";
        descriptionRow.style.height = "80%";

        const descriptionColumn = document.createElement("section");
        descriptionColumn.className = "col";
        const descriptionLabel = document.createElement("label");
        descriptionLabel.textContent = "Description:";
        const description = document.createElement("p");
        description.id = "description";
        description.textContent = house.description;
        descriptionColumn.appendChild(descriptionLabel);
        descriptionColumn.appendChild(description);

        descriptionRow.appendChild(descriptionColumn);

        detailsColumn.appendChild(titlePriceRow);
        detailsColumn.appendChild(descriptionRow);

        const infoRow = document.createElement("section");
        infoRow.className = "row";
        infoRow.style.height = "calc(50% - 100px)";

        const sliderHolderColumn = document.createElement("section");
        sliderHolderColumn.className = "col-4 slider-holder";
        const floorValue = document.createElement("p");
        floorValue.textContent = `On the ${house.floorValue} floor.`;
        const bedroomValue = document.createElement("p");
        bedroomValue.textContent = `Number of bedrooms: ${house.bedroomValue}`;
        sliderHolderColumn.appendChild(floorValue);
        sliderHolderColumn.appendChild(bedroomValue);

        const customColumn = document.createElement("section");
        customColumn.className = "col-8 col-custom";

        const addressRow = document.createElement("section");
        addressRow.className = "row";
        const addressColumn = document.createElement("section");
        addressColumn.className = "col info-holder";
        const addressLabel = document.createElement("label");
        addressLabel.textContent = "Address:";
        const address = document.createElement("p");
        address.id = "adress";
        address.textContent = house.address;
        addressColumn.appendChild(addressLabel);
        addressColumn.appendChild(address);
        addressRow.appendChild(addressColumn);

        const ownerRow = document.createElement("section");
        ownerRow.className = "row";
        const ownerColumn = document.createElement("section");
        ownerColumn.className = "col info-holder";
        const ownerLabel = document.createElement("label");
        ownerLabel.textContent = "Owner:";
        const owner = document.createElement("p");
        owner.id = "owner";
        owner.textContent = house.owner;
        ownerColumn.appendChild(ownerLabel);
        ownerColumn.appendChild(owner);
        ownerRow.appendChild(ownerColumn);

        const phoneRow = document.createElement("section");
        phoneRow.className = "row";
        const phoneColumn = document.createElement("section");
        phoneColumn.className = "col info-holder";
        const phoneLabel = document.createElement("label");
        phoneLabel.textContent = "Contact number:";
        const phone = document.createElement("p");
        phone.id = "phone";
        phone.textContent = house.phone;
        phoneColumn.appendChild(phoneLabel);
        phoneColumn.appendChild(phone);
        phoneRow.appendChild(phoneColumn);

        customColumn.appendChild(addressRow);
        customColumn.appendChild(ownerRow);
        customColumn.appendChild(phoneRow);

        infoRow.appendChild(sliderHolderColumn);
        infoRow.appendChild(customColumn);

        row1.appendChild(imageColumn);
        row1.appendChild(detailsColumn);

        detailedSection.appendChild(row1);
        detailedSection.appendChild(infoRow);

        // Append the detailed section to the container
        container.appendChild(detailedSection);

        // Clear search bar when a detailed section is displayed
        searchInput.value = "";

        document.addEventListener("click", function (event) {
            const detailedSection = container.querySelector(".container-fluid");

            // Check if the clicked element is outside the container and the detailed section is visible
            if (detailedSection && !detailedSection.contains(event.target)) {
                detailedSection.style.display = "none";
            }
        });
    
        // Function to navigate the image slider
        let slideIndex = 1;

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            const slides = document.getElementsByClassName("mySlides");
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }
   
    }

    


        // Add navigation buttons for the slider
        const prevButton = document.createElement("a");
        prevButton.className = "w3-btn-floating w3-display-left";
        prevButton.innerHTML = "&lt;";
        prevButton.onclick = () => plusSlides(-1);
        imageSlider.appendChild(prevButton);

        const nextButton = document.createElement("a");
        nextButton.className = "w3-btn-floating w3-display-right";
        nextButton.innerHTML = "&gt;";
        nextButton.onclick = () => plusSlides(1);
        imageSlider.appendChild(nextButton);

        imageColumn.appendChild(imageSlider);
        row1.appendChild(imageColumn);
    
        const detailsColumn = document.createElement("section");
        detailsColumn.className = "col-9";
    
        const titlePriceRow = document.createElement("section");
        titlePriceRow.className = "row";
        titlePriceRow.style.height = "20%";
    
        const titleHolderColumn = document.createElement("section");
        titleHolderColumn.className = "col-6 title-holder";
        const title = document.createElement("h4");
        title.id = "title";
        title.textContent = house.title;
        titleHolderColumn.appendChild(title);
    
        const priceHolderColumn = document.createElement("section");
        priceHolderColumn.className = "col-6 price-holder";
        const price = document.createElement("h4");
        price.id = "price";
        price.textContent = house.price;
        priceHolderColumn.appendChild(price);
    
        titlePriceRow.appendChild(titleHolderColumn);
        titlePriceRow.appendChild(priceHolderColumn);
    
        const descriptionRow = document.createElement("section");
            descriptionRow.className = "row";
            descriptionRow.style.height = "80%";
    
            const descriptionColumn = document.createElement("section");
            descriptionColumn.className = "col";
            const descriptionLabel = document.createElement("label");
            descriptionLabel.textContent = "Description:";
            const description = document.createElement("p");
            description.id = "description";
            description.textContent = house.description;
            descriptionColumn.appendChild(descriptionLabel);
            descriptionColumn.appendChild(description);
    
            descriptionRow.appendChild(descriptionColumn);
    
            detailsColumn.appendChild(titlePriceRow);
            detailsColumn.appendChild(descriptionRow);
    
            const infoRow = document.createElement("section");
            infoRow.className = "row";
            infoRow.style.height = "calc(50% - 100px)";
    
            const sliderHolderColumn = document.createElement("section");
            sliderHolderColumn.className = "col-4 slider-holder";
            const floorValue = document.createElement("p");
            floorValue.textContent = `On the ${house.floorValue} floor.`;
            const bedroomValue = document.createElement("p");
            bedroomValue.textContent = `Number of bedrooms: ${house.bedroomValue}`;
            sliderHolderColumn.appendChild(floorValue);
            sliderHolderColumn.appendChild(bedroomValue);
    
            const customColumn = document.createElement("section");
            customColumn.className = "col-8 col-custom";
    
            const addressRow = document.createElement("section");
            addressRow.className = "row";
            const addressColumn = document.createElement("section");
            addressColumn.className = "col info-holder";
            const addressLabel = document.createElement("label");
            addressLabel.textContent = "Address:";
            const address = document.createElement("p");
            address.id = "adress";
            address.textContent = house.address;
            addressColumn.appendChild(addressLabel);
            addressColumn.appendChild(address);
            addressRow.appendChild(addressColumn);
    
            const ownerRow = document.createElement("section");
            ownerRow.className = "row";
            const ownerColumn = document.createElement("section");
            ownerColumn.className = "col info-holder";
            const ownerLabel = document.createElement("label");
            ownerLabel.textContent = "Owner:";
            const owner = document.createElement("p");
            owner.id = "owner";
            owner.textContent = house.owner;
            ownerColumn.appendChild(ownerLabel);
            ownerColumn.appendChild(owner);
            ownerRow.appendChild(ownerColumn);
    
            const phoneRow = document.createElement("section");
            phoneRow.className = "row";
            const phoneColumn = document.createElement("section");
            phoneColumn.className = "col info-holder";
            const phoneLabel = document.createElement("label");
            phoneLabel.textContent = "Contact number:";
            const phone = document.createElement("p");
            phone.id = "phone";
            phone.textContent = house.phone;
            phoneColumn.appendChild(phoneLabel);
            phoneColumn.appendChild(phone);
            phoneRow.appendChild(phoneColumn);
    
            customColumn.appendChild(addressRow);
            customColumn.appendChild(ownerRow);
            customColumn.appendChild(phoneRow);
    
            infoRow.appendChild(sliderHolderColumn);
            infoRow.appendChild(customColumn);
    
            row1.appendChild(imageColumn);
            row1.appendChild(detailsColumn);
    
            detailedSection.appendChild(row1);
            detailedSection.appendChild(infoRow);
    
            // Append the detailed section to the container
        container.appendChild(detailedSection);

        // Clear search bar when a detailed section is displayed
        searchInput.value = "";

        document.addEventListener("click", function (event) {
            const detailedSection = container.querySelector(".container-fluid");

            // Check if the clicked element is outside the container and the detailed section is visible
            if (detailedSection && !detailedSection.contains(event.target)) {
                detailedSection.style.display = "none";
            }
        });
    }

);

