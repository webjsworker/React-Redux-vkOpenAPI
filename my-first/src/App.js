import React from 'react';
import{connect} from 'react-redux';
import './App.css';
import User from './Component/User'
import Page from './Component/Page'
import {getPhotos} from './actions/PageActions'
import {handleLogin} from './actions/UserActions'
 

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Топ фото</h1>
        </header>
        <User 
        name={props.user.name}
        isFetching={props.user.isFetching}
        error={props.user.error}
        handleLOgin={props.handleLOginAction}
        />
        {/* Внимание добавлен метод length */}
        <Page 
        photos={props.page.photos}
         year={props.page.year} 
         isFetching={props.page.isFetching}
        getPhotos={props.getPhotosAction}/>
       
       
       {/* <p className="App-intro">Место для фото</p> */}
  {/* <p>Меня зовут: {props.user.name} {props.user.surname} </p> */}
  {/* <p>Сейчас  {props.page.year} год </p> */}
  {/* <p>У меня {props.page.photos.length}  фото </p> */}
    </div>
  );
}

const mapStateToProps = store=> {
  console.log(store)
  return{
    user:store.user,
    page:store.page,
    
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    getPhotosAction: year => dispatch(getPhotos(year)),
    handleLOginAction: () => dispatch(handleLogin()),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
