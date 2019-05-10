import React from 'react';
// import logo from './logo.svg';
import './App.css';

// Components
import Welcome from './Components/Welcome'
import Ranking from './Components/Ranking'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      hidden: true,
      position: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleRanking = this.handleRanking.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.position === 2) {
      this.setState({position:0 })
    }
  }

  handleChange(e) {
    const {value, name} = e.target
    this.setState({ [name]: value})
  }
  
  handleClick() {
    this.setState({hidden: false})
  }
  
  handleRanking(e) {
    const elem = e.target
    const categoria = e.target.dataset.categoria
    const {position} = this.state
    this.setState({[categoria]: position + 1, position: position + 1})
    this.stylesRanking(elem, position)
  }

  stylesRanking(elem, position) {
    elem.classList.add('position' + (position + 1))
  }

  render() {
    const {hidden} = this.state
    return (
      <div className="App">
        {
          hidden 
          ? <Welcome 
              handleChange={this.handleChange}
              handleClick={this.handleClick} />
          : <Ranking handleRanking={this.handleRanking} />
        }
      </div>
    )
  }
}

export default App;
