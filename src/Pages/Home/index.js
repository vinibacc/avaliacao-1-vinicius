import React, { Component, Fragment } from 'react'
import ItemList from '../../components/ItemList'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <div>
          <ItemList />
        </div>
        <div />
      </Fragment>
    )
  }
}
export default Home
