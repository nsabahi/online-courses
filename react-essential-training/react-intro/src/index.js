import React, { Component } from 'react'
import { render } from 'react-dom'

let exerciseData = {
  total: 50,
  biking: 10,
  basketball: 15,
  workout: 10,
  goal: 100,
}

const getPercent = (decimal) => {
  return decimal * 100 + "%"
}

const calcGoalProgress = (total, goal) => {
  return getPercent( total / goal )
}

const ExerciseDayCounter = ({total, biking, basketball, workout, goal}) => {
  return (
    <section>
      <div>
        <p>Total: {total}</p>
      </div>
      <div>
        <p>Biking: {biking}</p>
      </div>
      <div>
        <p>Basketball: {basketball}</p>
      </div>
      <div>
        <p>Workout: {workout}</p>
      </div>
      <div>
        <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
      </div>
    </section>
  )
}

render(
  <ExerciseDayCounter 
    total={exerciseData.total}
    biking={exerciseData.biking}
    basketball={exerciseData.basketball}
    workout={exerciseData.workout}
    goal={exerciseData.goal}/>,
  document.getElementById('root')
)