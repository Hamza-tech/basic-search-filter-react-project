const ProductCard = ({ product }) => {
    return (
        <div>
            <div
                key={product.id}
                className="border rounded-lg p-4 bg-gray-50 hover:shadow-md transition"
            >
                <h2 className="font-semibold text-gray-700">{product.name}</h2>
                <p className="text-sm text-gray-500">
                    Category: {product.category}
                </p>
                <p className="mt-2 font-bold text-blue-600">
                    ${product.price}
                </p>
            </div>
        </div>
    )
}

export default ProductCard