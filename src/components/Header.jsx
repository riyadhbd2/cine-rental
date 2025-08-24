import { useContext, useState } from "react";
import moon from "../assets/icons/moon.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import cart from "../assets/shopping-cart.svg";
import CartDetails from "../CartDetails";
import { MovieContext } from "../context";

const Header = () => {
  const [showCartModal, setShowCartModal] = useState(false);

  const { cartData,} = useContext(MovieContext);

  return (
    <>
      {showCartModal && <CartDetails setShowCartModal={setShowCartModal} />}

      <header>
        <nav className="container mx-auto flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={moon} width="24" height="24" alt="" />
              </a>
            </li>
            <li className="relative">
              <a
                onClick={() => setShowCartModal(true)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={cart} width="24" height="24" alt="" />
                {cartData.length > 0 && (
                  <div className="border text-center text-[10px] rounded-full absolute px-[6px] py-[1px] top-0 right-0 bg-red-500 text-white text-semibold">
                    {cartData.length}
                  </div>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
