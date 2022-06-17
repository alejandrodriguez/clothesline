function Product(props) {
    return props.inShoppingCart ? (
        <div className="Product-In-Cart">
            <img
                src={props.product.src}
                alt={props.product.name}
                className={props.product.className}
            />
            <div>{props.product.name}</div>
            <div>${props.product.price}</div>
            <div className="quantity-wrapper">
                <button
                    onClick={() =>
                        props.handleQuantityChange("subtract", props.product)
                    }
                >
                    &#8722;
                </button>
                <div>Quantity: {props.product.quantityInCart}</div>

                <button
                    onClick={() =>
                        props.handleQuantityChange("add", props.product)
                    }
                >
                    &#43;
                </button>
            </div>
            <button
                onClick={() => props.handleQuantityChange(0, props.product)}
                className="remove-btn"
            >
                Remove
            </button>
        </div>
    ) : (
        <div className="Product">
            <img
                src={props.product.src}
                alt={props.product.name}
                className={props.product.className}
            />
            <div>{props.product.name}</div>
            <div>${props.product.price}</div>
            <div>
                <button
                    className="add-to-cart"
                    onClick={() =>
                        props.handleQuantityChange("add", props.product)
                    }
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Product;