import React, {Component} from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments'
import SearchAppointments from './SearchAppointments'
import ListAppointments from './ListAppointments'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Ali'
    }
  }
  componentDidMount(){
    fetch('./data.json')
    .then(response => response.json())
    .then(result => {
      const apts = result.map(item => {
        return item
      })
    })
  }
  render(){
    return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <h1>{this.state.name}</h1>
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
