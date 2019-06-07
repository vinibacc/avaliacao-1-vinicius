import React from 'react'
import Item from '../Item'

const styles = {
  items: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    width: '100%',
    padding: 20,
    borderTop: '1px solid #38435a',
    boxSizing: 'border-box'
  },
  center: {
    textAlign: 'center'
  }
}

export default props => {
  const { items } = props
  return (
    <div style={styles.items}>
      <h2 style={styles.center}>Lista</h2>
      {items.length === 0 ? (
        <h4 style={styles.center}>Não há items para serem mostrados</h4>
      ) : (
        items.map(item => <Item item={item} key={item.id} />)
      )}
    </div>
  )
}
