import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <aside className=" h-screen fixed top-16 z-20 w-60 text-black rounded-md pb-16 lg:left-0 -left-96">
     <div className="flex flex-col items-center  space-y-8 bg-gray-100 h-full overflow-y-scroll  py-4 ">
     <div className="">
        <h2 className="text-xl font-semibold">Popular Subjects</h2>
        <ul className="flex flex-col space-y-4 mt-3 text-sm">
          <li>
            <Link to="/">Biographies & memoirs</Link>
          </li>
          <li>
            <Link to="/">Business & Money</Link>
          </li>
          <li>
            <Link to="/">Children's books</Link>
          </li>
          <li>
            <Link to="/">Computers & Technology</Link>
          </li>
          <li>
            <Link to="/">Parenting & Families</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <h2 className="text-xl font-semibold">Fiction</h2>
        <ul className="flex flex-col space-y-4 mt-3 text-sm">
          <li>
            <Link to="/">Adult</Link>
          </li>
          <li>
            <Link to="/">Children's & Young</Link>
          </li>
          <li>
            <Link to="/">General Fiction</Link>
          </li>
          <li>
            <Link to="/">Literature & Fiction</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <h2 className="text-xl font-semibold">Non-Fiction</h2>
        <ul className="flex flex-col space-y-4 mt-3 text-sm">
          <li>
            <Link to="/">Archeology</Link>
          </li>
          <li>
            <Link to="/">Architecture</Link>
          </li>
          <li>
            <Link to="/">Politics & Social Sciences</Link>
          </li>
          <li>
            <Link to="/">Current Events</Link>
          </li>
          <li>
            <Link to="/">Self Help</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <h2 className="text-xl font-semibold">Non-Fiction</h2>
        <ul className="flex flex-col space-y-4 mt-3 text-sm">
          <li>
            <Link to="/">Archeology</Link>
          </li>
          <li>
            <Link to="/">Architecture</Link>
          </li>
          <li>
            <Link to="/">Politics & Social Sciences</Link>
          </li>
          <li>
            <Link to="/">Current Events</Link>
          </li>
          <li>
            <Link to="/">Self Help</Link>
          </li>
        </ul>
      </div>
     </div>
    </aside>
  );
};

export default UserSidebar;
