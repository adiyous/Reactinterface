import React, {Component} from 'react'

class ListAppointments extends Component {
    render(){
        const listItems = this.props.appointments.map(
            item => (
              <div>
                <h1>{item.petName}</h1>
                <p>{item.aptNotes}</p>
              </div>
              )
          )
        return(
            <div>
                ListAppointments
                {
                    listItems
                }
            </div>
        )
    }
}

export default ListAppointments