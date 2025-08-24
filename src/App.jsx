import MovieList from "./cine/MovieList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="">
      <Header />
      <main>
        <div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList/>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
