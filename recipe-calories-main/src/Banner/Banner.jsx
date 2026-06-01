const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto mt-6 px-4">
      <div
        className="h-[60vh] md:h-[80vh] rounded-xl bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="bg-black/60 p-8 md:p-12 rounded-xl text-center max-w-2xl">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
            Discover Delicious Recipes <br /> with Calorie Counts
          </h1>
          <p className="text-gray-200 mt-4 text-lg">
            Eat smart. Cook better. Track calories easily.
          </p>
          <div className="space-y-5 md:space-y-0">
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
              Explore Now
            </button>
            <button>
              <span className="ml-0 md:ml-4 mt-6 bg-white hover:bg-gray-100 text-orange-500 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                Our Feedback
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="my-14">
        <h2 className="text-3xl font-bold text-black text-center">
          Our Recipes
        </h2>
        <p className="text-gray-600 text-center mt-2 md:w-3/4 mx-auto">
          Just knowing you don't have the answers is a recipe for humility,
          openness, acceptance, forgiveness, and an eagerness to learn.
        </p>
      </div>
    </section>
  );
};

export default Banner;
