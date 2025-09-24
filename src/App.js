
import { useEffect, useState } from 'react';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import SortFilter from './components/SortFilter';


const mockProducts = [
  { id: 1, name: "iPhone 15", category: "Electronics", price: 999 },
  { id: 2, name: "MacBook Air", category: "Electronics", price: 1299 },
  { id: 3, name: "T-Shirt", category: "Clothing", price: 25 },
  { id: 4, name: "Jeans", category: "Clothing", price: 50 },
  { id: 5, name: "Harry Potter", category: "Books", price: 15 },
  { id: 6, name: "Lord of the Rings", category: "Books", price: 20 },
  { id: 7, name: "iPad Pro", category: "Electronics", price: 799 },
  { id: 8, name: "Shoes", category: "Clothing", price: 60 },
  { id: 9, name: "Game of Thrones", category: "Books", price: 30 },
  { id: 10, name: "AirPods", category: "Electronics", price: 199 },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [sortedOption,setSortedOption] = useState('default');
  const [loading, setLoading] = useState(true);


  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.price.toString().includes(searchTerm.toLowerCase());
    const matchesCategory = category == 'All' || product.category === category;

    return matchesSearch && matchesCategory;
  });

  let sortedProducts = [...filteredProducts];
  if(sortedOption === 'priceLowHigh') {
    sortedProducts = [...filteredProducts].sort((a,b) => a.price - b.price);
  }
  else if(sortedOption === 'priceHighLow') {
    sortedProducts = [...filteredProducts].sort((a,b) => b.price - a.price);
  }
  else if(sortedOption === 'priceAZ'){
    sortedProducts = [...filteredProducts].sort((a,b) => a.name.localeCompare(b.name));
  }
  else if(sortedOption === 'priceZa'){
    sortedProducts = [...filteredProducts].sort((a,b) => b.name.localeCompare(a.name))
  }

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1200)
  },[]);


  let content;
  if(loading) {
    content = <p>Loading ...</p>
  }
  else {
    content = (
      <div>
          <ProductList products={sortedProducts} />
      </div>
    )
  }
  
  return (
    <>
      <div className='min-h-screen bg-gray-100 p-6'>
        <div className='max-w-4xl rounded-lg bg-white mx-auto shadow-md p-6'>
          <h1 className='text-2xl font-bold mb-4'>Search with products</h1>
          <div className='flex gap-1'>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CategoryFilter category={category} setCategory={setCategory} />
            <SortFilter sortedOption={sortedOption} setSortedOption={setSortedOption} />
          </div>
          <div className='mt-5'>
            {content}
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
