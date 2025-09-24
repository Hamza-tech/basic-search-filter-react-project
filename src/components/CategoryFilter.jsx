const CategoryFilter = ({ category, setCategory }) => {
    return (
        <div className='flex gap-2'>
            <select className='p-2 border rounded-lg focus focus:ring-blue-200 h-10' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>All</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Books</option>
            </select>
        </div>
    )
}

export default CategoryFilter