import React from 'react'
import PropTypes from 'prop-types'





function Page(props) {
  
  let onBtnClick = (e) => {
     const year = +e.currentTarget.innerText;
        props.getPhotos(year);
  }
    return (
      <div>
        <div>
        <button onClick={onBtnClick} >2000</button>
        <button onClick={onBtnClick} >2001</button>
        <button onClick={onBtnClick} >2002</button>
        </div>
    {/* <p>У тебя {props.photos} фото за {props.year} год </p> */}
    {props.isFetching ? <p>Загрузка...</p> : <p>У тебя {props.photos.length} фото.</p>} 
        </div>
    );
  }
  
  Page.propTypes = {
      year: PropTypes.number.isRequired,
      photos: PropTypes.array.isRequired,
      isFetching: PropTypes.bool.isRequired,
        }

  export default Page;