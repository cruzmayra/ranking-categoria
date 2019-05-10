import React from 'react'

class Ranking extends React.Component {
  render() {
    const {handleRanking} = this.props
    return (
      <section>
        <div className="categoria" onClick={handleRanking} data-categoria="foo">Foo</div>
        <div className="categoria" onClick={handleRanking} data-categoria="bar">Bar</div>
        <div className="categoria" onClick={handleRanking} data-categoria="pony">Pony</div>
      </section>
    )
  }
}

export default Ranking 