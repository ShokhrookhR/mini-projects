import React from 'react';
import Modal from './components/Modal';
import './index.scss';

function App() {
  const [isVisible, setisVisible] = React.useState(false);
  const changeVisibilityModal = () => {
    setisVisible(!isVisible);
  };
  return (
    <div className="App">
      <button className="open-modal-btn" onClick={changeVisibilityModal}>
        ✨ Открыть окно
      </button>
      {isVisible && <Modal changeVisibilityModal={changeVisibilityModal} />}
    </div>
  );
}

export default App;
