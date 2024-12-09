

const UsersPage = ({ data }) => {
    console.log(data);

    // Check for empty data array
    if (!data || data.length === 0) return <div>No data available</div>;

    return (
        <div>
            <h1>Users Page</h1>
            <ul>
                {data?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> 
        </div>
    );
};

export const getStaticProps = async () => {
    // Fetch data from the endpoint
    const response = await fetch("http://localhost:3000/api/posts");
    
    // console.log("->>>>>>>>",response);
    
    // Parse the response as JSON
    const data = await response.json();

    return {
        props: {
            data,
        },
    };
};

export default UsersPage;
