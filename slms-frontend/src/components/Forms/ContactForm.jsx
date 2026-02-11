import { useState } from 'react';
import Button from '../UI/Button';

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  if (sent) return <p className="bg-blue-50 p-4 border border-blue-200 rounded-lg">Message sent successfully. Our team will contact you shortly.</p>;

  return (
    <form className="space-y-4 bg-white p-6 rounded-xl card-shadow" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <input className="w-full border rounded-lg px-3 py-2" placeholder="Name" required />
      <input className="w-full border rounded-lg px-3 py-2" placeholder="Email" type="email" required />
      <textarea className="w-full border rounded-lg px-3 py-2" rows="4" placeholder="Message" required />
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;
