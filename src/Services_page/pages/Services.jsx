import ParticlesHome from '../../components/effects/ParticlesHome';
import Navbar from '../../components/layout/Navbar';


const Services = () => {
  return (
    <div className="service-container">
      <Navbar />  {/* Add the Navbar component */}
      <ParticlesHome />
      <h1>Blog Page</h1>
      <p>This is the blog page content.</p>
      {/* Add your blog content here */}
       {/* Add the Footer component */}
    </div>
  );
}
export default Services;