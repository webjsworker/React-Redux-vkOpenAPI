import React from 'react'
import PropTypes from 'prop-types'

function User(props) {

  // let timer = setTimeout(props.handleLogin, 5000);
  


  let renderTemplate = () => {

    if (props.error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }
    if (props.isFetching) {
      return <p>Загружаю</p>
    }
    if (props.name) {
      return <p>Привет, {props.name}!</p>
    } else {
      return (

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