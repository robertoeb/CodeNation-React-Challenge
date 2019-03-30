import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: '',
      results: []
    };

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({'results': this.recipes});
  }

  handleChange(event) {
    this.setState({'searchString': event.target.value}, () => {
      this.setState({'results': this.search()});
    });
  }

  search() {
    let filter = [];
    let term = this.state.searchString;
    let regex = new RegExp(term, "i");

    filter = recipes.results.filter(function(item) {
      if(regex.test(item.title) || regex.test(item.ingredients)) return true; return false;
    });

    return filter;
  }

  render() { 
    return (
      <div className="App">
        <Navbar onChange={this.handleChange} value={this.state.searchString} />
        <div className="container mt-10">
          <div className="row">
            {
              this.state.results.length > 0
              ?this.state.results.map( (item, index) =>
                <RecipeItem
                  thumbnail = {item.thumbnail}
                  title =  {item.title}
                  ingredients = {item.ingredients}
                  term = {this.state.searchString} key = {index}
                /> 
              )

              :this.state.searchString !== '' ? 
                <h3 className="result">Nothing to show for "{this.state.searchString}"</h3> : ''
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
