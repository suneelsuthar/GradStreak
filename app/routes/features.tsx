import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Features Page</h1>
          <p className="text-gray-600">Content coming soon</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
