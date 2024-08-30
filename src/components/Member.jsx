import "./member.css";
import Developers from "./Data";
import { useState } from "react";


const Member = () => {

    const [member] = useState(Developers);  
    

  

  return (
    <>
    

        
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
