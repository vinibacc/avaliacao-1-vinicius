import React, { Component } from 'react'
import { getCategories } from '../../services/category'
import './style.css'

class CategoriesList extends Component {
    state = {
        isLoading: true,
        hasError: false,
        data: []
    }
  async componentDidMount () {
    try {
        const response = await getCategories()
        this.setState({
            isLoading: false,
            data: response.data
        })
    } catch (error) {
        this.setState({
            isLoading: false,
            hasError: true
        })
    }
  }

  render () {
      const { data, isLoading, hasError } = this.state

    if (hasError) {
        return <span>DEU RUIM</span>
    }
    if (isLoading) {
        return <span>Carregando...</span>
    }
    return (
      <div>
          <select className="select" onChange={this.handleChange}>
              {
                  data.map(item => {
                    return (
                        <option value={item.id} key={item.id}>
                            {item.name}
                        </option>
                    )
                  })
              }
        </select>
      </div>
    )
  }
}

export default CategoriesList
