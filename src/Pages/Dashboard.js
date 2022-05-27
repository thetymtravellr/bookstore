import React, { useState } from "react";
import Header from '../Components/Header';
import Modal from '../Components/Modal';

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
   <>
    <main className="w-full">
        <Header></Header>
      <div>
      <h1>Dashboard</h1>
      <button onClick={() => setOpenModal(true)} className="btn">
        Open Modal
      </button>

      {openModal && <Modal close={setOpenModal}>
          <div>
          <h1 className="title">title</h1>
          <p className="body">body</p>
          </div>
          </Modal>}
    </div>
    </main>
  
   </>
  );
};

export default Dashboard;
