import './Card.css';

const Card = (props)=>{

    return (
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            src={props.imgSrc}
            className="img"
            alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">This is demo example</p>
            <a href="www.google.com" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
}

export default Card;