import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const fetchProducts = async (start) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  

  return (
    <div className="flex justify-center items-center  gap-5 flex-col">
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products
          .slice(count * 5, count * 5 + 5)
          .map((product) => <div key={product.id}>{product.title}</div>)
      )}
      <div className="w-full flex justify-center text-xl gap-6">
        <button
          onClick={() => {
            if (count > 0) {
              setCount((prev) => prev - 1);
            }
          }}
        >{`<`}</button>
        <p>{count}</p>
        <button
          onClick={() => {
            if (count < 3) {
              setCount((prev) => prev + 1);
            }
          }}
        >{`>`}</button>
      </div>
    </div>
  );
}

export default App
