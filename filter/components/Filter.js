import React from 'react';


class Filter extends React.Component {
  state = {
   textFiltered : '',
   checkBox: false,
   sortedArray : this.props.words
  }

  isClicked = () =>{
    this.setState ({
       checkBox: false,
       textFiltered: '',
       sortedArray: this.props.words});
  }

  textInput = (event) =>{
    this.setState({textFiltered:event.target.value}, this.isFiltered);

  }

  isFiltered = () =>{
    let a = this.props.words.filter(word=>word.includes(this.state.textFiltered));
    if (this.state.checkBox){
      a.sort();
    }
    this.setState({sortedArray:a});
  }

  checkChange = () =>{
    this.setState ({
      checkBox: !this.state.checkBox,
    }, this.isFiltered)
  }
  render() {
    return (
      <div className = "Filter">
        <input type = "text" value = {this.state.textFiltered} onChange = {this.textInput}/>
        <input type = "checkbox" checked = {this.state.checkBox} onChange = {this.checkChange}/>
        <input type = "button" value = "Сброс" onClick = {this.isClicked}/>
        <textarea value = {this.state.sortedArray.join('\n')} readOnly rows = "10" cols = "15"/>


      </div>
    );

}
}

export default Filter;
