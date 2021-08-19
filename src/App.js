import React, { Component } from 'react';
import './App.css'

const ProductDetails = [

    {

        ProductName: 'Tshirt',
        Amount: 'Rs 800',
        Rating: 4,


    },

    {

        ProductName: 'Shirt',
        Amount: 'Rs 1200',
        Rating: 5,


    },

    {

        ProductName: 'Pants',
        Amount: 'Rs 1500',
        Rating: 3,


    }

]

class App extends Component {

    constructor() {
        super();

        this.state = {

            Cart: 0,
            ProductName: '',
            Amount: '',
            Products: []
        };


    }

    componentDidMount() {

        this.getproductdetails();
    }

    getproductdetails = () => {


        this.setState({ Products: ProductDetails });


    }

    Addtocart = () => {
        
        this.setState({ Cart: this.state.Cart + 1 });
        console.log(this.state.Cart)
    }

    button = () => {

        if (!this.state.Cart) {
            return <button class="btn btn-outline-dark mt-auto" onClick={() => this.Addtocart()}  >Add to cart</button>

        }

        else {

            return <button class="btn btn-outline-dark mt-auto" onClick={() => this.Addtocart()} disabled>Add to cart</button>
        }
    }

    Removecart = () => {
     if(!this.state.Cart){

      alert("No Item In Cart")
     }

     else{
        this.setState({ Cart: 0 });

     }

    }
    renderinputfield = (ratingvalue) => {
        if (ratingvalue == 1) {

            return <div class="bi-star-fill"></div>
        }

        else if (ratingvalue == 2) {

            return (
                <>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                </>);
        }

        else if (ratingvalue == 3) {

            return (
                <>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                </>);

        }

        else if (ratingvalue == 4) {

            return (
                <>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                </>);

        }

        else {

            return (
                <>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                </>);
        }
    }

    render() {


        return (

            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container px-4 px-lg-5">
                        <a class="navbar-brand" href="#!">Start Bootstrap</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#!">All Products</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                        <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <div class="cart-button">
                                <a> <i class="bi-cart-fill me-1"></i>
                                    Cart
                                    <span class="badge bg-dark text-white ms-1 rounded-pill">{this.state.Cart}</span>
                                </a>
                                <div class="cart-dropdown">
                                <button class="btn btn-outline-dark mt-auto" onClick={() => this.Removecart()}  >Remove cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <header class="bg-dark py-5">
                    <div class="container px-4 px-lg-5 my-5">
                        <div class="text-center text-white">
                            <h1 class="display-4 fw-bolder">Shop in style</h1>
                            <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                        </div>
                    </div>
                </header>
                <section class="py-5">
                    <div class="container px-4 px-lg-5 mt-5">
                        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {this.state.Products.map(product => {
                                return (
                                    <div class="col mb-5">
                                        <div class="card h-100">

                                            <div class="badge bg-dark text-white position-absolute" >Sale</div>

                                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                            <div class="card-body p-4">
                                                <div class="text-center">

                                                    <h5 class="fw-bolder">{product.ProductName}</h5>

                                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                                        {this.renderinputfield(product.Rating)}
                                                    </div>

                                                    {product.Amount}


                                                </div>
                                            </div>

                                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                <div class="text-center">
                                                    {this.button()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </>
        );
    }

}

export default App;
