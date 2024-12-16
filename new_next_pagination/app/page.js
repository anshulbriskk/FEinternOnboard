import BlogDataContext from "@/context/BlogDataContext";
import HomeComponent from "@/components/HomeComponent";

export default function HomePage() {
  return (
    <BlogDataContext>
      <HomeComponent />
    </BlogDataContext>
  );
}
