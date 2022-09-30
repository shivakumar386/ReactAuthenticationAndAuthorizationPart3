// import './index.css'

// const EventItem = props => {
//   const {eventsList, eventDisplayed} = props
//   const {id, imageUrl, name, location, registrationStatus} = eventsList

//   const onClickButton = () => eventDisplayed(registrationStatus)

//   return (
//     <li className="list-elements">
//       <button type="button" className="button" onClick={onClickButton}>
//         <img src={imageUrl} alt="event" className="images" />
//         <h1 className="heading">{name}</h1>
//         <p className="paragraph">{location}</p>
//       </button>
//     </li>
//   )
// }

// export default EventItem

import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
