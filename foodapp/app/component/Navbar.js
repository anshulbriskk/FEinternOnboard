const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-gradient-to-r from-red-500 to-orange-500 z-10 fixed w-full">
      <div className="text-4xl text-white select-none">Zwigyto</div>
      <div className="flex gap-8 text-2xl text-white">
        <a href="/" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Breakfast</a>
        <a href="#" className="hover:underline">Lunch</a>
        <a href="#" className="hover:underline">Dinner</a>
        <button className="hover:underline">Dark Mode</button>
      </div>
    </nav>
  );
};

export default Navbar;
