import './footer.css';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [catFact, setCatFact] = useState(null);

  useEffect(() => {
    const getCatFact = async () => {
      try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        setCatFact(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCatFact();
  }, []);

  return (
    <footer>
      <p>© 2026 Stephen Zalalas</p>
      <p>🐱 cat fact</p>
    </footer>
  );
};

export default Footer;
