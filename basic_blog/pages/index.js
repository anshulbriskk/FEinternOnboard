import UsersPage from "./Static/users";
import axios from 'axios';
import { useRouter } from 'next/navigation'
// import UsersPage from '@/pages/Static/users';

// import Header from '@/components/storeOS/Header'

export default function Home() {

  // const fetchPosts = async () =>{
  //   const response = await axios.get('http://localhost:3000/api/posts');
  //   console.log(response);
  // }
  // fetchPosts();

  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg mb-6">This is a simple Next.js application.</p>

      <div>
        <UsersPage/>
      </div>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" 
        onClick={() => router.push('/Static/users')}
      >
        Blog Page
      </button>
    </div>
  );
}
