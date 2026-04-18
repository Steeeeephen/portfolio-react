import './footer.css';
import { useState } from 'react';

const Footer = () => {
  const [catFact, setCatFact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCatFact = async () =>  {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setCatFact(data.fact);
  }

  const handleModal = () => {
    if(!isModalOpen){
      setIsModalOpen(true)
      handleCatFact()
    } else
        setIsModalOpen(false)
      setCatFact(null)
  }

  return (
      <>
        <footer>
          <p>© 2026 Stephen Zalalas</p>
          <button onClick={handleModal} id="cat-fact">🐱cat fact</button>
        </footer>

        {isModalOpen &&(
            <div className="modal-overlay" onClick={()=>{setIsModalOpen(false)}}>
              <div className="cat-fact-modal" onClick={(e) => e.stopPropagation()}>                <div className="cat-fact-modal__text">
                  <p>"{catFact}"</p>
                </div>

                <div className="gandalf">
                  <span>--Gandalf</span>
                  <img src="/gandalf.jpg" className="modal-img" alt="gandalf the grey cat" />
                </div>
              </div>
            </div>
        )}
      </>
  );
};

export default Footer;
