import React from 'react';
import { connect } from 'react-redux';
import './style/app.css';
import User from './Component/User'
import Page from './Component/Page'
import { getPhotos, setTime } from './actions/PageActions'
import { handleLogin } from './actions/UserActions'
import Header from './Component/Header'
import Message from './Component/Message'
import {setValue} from './actions/MessageAction'



function App(props) {
  
  return (
    <div className="app">
     
      <Header
      time={props.page.time}
      setTime={props.setTime}
      />
      
      
      <User
        name={props.user.name}
        isFetching={props.user.isFetching}
        error={props.user.error}
        handleLogin={props.handleLoginAction}
      />
      <Page
        photos={props.page.photos}
        year={props.page.year}
        isFetching={props.page.isFetching}
        getPhotos={props.getPhotosAction} />
      <Message
      setValue={props.setValue}
      value={props.values.value}
      all_message={props.message.all_message}
      /> 
    </div>
  );
}

const mapStateToProps = store => {

  return {
    user: store.user,
    page: store.page,
    values: store.message,
    message: store.message,
   

  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    handleLoginAction: () => dispatch(handleLogin()),
    setTime: time => dispatch(setTime(time)),
    setValue: value => dispatch(setValue(value))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
