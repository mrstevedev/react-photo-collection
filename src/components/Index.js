import React, { Component, Fragment } from "react";
import Header from './Header';
import Sidebar from '../containers/Sidebar';
import BackToTop from './BackToTop';
import AOS from "aos";
import SideBarRight from "./SideBarRight";
import CookiesNotification from './CookiesNotification';
import { store } from '../store';
import Photo from './Photo';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import photos from "../../api/photos";
import axios from 'axios';
import { session } from "passport";

export class Index extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      active: '',
      showSideBarRight: false,
      photos: [],
      currentPhoto: {},
      showCookieNotification: false
    }
  }
  componentDidMount() {
    const { REACT_APP_API_URL } = process.env;
    // console.log("//-----------ComponentDidMount Ran");
    AOS.init();
    // console.log('AOS Init');
    // console.log('call store.getState(): ', store.getState().photos);
    axios.get( `${ REACT_APP_API_URL }/photos.json`, {
      headers: {
        'requestapi': "123",
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        this.setState({ photos: data.data })
        const activeState = localStorage.getItem('active');
        this.setState({ active: activeState });
        const listItem = document.querySelector(".photo-list li");
    
        if(localStorage.getItem('active') === null ){
          listItem.classList.add("active");
        }
    }).catch(err => console.log(err))
   

    if (document.cookie.split(';').some((item) => item.includes('spp_notification_accept=true'))) {
      console.log('The cookie "spp_notification_accept" has "true" for value')
    } else {
      setTimeout(() => {
        this.setState({ showCookieNotification: true });
      }, 5000);
    }
  }

  handlePhotoDownload = e => {
    // console.log(e);
  }

  handleInputSelect = (e) => {
    // console.log(e)
  }

  handleRightSideBarClick = (e, curr, val) => {
    e.preventDefault();
   
    this.setState({
      showSideBarRight: true,
      title: val
    }, () => {
      localStorage.setItem('sidebarRight', this.state.title );
      }); 
    }

  handleSideBarClick = (e, id, val) => {
    const activeState = localStorage.setItem('active', val);
    const activeNode = document.querySelector('.active');
    const getActiveState = localStorage.getItem('active');
    if(id) {
      const currPhoto = photos.find((photo) => photo.id === id)
      this.setState({ currentPhoto: currPhoto }, () => {
        cameraInfoContent: 
        localStorage.setItem('cameraInfoContent', 
        JSON.stringify({
          title: currPhoto.title,
          location: currPhoto.location,
          camera: currPhoto.camera,
          imagePath: currPhoto.imagePath
        }))
      })
    }
    this.setState({ active: getActiveState });
    // console.log('id: ', id)
    if(activeNode){
      activeNode.classList.remove('active');
    }
    e.currentTarget.querySelector('.nav-link li').classList.add('active');
    // store.dispatch(setInfo(val))
  }

  handleClose = e => {
    // console.log('handleClose Ran');
    localStorage.removeItem('sidebarRight');
    this.setState({
      showSideBarRight: false
    });
  }


  handleTabClick = e => {
    // console.log('handle tab click');
  }

  handleCloseCookieModal = (e) => {
    // console.log('Close cookie notification modal');
    this.setState({ showCookieNotification: false }, () => {
      // Set a cookie when the 'accept' button is clicked
      // https://www.npmjs.com/package/react-cookie
      document.cookie="spp_notification_accept=true;";
    });
  }

  componentDidCatch() {
    // console.log("//-----------ComponentDidCatch Ran");
  }

  render() {
    return (
      <Fragment>
          <Header />
            <Sidebar
              currentPhoto={this.props.currentPhoto}
              photos={this.state.photos}
              // imageSrc={store.getState().imageSrc}
              active={this.state.active} 
              handleSideBarClick={this.handleSideBarClick} 
              handlePhotoDownload={this.handlePhotoDownload}
              handleClick={this.handleClick} 
            />

            {this.state.close !== true ? (
              <SideBarRight
                currentPhoto={this.state.currentPhoto}
                handleTabClick={this.handleTabClick}
                handleClose={this.handleClose}
                title={this.state.title}
                showSideBarRight={this.state.showSideBarRight}   
            />
          ): null}
          
        <div className="container">         
          <Photo handleRightSideBarClick={this.handleRightSideBarClick} currentPhoto={this.state.currentPhoto} />
          {/* <Photo currentPhoto={currentPhoto} imageSrc={store.getState().imageName} imagePath={store.getState().imagePath} /> */}
        </div>
        { this.state.showCookieNotification === true ? (
          <CookiesNotification handleCloseCookieModal={this.handleCloseCookieModal} />
        ) : null }
       <BackToTop />
      </Fragment>
    );
  }
}

export default Index;
