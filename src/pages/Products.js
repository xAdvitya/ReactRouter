import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">BOOK</Link>
        </li>
        <li>
          <Link to="/products/p2">BOTTLE</Link>
        </li>
        <li>
          <Link to="/products/p3">BOX</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
