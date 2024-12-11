import axios from "axios";
import { useRouter } from "next/navigation";

const UsersPage = (props) => {
  const data = props.data;
  //   console.log("inside user page", data);
  const router = useRouter();

  if (!data || data.length === 0)
    return <div className="text-center text-red-500">No data available</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Users Page</h1>
      <button
        className="px-4 py-2 m-4  bg-yellow-500 text-white rounded hover:bg-green-700"
        onClick={() => router.push("/")}>
        Home
      </button>

      <div className=" space-y-4">
        {data.map((post) => (
          <div key={post.id} className="mb-2 text-lg">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="font-semibold text-xl text-yellow-500">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-700">{post.content}</p>
              <p className="mt-1 text-sm text-gray-500">By {post.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await axios.get("http://localhost:3000/api/posts");
  const data = response.data;
  console.log("inside getStatic", data);

  return {
    props: {
      data,
    },
  };
};

export default UsersPage;
