import './App.css';
import Home from './Components/Home';
import BlogDataProvider from './Context/BlogData';

function App() {
  return (
    <BlogDataProvider>
      <div className=' text-3xl underline '>Blog Page </div>
      <Home/>
    </BlogDataProvider>
  );
}

export default App;
