import React from 'react'
import PropTypes from 'prop-types'

function User(props) {
  let renderTemplate = () => {
    if(error){
      return <p>Во время запроса произошла ошибка, обновите страниwe</p>
    }
    if(isFetching){
      return<p>Загружаю</p>
    }
    if(props.name){
    return<p>Привет, {props.name}!</p>
    } else{
      return(
      <button className="btn" onClick={props.handleLogin}>
        Войти
        </button>
        )
    }
  }
    return (
      <div className="ib user">{renderTemplate()}
          
      </div>
    );
  }
  
  User.propTypes = {
      name: PropTypes.string.isRequired,
    }

  export default User;