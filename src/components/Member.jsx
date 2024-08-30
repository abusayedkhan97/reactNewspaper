import "./member.css";
import Developers from "./Data";
import { useState } from "react";

import Modal from "./Modal.jsx";

const Member = () => {

    const [member, setMember] = useState(Developers);  
    
    const [title, setName] = useState();
    const [desc, setSkill] = useState();
    const [photo, setPhoto] = useState();
    //   modal
      const [showModal, setShowModal] = useState(false);
      
          const openModal = () => setShowModal(true);
          const closeModal = () => setShowModal(false);


  const handleName = (e)=>{
    setName(e.target.value);  
  }  

  const handleSkill = (e)=>{
    setSkill(e.target.value);  
  }  

  const handlePhoto = (e)=>{
    setPhoto(e.target.value);  
  }  

  const handleAddMember = ()=>{
    if (!title || !desc || !photo) {
        alert("all field are required!");
    }else{
        setMember((prevState) => {
            return [{title,photo,desc}, ...prevState];
        });    
        setName("");
        setSkill("");
        setPhoto("");
        closeModal();
    }    
  }  
  

  return (
    <>
    
        <div className="App">
            <button onClick={openModal} className="add-new-post">Add New Post</button>
            <Modal show={showModal} onClose={closeModal}>
                <div className="form">
                    <input type="text" placeholder="Post Title" value={title} onChange={handleName}/>
                    <input type="text" placeholder="Post description" value={desc} onChange={handleSkill}/>
                    <input type="text" placeholder="Post photo" value={photo} onChange={handlePhoto}/>
                    <button onClick={handleAddMember}>Post</button>
                </div>
            </Modal>
        </div>
        
<hr />

      <div className="team-members">
        {member.map((item) => {
          return (
            <div className="member" key={item}>
              <img src={item.photo} alt="" />
              <h3>{item.title}</h3>
              <h5>{item.desc}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Member;
