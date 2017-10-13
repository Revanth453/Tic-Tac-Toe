    import React, { Component } from 'react';
    import ResetButton from './ResetButton';
    import Winner from './Winner';
    import Square from './Square';
    import './App.css';

    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          title: 'Tic Tac Toe',
          gameBox: [
            '','','',
            '','','',
            '','',''
          ],
          turn: 'o',
          result: null
        }
          this.updateSquare = this.updateSquare.bind(this);
          this.resetBox = this.resetBox.bind(this);
      }

      updateSquare(loc, turn){
        if(this.state.result !== null) {
        console.log("Winner", this.state.result);
        return;
      }

      if(this.state.gameBox[loc]=== 'x' || this.state.gameBox[loc]=== 'o' || this.state.result){
        return;
      }
      let currentGameBox = this.state.gameBox;
      currentGameBox.splice(loc, 1, this.state.turn);
      this.setState({gameBox: currentGameBox}, function(){

        var moves = this.state.gameBox.join('').replace(/ /g,'');
        console.log('Moves:', moves, 'Winner:', this.state.result);
        if(moves.length === 9) {
          this.setState({result: 'd'});
          return;
        } else {

        var firstRow = this.state.gameBox[0] + this.state.gameBox[1] + this.state.gameBox[2];
        if(firstRow.match(/xxx|ooo/)){
          this.setState({result: this.state.turn});
          return;
        }
        var secondRow = this.state.gameBox[3] + this.state.gameBox[4] + this.state.gameBox[5];
        if(secondRow.match(/xxx|ooo/)){
          this.setState({result: this.state.turn});
          return;
        }
        var thirdRow = this.state.gameBox[6] + this.state.gameBox[7] + this.state.gameBox[8];
        if(thirdRow.match(/xxx|ooo/)){
          this.setState({result: this.state.turn});
          return;
        }
        var firstCol = this.state.gameBox[0] + this.state.gameBox[3] + this.state.gameBox[6];
        if(firstCol.match(/xxx|ooo/)){
          this.setState({result: this.state.turn});
          return;
        }
        var secondCol = this.state.gameBox[1] + this.state.gameBox[4] + this.state.gameBox[7];
        if(secondCol.match(/xxx|ooo/)){
          this.setState({result: this.state.turn});
          return;
        }
        var thirdCol = this.state.gameBox[2] + this.state.gameBox[5] + this.state.gameBox[8];
        if(thirdCol.match(/xxx|ooo/)){
          this.setState({result: this.state.turn});
          return;
        }
        var leftDiag = this.state.gameBox[0] + this.state.gameBox[4] + this.state.gameBox[8];
          if(leftDiag.match(/xxx|ooo/)){
            this.setState({result: this.state.turn});
            return;
          }
          var rightDiag = this.state.gameBox[2] + this.state.gameBox[4] + this.state.gameBox[6];
          if(rightDiag.match(/xxx|ooo/)){
            this.setState({result: this.state.turn});
            return;
          }
        this.setState({turn: (this.state.turn === 'x') ? 'o' : 'x' });
      }
    })
  }

      resetBox(){
        this.setState({
          gameBox: [
            '','','',
            '','','',
            '','',''
          ],
          turn: 'x',
          result: null
        })
      }

      render() {
        return (
          <div className="container">
            <div className="menu">
              <h1>{this.state.title}</h1>
              <Winner result={this.state.result}/>
              <ResetButton reset={this.resetBox}/>
            </div>
             {this.state.gameBox && this.state.gameBox.map((value, index) => (
               <Square
                   key={index}
                   loc={index}
                   value={value}
                   updateSquare={this.updateSquare}
                   turn={this.state.turn} />
                )
             )
         }

          </div>
        );
      }
    }

    export default App;
