import React from 'react'
import ReactDOM from 'react-dom'

let exerciseData = {
  total: 50,
  biking: 10,
  basketball: 15,
  workout: 10,
  goal: 100,
}

class ExerciseDayCounter extends React.Component {
  render() {
    return (
      <section>
        <div>
          <p>Total: {this.props.total}</p>
        </div>
        <div>
          <p>Biking: {this.props.biking}</p>
        </div>
        <div>
          <p>Basketball: {this.props.basketball}</p>
        </div>
        <div>
          <p>Workout: {this.props.workout}</p>
        </div>
        <div>
          <p>Goal: {this.props.goal}</p>
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <ExerciseDayCounter 
    total={exerciseData.total}
    biking={exerciseData.biking}
    basketball={exerciseData.basketball}
    workout={exerciseData.workout}
    goal={exerciseData.goal}/>,
  document.getElementById('root')
)