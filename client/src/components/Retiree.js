import React from 'react'
import {
  Card,
  Image,
} from 'semantic-ui-react'

const Retiree = ({ avatar, name, marital_status, can_walk, age, sex}) => (
  <Card>
    <Image src={avatar} />
    <Card.Content>
    <Card.Header>{name}</Card.Header>
    <Card.Description>{can_walk}{' '}{marital_status}{' '}{age}</Card.Description>
    <Card.Meta>{sex}</Card.Meta>
    </Card.Content>
  </Card>
)

export default Retiree