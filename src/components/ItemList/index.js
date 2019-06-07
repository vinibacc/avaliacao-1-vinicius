import React, { Component } from 'react'
import { connect } from 'react-redux'
import Items from '../Items'
import Categories from '../Select'
import Input from '../Input'
import { createItem, getItems } from '../../services/items'
import { fillItems } from '../../redux/modules/items'

const styles = {
  itemList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  newItem: {
    display: 'flex',
    flex: 1
  },
  submit: {
    border: 0,
    borderRadius: 0,
    backgroundColor: '#38435a',
    color: '#fff',
    padding: '0.5rem'
  },
  refresh: {
    backgroundColor: '#ea454b',
    padding: '0.75rem',
    marginTop: 20,
    border: 0,
    color: '#fff',
    alignSelf: 'flex-end'
  }
}

class ItemList extends Component {
  state = {
    item: '',
    items: [],
    category: '',
    user: null,
    isLoading: true
  }

  async componentDidMount () {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      this.setState({ user })
      this.loadItems()
    } else {
      this.props.history.replace('/')
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { item, user, category, items } = this.state
    const { fillItems } = this.props
    try {
      const res = await createItem({ name: item, category_id: category.name, userId: user.id })
      this.setState({
        item: ''
      })
      fillItems([res.data, ...items])
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = e => {
    this.setState({ item: e.target.value, category: e.target.value })
  }

  loadItems = async () => {
    const { fillItems } = this.props
    this.setState({
      isLoading: true
    })
    const res = await getItems()
    fillItems(res.data)
    this.setState({ isLoading: false })
  }

  refresh = async () => {
    this.loadItems()
  }

  render () {
    const { item, isLoading } = this.state
    const { items } = this.props
    console.log('items', items)

    return (
      <div style={styles.itemList}>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <Categories/>
          <Input
            value={item}
            onChange={this.handleChange}
            name='newItem'
            placeholder='Escreva alguma coisa...'
          />
          <button disabled={!item} type='submit' style={styles.submit}>
            Adicionar
          </button>
        </form>
        {isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          <React.Fragment>
            <button onClick={this.refresh} style={styles.refresh}>
              Atualizar
            </button>
            <Items items={items} />
          </React.Fragment>
        )}
      </div>
    )
  }
}

export default connect(
  state => ({
    items: state.items.data
  }),
  { fillItems }
)(ItemList)
