import React from "react";
import '../Card.css';

const Contact =()=>{

return (
  <div>
    <h4 className="tag">Welcome to Contact page</h4>
    <div className="container">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter name here"
        />
    
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Description
        </label>
        <textarea
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Describe here"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
        </div>
    </div>
    </div>
  </div>
);

}

export default Contact;