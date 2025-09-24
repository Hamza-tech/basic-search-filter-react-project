import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
    if (products.length === 0) {
        return (<p>No Product Found</p>);
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList