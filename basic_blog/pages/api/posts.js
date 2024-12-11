// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function posts(req, res) {
  // Mock blog posts data
  const post = [
      {
          id: 1,
          title: "Understanding Next.js Project Structure",
          content: "A detailed guide on structuring your Next.js project...",
          author: "John Doe",
          date: "2024-12-05"
      },
      {
          id: 2,
          title: "Getting Started with Tailwind CSS",
          content: "Learn how to integrate Tailwind CSS into your Next.js project...",
          author: "Jane Smith",
          date: "2024-12-04"
      },
      {
          id: 3,
          title: "Building Reusable Components",
          content: "Tips and tricks for creating reusable components in React...",
          author: "Alice Johnson",
          date: "2024-12-03"
      }
  ];

  // Respond with the mock data
  res.status(200).json(post);
}
