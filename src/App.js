import React, { Component } from 'react';
import characters from "./chars.json";
import CharCard from "./components/charCard"
import Wrapper from "./components/Wrapper"
import Header from "./components/header"

class App extends Component {
  state= {
    main: characters,
    unclicked: characters,
    score: 0,
    topscore: 0,
  };

  shuffle = () => {
    let arr = this.state.main;
    let j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    this.setState({characters: arr})
  }

  handleClick = id => {
    this.shuffle();
    if (this.state.unclicked.length>1){
      const unclicked = this.state.unclicked.filter(char => char.id !== id )
      if (unclicked.length === this.state.unclicked.length){
        alert("You lost!")
        this.setState({
          unclicked: characters,
          score: 0
        })
      }else{
        const score = this.state.score +1
        this.setState({unclicked, score})
        console.log(id, unclicked);
        if (score> this.state.topscore){
          this.setState({topscore: score})
        }
      }
      
    }else{
      alert("You Won!!")
    }
    


  }

  render() {
    return (
      <div className="container" style= {{padding: 0, margin:0}}>
      <Header
        score = {this.state.score}
        topscore = {this.state.topscore}
      />
      <Wrapper>
        
        {this.state.main.map(char =>(
            <CharCard 
            handleClick = {this.handleClick}
            key = {char.id}
            id = {char.id}
            name= {char.name}
            occupation= {char.occupation}
            location= {char.location}
            image= {char.image}
            />
          )
        )}
        
      </Wrapper>
      </div>
    );
  }
}

export default App;
