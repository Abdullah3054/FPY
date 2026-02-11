import './footer.css';

const Footer = () => (
  <footer className="footer-wrap text-slate-200 mt-16">
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between gap-3">
      <p>© {new Date().getFullYear()} Smart Learning Management System</p>
      <p>Built for BSCS Final Year Project.</p>
    </div>
  </footer>
);

export default Footer;
