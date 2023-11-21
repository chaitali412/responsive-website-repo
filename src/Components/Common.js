import computer from '../assets/computer.jpg'
import './Common.css';

const Common =(props)=>{

    return(
        <div>
            <div className="container-fluid">
                <div className="row my-auto vertical">
                <div className="col-10 ms-auto">
                    <div className="row">
                   <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                   <h4>Welcome to the {props.name} page !!! </h4><h3><strong>React JS Website</strong></h3>
                    <h2 className='my-3'>We are the team of developing responsive UI designs</h2>
                    <button className=" mt-3 btn btn-secondary">Contact New</button>
                    </div>
                    <div className='col-lg-6 order-1 order-lg-2 '>
                    {/* <img src={computer} className="img-fluid" alt='img1'></img> */}
                    <img src={props.imgPath} className="img-fluid" alt='img1'></img>
                    </div>
                    </div>
                 
                </div>
                </div>
            </div>
        </div>
    )
}

export default Common;