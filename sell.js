var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
 
  x[slideIndex-1].style.display = "block";  

}
var apartmentContent = `
<section class="row" style="height: inherit">
            <section class="col col-marg" style="height: inherit">
                <form style="height: inherit;">
                <section class="row" style="height:50%;">
                    <section class="col-3 image-holder" >
                        <div class="w3-content w3-display-container">
                            <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" >
                            <div class="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)">&#10094;</div>
                            </div>
                            <img class="mySlides" src="upload.png" style="width:100%">

                            <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" >
                              <div class="w3-right w3-hover-text-khaki" onclick="plusDivs(1)">&#10095;</div>
                            </div>
                          </div>
                        <input type="file" class="form-control mt-2" id="uploadButton">
                    </section>
                    <section class="col-9">
                        <section class="row" style="height: 20%;">
                            <section class="col-6 title-holder">
                                <label for="title">Title: </label>
                                <input type="text" class="form-control title" placeholder="Title">
                            </section>
                            <section class="col-6 price-holder">
                                <label for="price">Price:</label>
                                <input type="text" class="form-control price" placeholder="Price" id="price">
                            </section>
                        </section>
                        <section class="row" style="height: 80%;">
                            <section class="col">
                                <label>Description: </label>
                                <textarea name="message" class="form-control description"></textarea>
                            </section>
                        </section>
                    </section>
                </section>
                <section class="row" style="height: calc(50% - 100px);">
                    <section class="col-4 slider-holder">
                        <label for="slider1">Floor</label>
                        <input type="range" class="form-control-range mb-2" min="0" max="10" value="3" id="slider1">
                        <label for="slider2">Number of bedrooms</label>
                        <input type="range" class="form-control-range" min="0" max="50" value="3" id="slider2">
                    </section>
                    <section class="col-8">
                        <section class="row">
                            <section class="col info-holder">
                                <label for="adress">Adress: </label>
                                <input type="text" id="adress" class="form-control mb-2" placeholder="Chichago,USA">
                            </section>
                        </section>
                        <section class="row">
                            <section class="col info-holder">
                                <label for="owner">Owner: </label>
                                <input type="text" Id="owner" class="form-control mb-2" placeholder="Mr. John Smith">
                            </section>
                        </section>
                        <section class="row">
                            <section class="col info-holder">
                                <label for="contact">Contact number:</label>
                                <input id="phone" type="tel" name="phone">
                            </section>
                        </section>
    
                    </section>
                </section>
                <section class="row" style="height: 100px; display: flex; align-items: center;">
                    <input type="submit" value="Put on sale" class="btn btn-primary sell">
                </section>
            </form>
            </section>
    
    
        </section>
    </section>
`
var houseContent = `
<section class="row" style="height: inherit">
            <section class="col col-marg" style="height: inherit">
                <form style="height: inherit;">
                <section class="row" style="height:50%;">
                    <section class="col-3 image-holder">
                        <div class="w3-content w3-display-container">
                            <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" >
                            <div class="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)">&#10094;</div>
                            </div>
                            <img class="mySlides" src="upload.png" style="width:100%">
                            <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" >
                              <div class="w3-right w3-hover-text-khaki" onclick="plusDivs(1)">&#10095;</div>
                            </div>
                          </div>
                        <input type="file" class="form-control mt-2" id="uploadButton">
                    </section>
                    <section class="col-9">
                        <section class="row" style="height: 20%;">
                            <section class="col-6 title-holder">
                                <label for="title">Title: </label>
                                <input type="text" id="title" class="form-control title" placeholder="Title">
                            </section>
                            <section class="col-6 price-holder">
                                <label for="price">Price:</label>
                                <input type="text" class="form-control price" placeholder="Price" id="price">
                            </section>
                        </section>
                        <section class="row" style="height: 80%;">
                            <section class="col">
                                <label for="description">Description: </label>
                                <textarea id="description" name="message" class="form-control description"></textarea>
                            </section>
                        </section>
                    </section>
                </section>
                <section class="row" style="height: calc(50% - 100px);">
                    <section class="col-4 slider-holder">
                        <label for="slider1">Number of floors</label>
                        <input type="range" class="form-control-range mb-2" min="0" max="10" value="3" id="slider1">
                        <label for="slider2">Number of bedrooms</label>
                        <input type="range" class="form-control-range" min="0" max="50" value="3" id="slider2">
                    </section>
                    <section class="col-8">
                        <section class="row">
                            <section class="col info-holder">
                                <label for="adress">Adress: </label>
                                <input type="text" id="adress" class="form-control mb-2" placeholder="Chichago,USA">
                            </section>
                        </section>
                        <section class="row">
                            <section class="col info-holder">
                                <label for="owner">Owner: </label>
                                <input type="text" id="owner" class="form-control mb-2" placeholder="Mr. John Smith">
                            </section>
                        </section>
                        <section class="row">
                            <section class="col info-holder">
                                <label for="phone">Contact number:</label>
                                <input id="phone" type="tel" name="phone">
                            </section>
                        </section>
    
                    </section>
                </section>
                <section class="row" style="height: 100px; display: flex; align-items: center;">
                    <input type="submit" value="Put on sale" class="btn btn-primary sell">
                </section>
            </form>
            </section>

           
    
        </section>
    </section>`
    function house(){
        $(".container-start").hide();
        $(".house-container").html(houseContent);
        $(".house-container").show();
        const phoneInputField = document.querySelector("#phone");
        const phoneInput = window.intlTelInput(phoneInputField, {
            utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
        showDivs(slideIndex);
    }
        

    function apatment(){
        $(".container-start").hide();
        $(".apratment-container").html(apartmentContent);
        $(".apratment-container").show();
        const phoneInputField = document.querySelector("#phone");
        const phoneInput = window.intlTelInput(phoneInputField, {
            utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
        showDivs(slideIndex);
    }