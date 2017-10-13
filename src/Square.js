
    import React from 'react';

     class Square extends React.Component {
      squareClick(props) {
       props.updateSquare(props.loc, props.turn);
     }
     render() {
       return (
         <div className="tile" onClick={() => this.squareClick(this.props)}>
           <p>{this.props.value}</p>
         </div>
       );
     }
    }

    export default Square;
