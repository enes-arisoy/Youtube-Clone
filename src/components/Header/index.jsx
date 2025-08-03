import { IoIosVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaBell } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  // form tetiklenince çalışacak fonksiyon
  const handleSubmit = (e) => {
    // sayfa yenilenmesini engelle
    e.preventDefault();
    // formdan gelen veriyi al
    const formText = e.target[0].value;
    // !result sayfasına yönlendir
    // formdan gelen veriyi url'e parametre ekle
    navigate(`/results/search?query=${formText}`);
  };
  return (
    <header className="px-2 sm:px-4 py-[17px] flex justify-between items-center">
      <div className="flex items-center gap-5">
        <FaBars className="size-6" />
        <Link className="flex gap-1.5 items-center" to="/">
          <img
            src="Youtube_logo.png"
            className=" w-[41px] sm:w-12"
            alt="youtube-logo"
          />
          <h1 className="text-[21px] sm:text-2xl font-mono hidden sm:block">YouTube</h1>
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex border border-gray-400 rounded-[20px]"
      >
        <input
          type="search"
          className=" px-2 bg-zinc-800 sm:px-5 py-1 sm:py-2 border border-transparent rounded-l-[20px]"
        />
        <button className="px-3 sm:px-4 sm:text-2xl bg-zinc-700 rounded-r-[20px] cursor-pointer duration-300">
          <CiSearch />
        </button>
      </form>
      {/* right */}

      <div className="flex justify-between items-center gap-3 cursor-pointer max-sm:hidden">
        <FaBell className="hover:text-gray-400 transition duration-200" />
        <MdVideoLibrary className="hover:text-gray-400 transition duration-200" />
        <IoIosVideocam className="hover:text-gray-400 transition duration-200" />
      </div>
    </header>
  );
};

export default Header;
