import React, { Component, Fragment } from 'react';
//import { Header, Image, Card } from 'semantic-ui-react';
import axios from 'axios';
import Retiree from './Retiree'

class Home extends Component {
  state = { retirees: []}

  componentDidMount() {
    axios.get('/api/retirees')
    .then(res => { this.setState({ retirees: res.data }) })
  }
  
  retireeLoop = () => {
    return this.state.retirees.map( r => (
      <Retiree {...r} />
    ))   
  }

  render() {
   // const { retirees } = this.setState
      return ( 
        <Fragment>
          { this.retireeLoop() }
        </Fragment>
      ) 
    }
  }
  // <Card key={retiree.id}>
  // <Image src={retiree.avatar} />
  // <Card.Content>
  //   <Card.Header>
  //     {retiree.name}
  //     </Card.Header>
  //     <Card.Description>
  //       {retiree.age} {' '}
  //       {retiree.can_walk}{' '}
  //       {retiree.sex}
  //     </Card.Description>
  //     <Card.Meta>
  //       {retiree.marital_status}
  //       </Card.Meta>
  //     </Card.Content>
  //       </Card>



export default Home
