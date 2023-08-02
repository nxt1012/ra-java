import ClientSection from "./components/ClientSection";
import DetailSection from "./components/DetailSection";
import FindSection from "./components/FindSection";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import InfoSection from "./components/InfoSection";
import ProductsSection from "./components/ProductsSection";
import SignSection from "./components/SignSection";
import SliderSection from "./components/SliderSection";

function App() {
  const products = [
    {id: 1, img: "images/p1.png", price: "$120"},
    {id: 2, img: "images/p2.png", price: "$110"},
    {id: 3, img: "images/p3.png", price: "$150"},
    {id: 4, img: "images/p4.png", price: "$150"},
    {id: 5, img: "images/p5.png", price: "$150"},
    {id: 6, img: "images/p6.png", price: "$150"},
    {id: 7, img: "images/p7.png", price: "$150"},
    {id: 8, img: "images/p8.png", price: "$150"},
    {id: 9, img: "images/p9.png", price: "$150"},
    {id: 10, img: "images/p10.png", price: "$150"},
    {id: 11, img: "images/p11.png", price: "$150"},
    {id: 12, img: "images/p12.png", price: "$150"},
  ]
  return (
    <div>
      <>
        <div className="hero_area">
          {/* header section strats */}
          <HeaderSection />
          {/* end header section */}
          {/* slider section */}
          <SliderSection />
          {/* end slider section */}
        </div>
        {/* detail section */}
        <DetailSection />
        {/* end detail section */}
        {/* products section */}
        <section className="products_section">
        <div className="heading_container">
          <h2>New Products In Store</h2>
          <p>Featured Product Just Arrived</p>
        </div>
        <div className="container layout_padding">
          <div className="product_container">
            {products.map((product, index) => <ProductsSection img={product.img} price={product.price} />)}
          </div>
        </div>
      </section>
              {/* end products section */}
        {/* find section */}
        <FindSection />
        {/* end find section */}
        {/* client section */}
        <ClientSection />
        {/* end client section */}
        {/* sign section */}
        <SignSection />
        {/* end sign section */}
        {/* info section */}
        <InfoSection />
        {/* end info section */}
        {/* footer section */}
        <FooterSection />
        {/* footer section */}
      </>
    </div>
  );
}

export default App;
