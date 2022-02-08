import ProductCard from "../components/ProductCard";

export default function Home({products}) {
  return (
    <section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our <span>products</span> 
        </h2>
      </div>
      <div className="row">
          {products.map(product => <ProductCard product={product}  key={product.id}></ProductCard>)}
      </div>
    </div>
  </section>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://149.28.209.208/azzoa-spa/api/products")
  const result = await res.json()
  const products = result.data.json_object.products.data

  return {
    props: {
      products,
    },
  }
}
