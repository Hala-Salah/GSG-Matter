import React from "react";
import "./style.css";

export const Information = () => {
  const data = [
    {
      title: "ARTISAN EMPLOYMENT DAYS CREATED",
      infoItems: ["123456"],
    },
    {
      title: "COUNTRIES INVOLVED TO DATE",
      infoItems: ["India", "China", "Sri Lanka"],
    },
    {
      title: "#MATTERTRIBE",
      infoItems: ["12 designers", "12 Factories"],
    },
  ];
  const [...information] = data;
  return (
    <>
     <p className="des">
            Our mission is threefold - to foster designer-artisan
            collaborations, inspire consumers to value provenance and process,
            and pioneer industry change and sustainability for rural textile
            communities.
          </p>
      {information.map((item) => {
      
        return (
          <>
          
          <div className="about-info">
            <p className="more-info-title">{item.title}</p>
            {item.infoItems.map((more)=>{
             return<><p className="more-info">{more}</p></>
            })}
            
          </div>
          </>
        );
      })}
    </>
  );
};

export default Information;
