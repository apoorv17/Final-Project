import React, { Component } from 'react';
import { get } from '@tonaljs/note'
import Guitar, { getRenderFingerSpn, fromMidiSharps } from "react-guitar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export const parse = (string) => {
  return string
    .split(' ')
    .map((name) => get(name).midi ?? (get(name).chroma ?? 0) + 12 * 3)
    .reverse()
}
let tunings = parse('E2 A2 D3 G3 B3 E4')
let strings = [[-1, -1, 7, 6, 5, 0], [0, 0, 1, 4, 2, 3], [0, 0, 1, 4, 2, 3]]
class App extends Component {



  render() {

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="container"> 
            <image src="lol.png" width="300" height="150"/>
            </div>
          </div>
          <div className="row">
            <div className="container">
              {strings.map((string) => (
                <>
                  <div className="row">
                    <Guitar
                      strings={string}
                      renderFinger={getRenderFingerSpn(tunings)}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </>


      // document.getElementById("root")

    );
  }


}

export default App;

