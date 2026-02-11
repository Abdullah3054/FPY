import Header from '../../components/Header/Header';
import ContactForm from '../../components/Forms/ContactForm';
import './contact.css';

const Contact = () => (
  <div>
    <Header />
    <main className="contact-wrap px-4 py-12 min-h-[80vh] grid place-items-center">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-5 text-center">Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  </div>
);

export default Contact;
