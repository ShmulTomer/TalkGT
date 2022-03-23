export default function ColumnFilter({ column }) {
    const { filterValue, setFilter, preFilteredRows } = column;
    const count = preFilteredRows.length;
    return (
      <>
        
        <input
          value={filterValue || ""}
          onChange={(e) => setFilter(e.target.value)}
          placeholder={`${count} results`}
        />
        <p>
          
        </p>
      </>
    );
  }