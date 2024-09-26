import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSumbit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSumbit}>
      <input
        className="w-24 rounded-full bg-yellow-50 px-3 py-1 text-sm placeholder:text-stone-400 sm:w-64 focus:outline-none focus:ring focus:ring-yellow-600"
        placeholder="Search your order.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
