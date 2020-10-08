import React, { Fragment } from "react";

const CameraInfo = (props) => {
  // console.log('props:::::',props)
  return (
    <Fragment>
        <a flow="right" tooltip="Current Photo Info" href="#!" onClick={e => props.handleRightSideBarClick(e, props.currPhoto, "Camera Info")} className="camera__info--icon">
          <i className="fas fa-info-circle"></i>
        </a>
    </Fragment>
  );
};
export default CameraInfo;
