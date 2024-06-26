import React from 'react'
import redux from 'redux'
import { buyCake } from './redux/cakes/cakeAction'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>
            Numnber of cakes -  {props.numOfCakes}
        </h2>
        <button onClick={props.buyCake}>
            Buy Cake
        </button>
    </div>
  )
}
const mapStateToProps = state => {
    return { 
        numOfCakes: state.numOfCakes

    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)
    (CakeContainer)

