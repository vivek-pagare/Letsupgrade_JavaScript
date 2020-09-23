// guys i have made it a id based application as this is how to works in real world
// there are only 2 easy to understand changes read the code carefully

// new function getProductByID() is created check it out

let products = [
  {
    id: 1,
    name: "Blue shirt",
    size: "L",
    color: "Blue",
    price: 1200,
    image: "product1.jpg",
    description: "Good looking Blue tshirt",
  },
  {
    id: 2,
    name: "White checked Shirt",
    size: "M",
    color: "White",
    price: 1500,
    image: "product2.jpg",
    description: "Good looking White checked shirt",
  },

  {
    id: 3,
    name: "Red Shirt",
    size: "S",
    color: "Red",
    price: 900,
    image: "product3.jpg",
    description: "Good looking Red Shirt",
  },

  {
    id: 4,
    name: "Yellow Female Top",
    size: "M",
    color: "Yellow",
    price: 3000,
    image: "product4.jpg",
    description: "Good looking Yellow Top",
  },

  {
    id: 5,
    name: "Red Checked Female Top",
    size: "S",
    color: "Red",
    price: 1300,
    image: "product5.jpg",
    description: "Good looking Red Checked Top",
  },

  {
    id: 6,
    name: "Blue Traditional Top",
    size: "M",
    color: "Blue",
    price: 1500,
    image: "product6.jpg",
    description: "Good looking Blue Traditional Top",
  },

  {
    id: 7,
    name: "Maroon Tshirt",
    size: "L",
    color: "maroon",
    price: 500,
    image: "product7.jpg",
    description: "Good looking maroon tshirt",
  },

  {
    id: 8,
    name: "Black Tshirt",
    size: "M",
    color: "Black",
    price: 600,
    image: "product8.jpg",
    description: "Good looking Black tshirt",
  },

  {
    id: 9,
    name: "Green Tshirt",
    size: "S",
    color: "green",
    price: 700,
    image: "product9.jpg",
    description: "Good looking Green tShirt",
  },

  {
    id: 10,
    name: "Light pink Female Top",
    size: "M",
    color: "Light pink",
    price: 800,
    image: "product10.jpg",
    description: "Good looking light pink Top",
  },

  {
    id: 11,
    name: "White ckecked Female Top",
    size: "S",
    color: "White",
    price: 900,
    image: "product11.jpg",
    description: "Good looking White Checked Top",
  },

  {
    id: 12,
    name: "Light Blue Female Top",
    size: "M",
    color: "Light Blue",
    price: 1000,
    image: "product12.jpg",
    description: "Good looking Light Blue Top",
  },
];

function displayProducts(productsData, who = "productwrapper")
{
  let productsString = "";

  productsData.forEach(function (product, index)
  {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper")
    {
      productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
    } else if (who == "cart")
    {
      productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue)
{
  let searchedProducts = products.filter(function (product, index)
  {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id)
{
  return productArray.find(function (product)
  {
    return product.id == id;
  });
}

cart = [];
let cartCount = 0;

function alreadyAddedAlert(cartId)
{
  let foundCart = [];
  if (cart.length)
  {
    foundCart = cart.filter(cartItem =>
    {
      let searchString = cartItem.id + "";
      cartIdString = cartId + "";
      return searchString.indexOf(cartIdString.toUpperCase()) != -1;
    });
    return foundCart.length && foundCart[0].id === cartId;
  } else
  {
    return false;
  }
}

function addToCart(id)
{
  if (!alreadyAddedAlert(id))
  {
    // getting the product
    let pro = getProductByID(products, id);

    //   putting in cart
    cart.push(pro);
    cartCount++;
    document.getElementById('totalCartCount').innerHTML = cartCount;
    displayProducts(cart, "cart");
  } else
  {
    alert('Already in cart!');
  }
}

function removeFromCart(id)
{
  // getting the index based on id
  let index = cart.findIndex(function (product)
  {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  cartCount--;
  document.getElementById('totalCartCount').innerHTML = cartCount;

  displayProducts(cart, "cart");
}

let PriceFilteredProducts = [];
let minValue = 0;
let maxValue = 0;

function filterProductsByPrice(minValue, maxValue)
{
  PriceFilteredProducts = products.filter(function (product, index)
  {
    return (minValue ? minValue : product.price) <= product.price && (maxValue ? maxValue : product.price) >= product.price;
  });
  displayProducts(PriceFilteredProducts);
}

function minPrice(searchPrice)
{
  minValue = searchPrice;
  filterProductsByPrice(minValue, maxValue);
}

function maxPrice(searchPrice)
{
  maxValue = searchPrice;
  filterProductsByPrice(minValue, maxValue);
}
