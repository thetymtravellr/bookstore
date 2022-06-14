import UserSidebar from "../../Components/Sidebars/UserSidebar";
import Products from "./Products";

const Home = () => {
  return (
    <div className="mt-6 relative">
        <UserSidebar/>
      <main className="lg:ml-72 px-6">
        <Products />
      </main>
    </div>
  );
};

export default Home;
