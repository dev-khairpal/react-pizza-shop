import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-400 bg-orange-500 px-4 py-3 uppercase sm:p-6">
      <Link to="/" className="tracking-[0.25rem]">
        <div className="flex items-center gap-2">
          <img src="/favicon.ico" alt="" />
          <span className="text-white">React Pizza Shop</span>
        </div>
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
