import React, { Component } from 'react';
import { Header, Image, Card } from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {
  state = { retirees: []}

  componentDidMount() {
    axios.get('/api/retirees')
    .then(res => { this.setState({ retirees: res.data }) })
  }
  retiree = () => {
    const {retiree} = this.props
    

  }
  
  render() {
    const { retirees } = this.state
      return ( 
        <Card key={retiree.id}>
        <Image src={retiree.avatar} />
        <Card.Content>
          <Card.Header>
            {retiree.name}
            </Card.Header>
            <Card.Description>
              {retiree.age} {' '}
              {retiree.can_walk}{' '}
              {retiree.sex}
            </Card.Description>
            <Card.Meta>
              {retiree.marital_status}
              </Card.Meta>
            </Card.Content>
              </Card>
      ) 
    }
  }



export default Home
