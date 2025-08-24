import { useContext, useState } from "react";
import { MovieContext } from "../context";
import { getImageUrl } from "../utils/cine-utility";
import MovieModal from "./MovieModal";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const { cartData, setCartData } = useContext(MovieContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleModalClose = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  //   function to add movie in the cart
  const handleAddToCart = (movie) => {
    const available = cartData.find((item) => item.id === movie.id);
    if (!available) {
      setCartData([...cartData, movie]);
    } else {
      console.log(
        `the movie ${movie.title} has been added to the cart already`
      );
    }
  };

  return (
    <>
      {isModalOpen && (
        <MovieModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <button
          onClick={() => handleMovieSelection(movie)}
          className="cursor-pointer"
        >
          <img
            className="h-1/6 object-cover"
            src={getImageUrl(movie.cover)}
            
            alt=""
          />
        </button>

        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating} />
          </div>
          <a
            onClick={() => handleAddToCart(movie)}
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm cursor-pointer"
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />
            <span className="dark:text-white">${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
