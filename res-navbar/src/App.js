import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-between flex-wrap :flex-col sm:flex-nowrap bg-blue-400 p-2">
      <div className="ml-4 sm:ml-0">
        <a href="/">Startup</a>
      </div>
      <div className="flex space-x-2 sm:space-x-4 my-2 sm:my-0 flex-wrap sm:flex-nowrap justify-center">
        <span>Get App</span>
        <span>Feature About</span>
        <span>F&Q</span>
      </div>
      <div className="flex space-x-2 mr-4 flex-wrap sm:flex-nowrap justify-center">
        <a href="#">
          <button className="px-4 py-2 min-w-[80px] bg-red-700 text-white rounded">
            Sign in
          </button>
        </a>
        <a href="#">
          <button className="px-4 py-2 min-w-[80px] bg-red-700 text-white rounded">
            Sign Up
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
