document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("product-container");
    const searchInput = document.querySelector(".search-textbox");
    const housesData = [];
    let selectedType = "all";

    fetch("./buy.json")
        .then(response => response.json())
        .then(houses => {
            housesData.push(...houses);
            displayItems();

            searchInput.addEventListener("input", () => updateDisplayedItems(searchInput.value.trim(), "address"));



            document.querySelectorAll(".main-menu li a").forEach(item => {
                item.addEventListener("click", function (event) {
                    event.preventDefault();
                    selectedType = this.innerText.toLowerCase();
                    updateDisplayedItems(searchInput.value.trim());
                });
            });

            container.querySelectorAll(".product-section").forEach(item => {
                item.addEventListener("click", function (event) {
                    if (!event.target.closest('.detailed-section')) {
                        this.classList.toggle("enlarged");
                    }
                    event.stopPropagation();
                });
            });
            

            document.addEventListener("click", closeDetailedSection);
        })
        .catch(error => console.error("Error fetching JSON data:", error));

    function displayItems() {
        housesData.forEach(house => {
            const houseDiv = createHouseDiv(house);
            container.appendChild(houseDiv);
        });
    }

    function createHouseDiv(house) {
        const houseDiv = document.createElement("div");
        houseDiv.className = `width-25 product-section ${house.type}-item`;
        houseDiv.id = house.id;
        houseDiv.onclick = () => displayDetailedInfo(house.id);

        const innerDiv = document.createElement("div");
        innerDiv.className = "product-border";

        const imgDiv = document.createElement("div");
        imgDiv.className = "product-img-center";

        
        const img = document.createElement("img");
        img.className = "product-img";
        img.src = house.images[0];
        imgDiv.appendChild(img);

        innerDiv.appendChild(imgDiv);

        const infoDiv = document.createElement("div");
        infoDiv.className = "product-info";

        infoDiv.appendChild(createElementWithText("p", "product-title", `<a href="#">${house.title}</a>`));
        infoDiv.appendChild(createElementWithText("p", "product-address", house.address));
        infoDiv.appendChild(createRatingStars(house.rating));
        infoDiv.appendChild(createElementWithText("p", "product-price", `<span class="product-original-price">${house.price}</span><span class="product-per-month"> Negotiable </span>`));

        innerDiv.appendChild(infoDiv);
        houseDiv.appendChild(innerDiv);

        return houseDiv;
    }

    function createElementWithText(tag, className, text) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        element.innerHTML = text;
        return element;
    }

    function createRatingStars(rating) {
        const ratingStars = createElementWithText("p", "product-rating", "");
        for (let i = 0; i < rating; i++) {
            const star = document.createElement("i");
            star.className = "fa fa-star";
            star.setAttribute("aria-hidden", "true");
            ratingStars.appendChild(star);
        }
        ratingStars.innerHTML += `<span>(${rating})</span>`;
        return ratingStars;
    }

    function updateDisplayedItems(query, searchType) {
        container.querySelectorAll(".product-section").forEach(item => {
            const productAddress = item.querySelector(".product-info .product-address").innerText.toLowerCase();
            const itemType = item.className.split(" ").find(className => className.includes("item")) || "all-item";
            item.style.display = (productAddress.includes(query) || query === "") && (itemType === `${selectedType}-item` || selectedType === "all") ? "block" : "none";
        });
    }
    
    

    let slideIndex = 1;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
        slides[slideIndex - 1].style.display = "block";
    }

    function displayDetailedInfo(houseId) {
        const house = housesData.find(item => item.id === houseId);
        const detailedSection = createDetailedSection(house);
        container.appendChild(detailedSection);
        searchInput.value = "";

        showSlides(slideIndex); // Initial call to showSlides

        document.addEventListener("click", closeDetailedSection);
    }

    function createDetailedSection(house) {
        const col1 = createElementWithText("section", "col-4", "");
        const row = createElementWithText("section", "row", "");
        const col2 = createElementWithText("section", "col-6", "");
        const detailedSection = createElementWithText("section", "container-fluid detailed-section", "");
        const row1 = createElementWithText("section", "row", "");
        row1.style.height = "100%";
        const imageColumn = createElementWithText("section", "col-1 image-holder", "");
        
        const imageSlider = createElementWithText("div", "w3-content w3-display-container", "");
        imageSlider.appendChild(createNavigationButton("a", "w3-btn-floating w3-display-left", "", () => plusSlides(-1)));
        house.images.forEach((imageSrc, index) => {
            const img = createElementWithText("img", "mySlides", "");
            img.src = imageSrc;
            img.style.width = "100%";
            imageSlider.appendChild(img);
        });

       
        imageSlider.appendChild(createNavigationButton("a", "w3-btn-floating w3-display-right", "", () => plusSlides(1)));

        imageColumn.appendChild(imageSlider);
        row1.appendChild(imageColumn);

        const detailsColumn = createElementWithText("section", "col-1", "");
        detailsColumn.appendChild(createTitlePriceRow(house));
        detailsColumn.appendChild(createDescriptionRow(house));
        const infoCol = createElementWithText("section", "col-1", "");

        const infoRow = createElementWithText("section", "row", "");
        infoRow.style.height = "100%";
        infoCol.appendChild(detailsColumn);
        infoCol.appendChild(createSliderHolderColumn(house));
        infoCol.appendChild(createCustomColumn(house));
        
        infoRow.appendChild(infoCol)
        row1.appendChild(imageColumn);
        
        col1.appendChild(row1);
        col2.appendChild(infoRow);
        row.appendChild(col1);
        row.appendChild(col2);
        detailedSection.appendChild(row);

        return detailedSection;
    }

    function createNavigationButton(tag, className, text, clickHandler) {
        const button = createElementWithText(tag, className, text);
        button.onclick = clickHandler;
        return button;
    }

    function closeDetailedSection(event) {
        const detailedSection = document.querySelector(".detailed-section");
        if (detailedSection && !detailedSection.contains(event.target)) {
            document.removeEventListener("click", closeDetailedSection);
            container.removeChild(detailedSection);
        }
    }

    function createTitlePriceRow(house) {
        const titlePriceRow = createElementWithText("section", "row", "");
        titlePriceRow.style.height = "20%";
        titlePriceRow.appendChild(createTitleHolderColumn(house));
        titlePriceRow.appendChild(createPriceHolderColumn(house));
        return titlePriceRow;
    }

    function createTitleHolderColumn(house) {
        const titleHolderColumn = createElementWithText("section", "col title-holder", "");
        titleHolderColumn.appendChild(createElementWithText("h4", "", house.title));
        return titleHolderColumn;
    }

    function createPriceHolderColumn(house) {
        const priceHolderColumn = createElementWithText("section", "col price-holder", "");
        priceHolderColumn.appendChild(createElementWithText("h4", "", house.price));
        return priceHolderColumn;
    }

    function createDescriptionRow(house) {
        const descriptionRow = createElementWithText("section", "row", "");
        descriptionRow.style.height = "80%";
        descriptionRow.appendChild(createDescriptionColumn(house));
        return descriptionRow;
    }

    function createDescriptionColumn(house) {
        const descriptionColumn = createElementWithText("section", "col-1", "");
        descriptionColumn.appendChild(createElementWithText("label", "", "Description:"));
        descriptionColumn.appendChild(createElementWithText("p", "description", house.description));
        return descriptionColumn;
    }

    function createSliderHolderColumn(house) {
        const sliderHolderColumn = createElementWithText("section", "col-1 slider-holder", "");
        sliderHolderColumn.appendChild(createElementWithText("p", "", `On the ${house.floorValue} floor.`));
        sliderHolderColumn.appendChild(createElementWithText("p", "", `Number of bedrooms: ${house.bedroomValue}`));
        return sliderHolderColumn;
    }

    function createCustomColumn(house) {
        const customColumn = createElementWithText("section", "col-1 col-custom", "");
        customColumn.appendChild(createInfoRow("Address:", house.address, "address"));
        customColumn.appendChild(createInfoRow("Owner:", house.owner, "owner"));
        customColumn.appendChild(createInfoRow("Contact number:", house.phone, "phone"));
        return customColumn;
    }

    function createInfoRow(labelText, valueText, id) {
        const infoRow = createElementWithText("section", "row", "");
        const infoColumn = createElementWithText("section", "col-1 info-holder", "");
        infoColumn.appendChild(createElementWithText("label", "", labelText));
        infoColumn.appendChild(createElementWithText("p", id, valueText));
        infoRow.appendChild(infoColumn);
        return infoRow;
    }
    
});