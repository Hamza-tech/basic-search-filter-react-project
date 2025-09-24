export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div>
            <div className="flex-1 gap-2">
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search" className="flex-1 p-2 border rounded-lg shadow-sm h-10" />
            </div>
        </div>
    )
}