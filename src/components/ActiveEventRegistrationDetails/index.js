// import {Component} from 'react'
// import './index.css'

// class ActiveEventRegistrationDetails extends Component {
//   noActiveEventView = () => (
//     <p className="yet-para">
//       Click on an event, to view its registration details
//     </p>
//   )

//   yetToRegister = () => (
//     <div>
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
//         alt="yet to register"
//         className="register-image"
//       />
//       <p className="yetTo-para">
//         A live performer brings so much to your relationship with dance. Seeing
//         dance live can often make you fall totally in love with this beautiful
//         art form.
//       </p>
//       <button type="button" className="register-button">
//         Register Now
//       </button>
//     </div>
//   )

//   registered = () => (
//     <div>
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
//         alt="registered"
//         className="registered"
//       />
//       <h1>You have already Registered for this event</h1>
//     </div>
//   )

//   closedRegistration = () => (
//     <div>
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
//         alt="registrations closed"
//         className="register-image"
//       />
//       <h1>Registrations are closed now</h1>
//       <p>Stay tuned we will reopen the registrations soon</p>
//     </div>
//   )

//   render() {
//     const {displayEvent} = this.props
//     switch (displayEvent) {
//       case 'YET_TO_REGISTER':
//         return this.yetToRegister()
//       case 'REGISTERED':
//         return this.registered()
//       case 'REGISTRATIONS_CLOSED':
//         return this.closedRegistration()
//       default:
//         return null
//     }
//   }
// }

// export default ActiveEventRegistrationDetails

import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationsClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
