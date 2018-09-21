import React, { Component } from 'react';
import { Header, Image, Card } from 'semantic-ui-react';
import axios from 'axios';
class Home extends Component {
  state = { retirees: []}

  componentDidMount() {
    axios.get('./api/retirees')
    .then( res => this.state({ retirees: res.data }) )
  }
  sample = () => {
    const { retirees } = this.state
    if (retirees.length) {
      const index = Math.floor(Math.random() * retirees.length)
      return retirees[index]
    } else {
      return null
    }
  }
  
  render() {
    const retiree = this.sample()
    if (retiree) {
      return ( 
        <Card key={retiree.id}>
        <Image src={retiree.avatar} />
        <Card.Content>
          <Card.Header>
            {retiree.name}
            </Card.Header>
            <Card.Description>
              {retiree.age}
              {retiree.can_walk}
              {retiree.sex}
            </Card.Description>
            <Card.Meta>
              {retiree.marital_status}
              </Card.Meta>
            </Card.Content>
              </Card>
      ) 
    } else {
      return <Header textAlign="center">All Retirees Have Died</Header>
    }
  }
}


export default Home
