class Score extends React.Component {
  render() {
    return(
      <div>
        <h2>Score board for the {this.props.teamName}</h2>
        <div>
          Score: 50 <br/>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    );
  }
}

let el = document.getElementById('two');
ReactDOM.render(<Score teamName="Warriors" />, el);