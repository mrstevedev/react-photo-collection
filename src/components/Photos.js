import React, { Fragment } from "react";
import CameraInfo from "./CameraInfo";
import LazyLoad from 'react-lazyload';

const Photos = (props) => {
  //   const cameraInfo = JSON.parse(localStorage.getItem('cameraInfoContent'));
  let arr = Array.from(props.photos);
  return (
    <Fragment>
      {arr.map((photo) => (
        <section key={ photo.id } data-aos="fade" data-aos-delay="30">
            {/* <div className="overlay__info">
                <div className="overlay__info--close">
                    <a href="#"><i className="fas fa-times"></i></a>
                </div>
                <h4>Camera Info</h4>
                <div className="overlay__row">
                    <h4>Title</h4>
                    <p>{ photo.title }</p>
                </div>
                <div className="overlay__row">
                    <h4>Location</h4>
                    <p>{ photo.location }</p>
                </div>           
            </div>
            <div className="overlay"><i className="fas fa-info-circle"></i></div>
                 */}
                <LazyLoad height={250}>
                 <img src={ photo.imagePath } />
                </LazyLoad>
        </section>
      ))}
    </Fragment>
  );
};

export default Photos;
