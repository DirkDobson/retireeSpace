import React from 'react'

class Form extends React.Component {
  state = { post: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { post } = this.state
    this.props.addPost(post)
    this.setState({ post: '' })
  }

  handleChange = (e) => {
    this.setState({ post: e.target.value })
  }

  render() {
    const { post } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={post}
          onChange={this.handleChange}
          required 
          placeholder="Make A Post" 
        />
      </form>
    )
  }
}

export default Form