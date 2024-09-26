import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick, link }) {
    const className = "m-2 inline-block rounded-full bg-yellow-400 px-3 py-2 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    if(to){
        return <Link to={to} className={className}>{children}</Link>
    }



    if(onClick){
      return (
        <button
        onClick={onClick}
        disabled={disabled}
         className={className}>
          {children}
        </button>
      );
    }
  return (
    <button
    disabled={disabled}
     className={className}>
      {children}
    </button>
  );
}
