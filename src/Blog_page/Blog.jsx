import ParticlesHome from "../components/effects/ParticlesHome";
import Navbar from "../components/layout/Navbar";  // Capital N for component name
import { useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";

const Blog = () => {
  return (
    <div className="blog-container">
      <Navbar />  {/* Add the Navbar component */}
      <ParticlesHome />
      <h1>Blog Page</h1>
      <p>This is the blog page content.</p>
      {/* Add your blog content here */}
       {/* Add the Footer component */}
    </div>
  );
}
export default Blog;