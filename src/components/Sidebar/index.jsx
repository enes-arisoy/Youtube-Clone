import { categories } from "../../Constants";
import { Link } from "react-router-dom";

const Sidebar = ({ selectedCategory }) => {
  return (
    <aside>
      {categories.map((i, index) => (
        <Link key={index} to={`/?category=${i.path}`}>
          <div
            className={`flex items-center gap-3 py-4 px-2 md:text-lg cursor-pointer rounded hover:bg-[#414141]
          ${
            (i.path === selectedCategory ||
              (i.path === "/" && !selectedCategory)) &&
            "bg-[#2d2d2d]"
          }`}
          >
            <span className="max-md:text-2xl">{i.icon} </span>
            <span className="max-md:hidden">{i.name} </span>
          </div>

          {i.divider && <hr />}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
