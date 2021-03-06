const Product = require("../models/product");

// Home page
exports.getHomePage = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("pages/home", {
        products: products,
        pageTitle: "All products",
        path: "pages/home",
      });
    })
    .catch((err) => console.log(err));
};

// Contact page
exports.getContactPage = (req, res, next) => {
  res.render("pages/contacts");
};

// FAQ page
exports.getFAQPage = (req, res, next) => {
  res.render("pages/faq");
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((product) => {
      res.render("pages/product-detail", {
        product: product,
        pageTitle: product.title,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getCart = (req, res, next) => {
  console.log("req getCart => ", req.user);
  req.user
    .getCart()
    .then((cart) => {
      return cart.getProducts().then((products) => {
        res.render("pages/cart", {
          path: "/cart",
          products: products,
        });
      });
    })
    .catch((err) => console.log(err));
};