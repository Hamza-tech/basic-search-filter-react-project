const SortFilter = ({ sortedOption, setSortedOption }) => {
    return (
        <div>
            <select className='p-2 border rounded-lg focus focus:ring-blue-200 h-10' value={sortedOption} onChange={(e) => setSortedOption(e.target.value)}>
                <option value="default">Sort By</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="priceAZ">Price: A to Z</option>
                <option value="priceZA">Price: Z to A</option>
            </select>
        </div>
    )
}

export default SortFilter