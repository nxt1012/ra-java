import CardDetails from "./components/CardDetails";
import CartItem from "./components/CartItem";
import NavigationButton from "./components/NavigationButton";
import ShoppingCartTotal from "./components/ShoppingCartTotal";

// TODO: Tổng kết lại cách truyền props trong Class Component
function App() {
  const cart = [
    {
      id: 1,
      productName: "Iphone 11 pro",
      description: "256GB, Navy Blue",
      price: "$900",
      quantity: 2,
      img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
    },
    {
      id: 2,
      productName: "Samsung galaxy Note 10",
      description: "256GB, Navy Blue",
      price: "$900",
      quantity: 2,
      img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
    },
    {
      id: 3,
      productName: "Canon EOS M50",
      description: "Onyx Black",
      price: "$1199",
      quantity: 1,
      img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp",
    },
    {
      id: 4,
      productName: "MacBook Pro",
      description: "1TB, Graphite",
      price: "$1799",
      quantity: 1,
      img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp",
    },
  ];
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <NavigationButton />
                    <hr />
                    <ShoppingCartTotal />
                    {cart.map((product, index) => (
                      <CartItem id={product.id} productName={product.productName} description={product.description} price={product.price} quantity={product.quantity} img={product.img}/>
                    ))}
                    {/* classNem="mb-lg-0" */}
                  </div>
                  <CardDetails />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
