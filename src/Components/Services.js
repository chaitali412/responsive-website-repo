import React from "react";
import Card from "../Card";
import Data from './../Data';
import '../Card.css'

const Services =()=>{


    return (
      <div>
        <div className="container-fluid mb-5">
          <div className="row ">
            <div className="col-10 mx-auto">
              <h4 className="tag">Welcome to Services page</h4>
              <div className="row gy-4">
              {
                Data.map((d,index)=>{
                   return <Card key={index} imgSrc={d.imgSrc} title={d.title}/>
                })
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Services;