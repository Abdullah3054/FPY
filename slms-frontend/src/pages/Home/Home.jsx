import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/UI/Button';
import { features } from '../../data/dummyData';
import './home.css';

const Home = () => (
  <div>
    <Header />
    <section className="hero px-4 py-20 text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold">Smart Learning Management System</h1>
      <p className="max-w-2xl mx-auto mt-4">A scalable and modern LMS platform for students, teachers, and administrators.</p>
      <div className="mt-8 flex justify-center gap-4">
        <Button>Get Started</Button>
        <Button variant="secondary">Explore Features</Button>
      </div>
    </section>
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center">About SLMS</h2>
      <p className="text-slate-600 mt-3 text-center max-w-3xl mx-auto">SLMS empowers institutions with role-based experiences, analytics, and seamless digital learning delivery.</p>
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {features.map((feature) => (
          <article key={feature.title} className="bg-white p-6 rounded-xl card-shadow hover:-translate-y-1 transition">
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-slate-600 text-sm">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default Home;
