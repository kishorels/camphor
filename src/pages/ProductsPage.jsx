import Products from '../components/Products';

export default function ProductsPage() {
  return (
    <div className="page-fade-in pt-navbar">
      <div className="page-header">
        <h1 className="page-title text-center">Our Product Range</h1>
      </div>
      <Products />
    </div>
  );
}
