import React from 'react'
import PropTypes from 'prop-types'
import '../style/Page.css'
function Page(props) {

  let renderTemplate = () => {

    if (props.error) {
      return <p className="error">Во время загрузки фото произошла ошибка</p>
    }
    if (props.isFetching) {
      return <p>Загрузка...</p>
    } else {
     
      return props.photos.map(entry => (

        <div key={entry.id} className="photo">
          <p>
              <img src={entry.sizes[0].url} alt="" />
          </p>
          <p>{entry.likes.count} ❤</p>
        </div>

      ))
    }
  }

  let onBtnClick = (e) => {
    const year = +e.currentTarget.innerText;
    props.getPhotos(year);
  }



  return (
    <div>
      <div>
        <button onClick={onBtnClick} >2015</button>
        <button onClick={onBtnClick} >2016</button>
        <button onClick={onBtnClick} >2017</button>
      </div>
      {/* <p>У тебя {props.photos} фото за {props.year} год </p> */}
      
      <div className="response">
      {props.isFetching ? <p>Загрузка...</p> : <p>У тебя {props.photos.length} фото.</p>}
       </div>

      <div>{renderTemplate()}

      </div>
    </div>
  );
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  getPhotos: PropTypes.func.isRequired,
}

export default Page;