document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the API
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            // Iterate over each product in the response
            data.products.forEach(product => {
                // Create elements for displaying product information
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
               

                const productName = document.createElement('h6');
                productName.textContent = product.title;
                
                const productcategory = document.createElement('h5');
                productcategory.textContent = product.category;

                const productPrice = document.createElement('p');
                productPrice.textContent = `Price: $${ product.price}`;
                const rate = document.createElement('h5');
                rate.textContent = ` Rating:  ${product.rating}`;
                const productImage = document.createElement('img');
                productImage.src = product.images[0];
                productImage.style.width = '180px'; // Set width to 200px
                productImage.style.height = '200px'; // Set height to 200px
            
                // Create a button for each product
                const buyButton = document.createElement('button');
                buyButton.textContent = 'Buy Now';

                // Add event listener to the button (optional)
                buyButton.addEventListener('click', function() {
                    // Handle button click action (e.g., navigate to product page)
                    console.log('Button clicked for product:', product.title);
                        // Navigate to product details page passing product id as query parameter
                        window.location.href = `product_details.html?id=${product.id}`;
                });

                // Append elements to product container
               
                productDiv.appendChild(productImage);
                productDiv.appendChild(productcategory);
                productDiv.appendChild(productName);
                productDiv.appendChild(productPrice);
                productDiv.appendChild(rate);
                productDiv.appendChild(buyButton); // Append the button after the price
                document.getElementById('productContainer').appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
