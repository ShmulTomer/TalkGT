
export default function GlobalFilter({ filter, setFilter }) {
    return (
      <>
        <p> <b>Search Complaints </b></p>
        <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
      </>
    );
  }