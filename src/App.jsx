import { useState } from "react";
import MovieList from "./cine/MovieList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { MovieContext } from "./context";
import Footer from "./Footer";

const App = () => {
  const [cartData, setCartData] = useState([]);
  console.log(cartData);
  
  return (
    <>
      <MovieContext.Provider value={{cartData, setCartData}}>
        <Header />
        <main>
          <div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
};

export default App;
