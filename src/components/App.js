import React, {Component} from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments'
import SearchAppointments from './SearchAppointments'
import ListAppointments from './ListAppointments'
import {without} from 'lodash'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      myAppointments: [],
      formDisplay: false,
      orderBy: 'petName',
      orederDir: 'asc',
      lastIndex: 0
    }
    this.deleteAppointments = this.deleteAppointments.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.addAppointment = this.addAppointment.bind(this)
  }
  addAppointment(apt){
    let tempApts = this.state.myAppointments
    apt.aptId = this.state.lastIndex
    tempApts.unshift(apt)
    this.setState({
      myAppointments: tempApts,
      lastIndex: this.state.lastIndex + 1
    })
  }
  toggleForm(){
    this.setState({
      formDisplay: !this.state.formDisplay
    })
  }
  deleteAppointments(apt){
    let tempApts = this.state.myAppointments 
    tempApts = without(tempApts, apt)
    this.setState({
      myAppointments: tempApts
    })
  }
  componentDidMount(){
    fetch('./data.json')
    .then(response => response.json())
    .then(result => {
      const apts = result.map(item => {
        item.aptId = this.state.lastIndex
        this.setState({
          lastIndex: this.state.lastIndex + 1
        })
        return item
      })
      this.setState({
        myAppointments: apts
      })
    })
  }
  render(){
    let order
    let filteredApts = this.state.myAppointments
    this.state.orederDir === 'asc' ? order = 1 : order = -1
    filteredApts.sort((a,b) => {
      if (a[this.state.orderBy].toLowerCase() < 
      b[this.state.orderBy].toLowerCase()) { 
        return -1 * order  
      } else {
        return 1 * order
      }
    })
    return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments 
                formDisplayProp={this.state.formDisplay}
                toggleFormProp={this.toggleForm}
                addAppointmentProp={this.addAppointment}
                />
              <SearchAppointments
                orderByProp={this.state.orderBy}
                orderDirProp={this.state.orederDir}
                />
              <ListAppointments 
                appointments={filteredApts}
                deleteAppointmentsProp ={this.deleteAppointments}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    )
  }
}

export default App;
