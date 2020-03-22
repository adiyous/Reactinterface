import React, {Component} from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments'
import SearchAppointments from './SearchAppointments'
import ListAppointments from './ListAppointments'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      myAppointments: []
    }
  }
  componentDidMount(){
    fetch('./data.json')
    .then(response => response.json())
    .then(result => {
      const apts = result.map(item => {
        return item
      })
      this.setState({
        myAppointments: apts
      })
    })
  }
  render(){
    const listItems = this.state.myAppointments.map(
      item => (
        <div>
          <h1>{item.petName}</h1>
          <p>{item.aptNotes}</p>
        </div>)
    )
    return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <ol>
              {
                listItems
              }
              </ol>
              <AddAppointments/>
              <SearchAppointments/>
              <ListAppointments />
            </div>
          </div>
        </div>
      </div>
    </main>
    )
  }
}

export default App;
