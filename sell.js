var slideIndex = 1;
let type ='';
let sale_or_rent=''
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
  
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
  
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove('activeimg');
      x[i].style.display='none';
      x[i].style.opacity = 0;
      x[i].style.visibility = 'hidden';
    }
  
    x[slideIndex - 1].classList.add('activeimg');
    x[slideIndex - 1].style.display='block';
    x[slideIndex - 1].style.opacity = 1;
    x[slideIndex - 1].style.visibility = 'visible';
  }
function createContent(sale_or_rent, type){
if(type === "apartment"){ 
    var apartmentContent = `
    <section class="row" style="height: inherit">
                <section class="col col-marg" style="height: inherit">
                    <form style="height: inherit;">
                    <section class="row" style="height:50%;">
                        <section class="col-3 image-holder" >
                            <div class="w3-content w3-display-container">
                                <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" >
                                <div class="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)"></div>
                                </div>
                                <div id="imageHolder" style="min-width: 100%; min-height: 370px; overflow: hidden;">
                                <label for="imageUpload" class="upload">
                                <img src="upload.png" class="mySlides" alt="Upload Image" style="cursor: pointer; width: 100%;">
                                </label>
                                <input type="file" id="imageUpload" style="display: none;">
                                <button type="button" class="delete" onclick="deleteImage()" style=""></button>
                                </div>
                                <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" >
                                  <div class="w3-right w3-hover-text-khaki" onclick="plusDivs(1)"></div>
                                </div>
                              </div>
    
                        </section>
                        <section class="col-9">
                            <section class="row" style="height: 20%;">
                                <section class="col-6 title-holder">
                                    <label for="title">Title: </label>
                                    <input type="text" class="form-control title" id="title" placeholder="Title">
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
                            <label for="slider1">On the <span id="floorValue">3</span> floor.</label>
                            <input type="range" class="form-control-range mb-2" min="0" max="86" value="3" id="slider1">
                            <label for="slider2">Number of bedrooms : <span id="bedroomValue">3</span></label>
                            <input type="range" class="form-control-range" min="0" max="20" value="3" id="slider2">
                        </section>
                        <section class="col-8 col-custom">
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
                        <input type="submit" onclick="gatherFormData(event);" value="Put on ${sale_or_rent}" class="btn btn-primary sell">
                    </section>
                </form>
                </section>
        
        
            </section>
        </section>
        <script>
            document.getElementById('imageUpload').addEventListener('change', handleFileSelect);
            setupSlider('slider1' , 'floorValue');
            setupSlider('slider2', 'bedroomValue');
        </script>
    `;
return apartmentContent;
}
else if(type === "house"){
var houseContent = `
<section class="row" style="height: inherit">
            <section class="col col-marg" style="height: inherit">
                <form style="height: inherit;">
                <section class="row" style="height:50%;">
                    <section class="col-3 image-holder">
                        <div class="w3-content w3-display-container">
                            <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" >
                            <div class="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)"></div>
                            </div>
                            <div id="imageHolder" style="min-width: 100%; min-height: 370px; overflow: hidden;">
                            <label for="imageUpload" class="upload">
                            <img src="upload.png" class="mySlides" alt="Upload Image" style="cursor: pointer; width: 100%;">
                            </label>
                            <input type="file" id="imageUpload" style="display: none;">
                            <button type="button" class="delete" onclick="deleteImage()" style=""></button>
                            </div>
                            <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" >
                              <div class="w3-right w3-hover-text-khaki" onclick="plusDivs(1)"></div>
                            </div>
                          </div>
                       
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
                        <label for="slider1">Number of floors : <span id="floorValue">3</span></label>
                        <input type="range" class="form-control-range mb-2" min="0" max="10" value="3" id="slider1">
                        <label for="slider2">Number of bedrooms : <span id="bedroomValue">3</span></label>
                        <input type="range" class="form-control-range" min="0" max="50" value="3" id="slider2">
                    </section>
                    <section class="col-8 col-custom">
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
                    <input type="submit" onclick="gatherFormData(event);" value="Put on ${sale_or_rent}" class="btn btn-primary sell">
                </section>
            </form>
            </section>

           
    
        </section>
    </section>
    <script>
        document.getElementById('imageUpload').addEventListener('change', handleFileSelect);
        setupSlider('slider1' , 'floorValue');
        setupSlider('slider2', 'bedroomValue');
    </script>`;

    return houseContent;}
}

    function house(){
        houseContent = createContent(sale_or_rent,"house");
        $(".container-start").hide();
        $(".house-container").html(houseContent);
        $(".house-container").show();
        const phoneInputField = document.querySelector("#phone");
        const phoneInput = window.intlTelInput(phoneInputField, {
            utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
        showDivs(slideIndex);
        type="house";
        
    }
        

    function apatment(){
        apartmentContent = createContent(sale_or_rent,"apartment");
        $(".container-start").hide();
        $(".apratment-container").html(apartmentContent);
        $(".apratment-container").show();
        const phoneInputField = document.querySelector("#phone");
        const phoneInput = window.intlTelInput(phoneInputField, {
            utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
        showDivs(slideIndex);
        type = "apartment";
        
    }

    
    let indexa=1;
    function handleFileSelect(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
          const previewContainer = document.getElementById('imageHolder');
          const imgElement = document.createElement('img');
          imgElement.src = e.target.result;
          imgElement.className='mySlides'
          imgElement.style.maxWidth = '100%';
          imgElement.style.maxHeight = '300px';

          
          previewContainer.insertBefore(imgElement, previewContainer.firstChild);
          showDivs(indexa+2);
          indexa++;
        };

        reader.readAsDataURL(file);
      }
      fileInput.value = '';
    }

    function deleteImage(){
        var x = document.getElementById('imageHolder');
        if(x.children[slideIndex-1].className === "upload"){
            console.log("delete");
        }else{
            x.removeChild(x.children[slideIndex-1]);
            slideIndex--;
            showDivs(indexa+2);
            indexa--;
        }
        
    }

    function setupSlider(inputId, outputId) {
        const rangeInput = document.getElementById(inputId);
        const outputElement = document.getElementById(outputId);
  
        rangeInput.addEventListener('input', function() {
          outputElement.textContent = this.value;
        });
      }
function gatherFormData(event) {
        event.preventDefault(); 
  

        const title = document.getElementById('title').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;
        const floorValue = document.getElementById('slider1').value;
        const bedroomValue = document.getElementById('slider2').value;
        const address = document.getElementById('adress').value;
        const owner = document.getElementById('owner').value;
        const phone = document.getElementById('phone').value;
        const typeReceved = type;
        const imageSources = [];
        const images = document.querySelectorAll('.mySlides');
        for (let i = 0; i < images.length - 1; i++) {
            const compressedImage = LZString.compressToBase64(images[i].src);
            imageSources.push(images[i].src);
          }
          
        const formData = {
          sale_or_rent: sale_or_rent,
          id:'',
          images: imageSources,
          title: title,
          address: address,
          rating: '',
          price: price,
          phone: phone,
          owner: owner,
          floorValue: floorValue,
          bedroomValue: bedroomValue,
          description: description,
          type: typeReceved
        };
  

        console.log(formData);
       
       const jsonFileName = sale_or_rent === 'sale' ? 'buy.json' : 'rent.json';
        fetch(`http://localhost:3000/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: 'include', 
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            // window.location.href = "./Buy.html";
      }
      function rent(){
        sale_or_rent = 'rent';
        document.querySelector(".first").style.display="none";
        document.querySelector(".second").style.display="grid";
      }
      function sell(){
        sale_or_rent = 'sale';
        document.querySelector(".first").style.display="none";
        document.querySelector(".second").style.display="grid";
      }