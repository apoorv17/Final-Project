import React, { Component, useRef } from 'react';
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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',loading:false,
  strings:[[2, -1, 2, 3, 1, -2], [-2, 0, -2, 0, 1, 2], [0, 3, 4, -2, -3, 4]]};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    if (this.state.value==1){
    this.setState({strings : [[2, -1, 2, 3, 1, -2], [-2, 0, -2, 0, 1, 2], [0, 3, 4, -2, -3, 4]]})
  } else if (this.state.value==2){
    this.setState({strings : [[-4, 1, -3, 2, 1, -4]]})
} else if (this.state.value==3){
    this.setState({strings : [[-4, 1, 1, 3, -2, -1], [4, -4, -3, -2, 3, -2]]})
} else if (this.state.value==4){
    this.setState({strings : [[-1, -3, 0, -1, -4, -4], [-2, 4, -2, -3, 0, 4]]})
} else if (this.state.value==5){
    this.setState({strings : [[2, 2, 3, -3, 0, 2], [0, -2, 0, 4, 0, -3]]})
} else if (this.state.value==6){
    this.setState({strings : [[-2, -2, 1, 2, -4, 2], [1, 2, 2, 0, -4, 4]]})
} else if (this.state.value==7){
    this.setState({strings : [[1, 2, 3, -4, 2, 3], [2, 2, -4, 2, -1, -1], [-4, 3, -1, -1, 2, -3]]})
} else if (this.state.value==8){
    this.setState({strings : [[0, 2, -3, 3, 2, 1]]})
} else if (this.state.value==9){
    this.setState({strings : [[-4, -1, -1, -4, -2, 0]]})
} else if (this.state.value==10){
    this.setState({strings : [[-2, -3, 1, -2, 2, 4], [-3, 2, 0, 4, -1, -1], [4, -1, 1, -4, 4, -2]]})
} else if (this.state.value==11){
    this.setState({strings : [[0, 2, -1, 0, -3, -1], [4, -2, -4, -2, 2, 3]]})
} else if (this.state.value==12){
    this.setState({strings : [[0, 0, 3, -4, 4, 1], [3, 2, -4, -3, 2, -4]]})
} else if (this.state.value==13){
    this.setState({strings : [[0, 2, 3, 2, -1, 4], [1, -2, -1, -1, 3, 0], [-3, 2, 3, -3, 3, 0]]})
} else if (this.state.value==14){
    this.setState({strings : [[4, -4, 0, 1, -4, 1], [-3, 3, -3, 0, 4, 1], [4, 3, 2, 1, 3, -1]]})
} else if (this.state.value==15){
    this.setState({strings : [[2, -1, -4, 1, -2, -4]]})
} else if (this.state.value==16){
    this.setState({strings : [[1, -2, -2, 3, -3, 4]]})
} else if (this.state.value==17){
    this.setState({strings : [[1, -2, -4, 2, 0, 0], [1, 2, -3, 1, -1, 0]]})
} else if (this.state.value==18){
    this.setState({strings : [[4, -3, 4, 0, 2, 4], [2, -2, -2, 1, -4, 4], [4, 2, -2, -4, -4, -4]]})
} else if (this.state.value==19){
    this.setState({strings : [[0, 2, -1, 2, -3, 0], [-3, 2, 3, -1, -3, 4], [2, -1, 0, 1, -3, 4]]})
} else if (this.state.value==20){
    this.setState({strings : [[-1, -2, 4, 4, -3, 1], [1, -3, 0, -2, 3, 4], [4, -2, 3, 2, 3, 3]]})
} else if (this.state.value==21){
    this.setState({strings : [[-1, 2, 0, -4, -1, -3], [-4, -1, 4, -3, 0, 3], [3, 4, -2, 1, -2, -1]]})
} else if (this.state.value==22){
    this.setState({strings : [[0, -2, 3, -4, 1, -1]]})
} else if (this.state.value==23){
    this.setState({strings : [[-1, 1, 2, 4, 0, -4], [-2, -4, -4, 2, 0, -3]]})
} else if (this.state.value==24){
    this.setState({strings : [[0, 4, 4, 3, -4, -4], [3, -2, -3, -2, 1, 0], [-1, 1, 0, -1, 0, 4]]})
} else if (this.state.value==25){
    this.setState({strings : [[2, 1, 4, 4, 3, -3], [0, -4, 0, -4, 4, 2]]})
} else if (this.state.value==26){
    this.setState({strings : [[-2, 4, -1, -4, -4, 0], [-2, 1, -2, 1, -2, -3]]})
} else if (this.state.value==27){
    this.setState({strings : [[-2, -1, -2, 1, 2, 3]]})
} else if (this.state.value==28){
    this.setState({strings : [[-2, -4, -4, -1, -1, -4], [-3, 0, 1, 2, -1, 3], [4, -2, 4, 2, 0, 2]]})
} else if (this.state.value==29){
    this.setState({strings : [[-3, -1, -1, 0, 2, 1]]})
} else if (this.state.value==30){
    this.setState({strings : [[4, 0, 1, 1, 4, -4], [2, -2, -2, 1, 3, -4]]})
} else if (this.state.value==31){
    this.setState({strings : [[0, -1, 3, -4, 2, 1], [2, -3, -4, -2, 2, 2]]})
} else if (this.state.value==32){
    this.setState({strings : [[-2, -1, 1, 0, -3, 2]]})
} else if (this.state.value==33){
    this.setState({strings : [[-3, -4, 0, -1, -2, -3]]})
} else if (this.state.value==34){
    this.setState({strings : [[-2, 3, 3, 4, -2, -4], [-2, 3, -1, -3, -3, 1], [4, -4, 4, -4, -2, 4]]})
} else if (this.state.value==35){
    this.setState({strings : [[-1, 4, -4, 3, -4, -3], [-1, 2, -2, -1, -3, 4], [3, -1, -2, 4, -1, -4]]})
} else if (this.state.value==36){
    this.setState({strings : [[-2, 1, 2, -1, 4, 0], [-1, -4, -2, 4, -1, 3]]})
} else if (this.state.value==37){
    this.setState({strings : [[2, 0, 0, 4, -2, -4], [-1, -1, -4, 3, -2, 1], [0, 4, 2, -2, -2, 4]]})
} else if (this.state.value==38){
    this.setState({strings : [[4, 0, 4, 1, -2, 3], [-3, 1, -1, 2, 2, 4], [1, 3, -4, 2, -4, -4]]})
} else if (this.state.value==39){
    this.setState({strings : [[-3, -2, 1, -2, -2, 2], [-3, -2, -3, 2, -3, -3]]})
} else if (this.state.value==40){
    this.setState({strings : [[2, 4, 2, 4, 4, 2]]})
} else if (this.state.value==41){
    this.setState({strings : [[0, -3, 1, -1, 0, -1]]})
} else if (this.state.value==42){
    this.setState({strings : [[-2, -1, 1, -2, 2, 4]]})
} else if (this.state.value==43){
    this.setState({strings : [[0, -2, -1, -3, 2, 2], [3, -3, 4, 1, 3, 4], [1, 3, -3, 4, 2, -3]]})
} else if (this.state.value==44){
    this.setState({strings : [[4, 0, 3, 1, 0, 1], [1, -2, 0, -1, 0, 3], [-2, -1, 2, -4, -4, -4]]})
} else if (this.state.value==45){
    this.setState({strings : [[4, -3, 2, -1, 0, 4], [-1, 4, -4, 2, 4, -1], [2, -1, 3, 4, -2, 1]]})
} else if (this.state.value==46){
    this.setState({strings : [[2, 1, 4, -2, -4, 2], [-2, 0, -4, 3, -3, 1], [-3, -1, 3, 2, -3, -1]]})
} else if (this.state.value==47){
    this.setState({strings : [[-3, 1, -2, -4, -3, -3], [-3, 3, -4, -4, -2, 0], [-2, -2, 3, 4, -3, 3]]})
} else if (this.state.value==48){
    this.setState({strings : [[1, -4, -3, -4, 4, 3]]})
} else if (this.state.value==49){
    this.setState({strings : [[-4, 2, 1, 0, -2, -3], [0, -2, 1, 2, -4, 0]]})
} else if (this.state.value==50){
    this.setState({strings : [[-3, -3, 2, 1, -3, -4]]})
} else if (this.state.value==51){
    this.setState({strings : [[-3, 0, 3, -4, 4, -1]]})
} else if (this.state.value==52){
    this.setState({strings : [[0, -3, 0, -3, 1, 1]]})
} else if (this.state.value==53){
    this.setState({strings : [[0, 1, 3, -4, -2, 4], [4, 3, -1, 1, 4, -2], [4, -2, 0, -3, 1, -3]]})
} else if (this.state.value==54){
    this.setState({strings : [[0, -2, 3, 2, 0, 0], [3, -1, -4, -3, -3, 4]]})
} else if (this.state.value==55){
    this.setState({strings : [[0, 1, 4, -2, 2, 1], [-4, 1, 0, 3, -1, 3]]})
} else if (this.state.value==56){
    this.setState({strings : [[2, -2, -1, -4, -4, -2], [-2, -4, 2, -4, 2, 4]]})
} else if (this.state.value==57){
    this.setState({strings : [[3, -2, 1, 3, -3, 2]]})
} else if (this.state.value==58){
    this.setState({strings : [[-4, -1, -4, 2, -4, 4], [-3, -3, 0, -4, 3, -2]]})
} else if (this.state.value==59){
    this.setState({strings : [[0, 0, -2, 2, -2, 1], [0, 3, -1, -2, 1, 3], [-1, 0, -4, -1, -1, 4]]})
} else if (this.state.value==60){
    this.setState({strings : [[-1, 2, 0, -3, -2, 4]]})
} else if (this.state.value==61){
    this.setState({strings : [[-2, -2, 2, -4, 1, -2], [3, -2, 2, 4, 1, -1], [-3, -1, -1, -2, 2, 1]]})
} else if (this.state.value==62){
    this.setState({strings : [[-4, 3, -3, 0, 4, 4], [3, 2, -1, 4, -1, -1]]})
} else if (this.state.value==63){
    this.setState({strings : [[3, 0, -1, -2, 1, -1]]})
} else if (this.state.value==64){
    this.setState({strings : [[-1, -2, -2, 2, -2, -2], [-3, -3, 0, -4, 1, -1]]})
} else if (this.state.value==65){
    this.setState({strings : [[3, 3, -2, 3, 2, -1], [1, 0, 0, -1, 1, -3]]})
} else if (this.state.value==66){
    this.setState({strings : [[1, 1, 3, -3, -2, -3], [1, 1, 0, -4, -4, 1]]})
} else if (this.state.value==67){
    this.setState({strings : [[-2, 1, 2, 2, 3, -2], [-4, 4, 2, 2, -4, 1], [-3, 4, -3, -4, 3, 3]]})
} else if (this.state.value==68){
    this.setState({strings : [[4, -2, 4, -3, 4, -2]]})
} else if (this.state.value==69){
    this.setState({strings : [[0, 0, 2, 0, -2, 1], [1, -1, 4, 0, -3, 4]]})
} else if (this.state.value==70){
    this.setState({strings : [[-3, -4, -3, 1, 1, 1], [2, 0, 4, 3, 2, 3], [1, -4, -3, 0, -1, 3]]})
} else if (this.state.value==71){
    this.setState({strings : [[0, -1, 2, -2, 4, 3]]})
} else if (this.state.value==72){
    this.setState({strings : [[4, -3, -2, 1, 1, -2], [0, -2, -2, 2, -3, -2], [3, 3, -3, -2, -2, 1]]})
} else if (this.state.value==73){
    this.setState({strings : [[3, -1, 3, 1, 2, 1]]})
} else if (this.state.value==74){
    this.setState({strings : [[3, 3, 1, 0, -2, 1], [3, 1, -4, 4, 3, -2]]})
} else if (this.state.value==75){
    this.setState({strings : [[4, -4, 2, 0, -3, 0]]})
} else if (this.state.value==76){
    this.setState({strings : [[4, -2, 4, -1, -1, -3]]})
} else if (this.state.value==77){
    this.setState({strings : [[-2, 2, -2, -4, -1, 4], [-1, -2, 2, -2, 4, 4], [4, 3, 4, -2, 2, -1]]})
} else if (this.state.value==78){
    this.setState({strings : [[4, -1, -1, 0, 0, -3]]})
} else if (this.state.value==79){
    this.setState({strings : [[2, -3, 2, -1, 1, -2]]})
} else if (this.state.value==80){
    this.setState({strings : [[-2, 1, 3, 2, -2, -1], [0, 3, 4, 2, 3, 4]]})
} else if (this.state.value==81){
    this.setState({strings : [[2, 1, -3, -2, 4, 0], [-4, 1, 0, -1, -4, -1], [2, 1, -3, 4, -3, -3]]})
} else if (this.state.value==82){
    this.setState({strings : [[1, -4, 1, -1, -3, -1]]})
} else if (this.state.value==83){
    this.setState({strings : [[-3, 1, 4, -3, -4, -3], [-4, -3, -2, -3, -1, -1]]})
} else if (this.state.value==84){
    this.setState({strings : [[2, 1, -2, 1, 3, 2], [-4, 2, 1, -2, -4, 3]]})
} else if (this.state.value==85){
    this.setState({strings : [[-3, 3, 0, -3, 0, 3], [2, 0, 3, -3, -1, 4]]})
} else if (this.state.value==86){
    this.setState({strings : [[-2, 2, -2, 4, 1, -3], [-4, -4, -2, 2, -4, -4]]})
} else if (this.state.value==87){
    this.setState({strings : [[3, -4, 0, -2, 0, 1], [-1, 2, 3, 1, 0, 1], [0, -3, 4, -4, -1, -1]]})
} else if (this.state.value==88){
    this.setState({strings : [[-4, -2, 2, 3, 3, -4]]})
} else if (this.state.value==89){
    this.setState({strings : [[-4, -1, 0, 3, 0, 1], [3, 0, -1, -2, -2, 0]]})
} else if (this.state.value==90){
    this.setState({strings : [[-4, 3, -2, 2, -2, -4]]})
} else if (this.state.value==91){
    this.setState({strings : [[1, 3, 2, 3, 0, 0], [1, -2, 0, 4, -4, 3]]})
} else if (this.state.value==92){
    this.setState({strings : [[3, 0, 4, -4, 1, 1], [4, -4, 0, 4, -4, -1]]})
} else if (this.state.value==93){
    this.setState({strings : [[2, 4, 0, -2, -3, 2]]})
} else if (this.state.value==94){
    this.setState({strings : [[2, -3, 2, 2, -4, 0], [3, -3, -3, 2, -3, -3]]})
} else if (this.state.value==95){
    this.setState({strings : [[4, 0, -1, 3, -1, 3], [1, -4, 1, 1, -1, 0]]})
} else if (this.state.value==96){
    this.setState({strings : [[2, -1, 0, -2, 2, -2]]})
} else if (this.state.value==97){
    this.setState({strings : [[2, 0, -3, 0, -1, -3], [0, -4, -1, -3, 2, 3], [3, 0, 2, 2, -1, -1]]})
} else if (this.state.value==98){
    this.setState({strings : [[-4, -3, 2, 2, 2, 2]]})
} else if (this.state.value==99){
    this.setState({strings : [[-1, 4, 3, 2, 4, -4], [1, 2, -1, -3, -2, -4]]})
} else if (this.state.value==100){
    this.setState({strings : [[1, -4, -3, -1, -2, 1], [3, -2, 0, 4, -4, -3], [3, -2, 2, -4, -4, -2]]})
} else if (this.state.value==101){
    this.setState({strings : [[4, -4, 4, 0, 4, -4], [-3, -1, 3, -2, -2, 1], [-2, -1, -3, 1, 0, 3]]})
} else if (this.state.value==102){
    this.setState({strings : [[-1, 1, 0, 3, -3, 1]]})
} else if (this.state.value==103){
    this.setState({strings : [[0, -1, 1, -2, 4, 1], [3, -4, 1, -3, -1, 0], [2, 2, 1, -2, -1, 1]]})
} else if (this.state.value==104){
    this.setState({strings : [[4, -3, 1, 4, 3, 2], [-2, 3, -1, 4, 3, -4]]})
} else if (this.state.value==105){
    this.setState({strings : [[-4, 1, -3, -2, 2, 3], [1, -1, 4, 2, -3, 4], [3, -1, 3, 4, -3, -3]]})
} else if (this.state.value==106){
    this.setState({strings : [[-2, -1, -3, -2, 3, -2], [-3, 1, -2, 1, -3, 1], [2, 4, -1, -3, 0, -1]]})
} else if (this.state.value==107){
    this.setState({strings : [[2, -4, -3, -4, 0, -3]]})
} else if (this.state.value==108){
    this.setState({strings : [[4, 3, 0, 3, -1, 1]]})
} else if (this.state.value==109){
    this.setState({strings : [[4, -3, -4, 3, 3, 4], [-1, -1, 2, 2, 2, -1]]})
} else if (this.state.value==110){
    this.setState({strings : [[0, 0, -2, 3, 4, 4]]})
} else if (this.state.value==111){
    this.setState({strings : [[-3, -1, 2, -1, 2, -4], [-2, 2, -1, 4, 1, 1]]})
} else if (this.state.value==112){
    this.setState({strings : [[4, -2, 3, -4, 1, -2], [0, -3, 3, -4, -4, 0]]})
} else if (this.state.value==113){
    this.setState({strings : [[0, 4, 1, -2, 4, -2]]})
} else if (this.state.value==114){
    this.setState({strings : [[-1, 3, 0, 1, 1, -2], [2, 4, -1, 0, -3, 1], [-1, 2, -4, -2, -2, -1]]})
} else if (this.state.value==115){
    this.setState({strings : [[4, 2, -4, 4, -1, 1]]})
} else if (this.state.value==116){
    this.setState({strings : [[4, -1, 2, 3, 2, -2], [1, 0, 2, 4, -3, -2], [0, -1, -1, -3, 2, 0]]})
} else if (this.state.value==117){
    this.setState({strings : [[0, -4, -4, 3, 4, 1], [1, 2, -2, -1, -1, -1]]})
} else if (this.state.value==118){
    this.setState({strings : [[-3, 2, -4, 1, -1, 4], [-1, 2, -3, -3, 4, -1], [0, -1, -3, 1, 2, 1]]})
} else if (this.state.value==119){
    this.setState({strings : [[-2, -2, -2, 0, -4, -1]]})
} else if (this.state.value==120){
    this.setState({strings : [[4, -1, 1, -2, 4, 4], [3, 1, -2, 2, -2, 3]]})
} else if (this.state.value==121){
    this.setState({strings : [[3, -2, -3, 4, 1, -1], [4, -4, -1, -2, -3, -3], [1, -3, 4, 3, 0, 2]]})
} else if (this.state.value==122){
    this.setState({strings : [[-2, 2, 3, -2, 0, 0]]})
} else if (this.state.value==123){
    this.setState({strings : [[1, 4, -4, -4, -2, -4], [1, -3, -2, 0, 4, 1], [3, 2, 3, 4, 2, 3]]})
} else if (this.state.value==124){
    this.setState({strings : [[-2, 3, 4, 2, -4, 2], [3, 4, 3, -1, -4, 3], [-3, 2, 0, -4, 2, 3]]})
} else if (this.state.value==125){
    this.setState({strings : [[1, 0, -4, 4, -1, 1], [-3, -1, -2, 4, 2, 2], [4, 3, -3, 1, 2, -4]]})
} else if (this.state.value==126){
    this.setState({strings : [[1, -1, 4, 4, 0, -2], [-1, 1, 2, 1, 4, 0]]})
} else if (this.state.value==127){
    this.setState({strings : [[-2, -1, 3, -2, -2, -4]]})
} else if (this.state.value==128){
    this.setState({strings : [[-4, -3, -1, 2, 2, -1], [3, 3, 4, 2, -1, -2], [3, -2, 2, 2, 4, 2]]})
} else if (this.state.value==129){
    this.setState({strings : [[-2, -4, -1, -2, 4, -2], [-3, 1, 3, 1, 3, -3], [-3, -2, -2, -1, -4, -2]]})
} else if (this.state.value==130){
    this.setState({strings : [[2, 4, 0, -2, 4, 2]]})
} else if (this.state.value==131){
    this.setState({strings : [[0, -1, 1, -2, -2, 4], [-3, -4, 4, 1, 0, -3], [0, 0, 1, -2, -1, -2]]})
} else if (this.state.value==132){
    this.setState({strings : [[3, 1, 2, 3, 2, -1], [4, 2, 3, -3, 2, -3], [2, -2, 3, -3, -1, 2]]})
} else if (this.state.value==133){
    this.setState({strings : [[-2, 1, -3, 1, -4, -2]]})
} else if (this.state.value==134){
    this.setState({strings : [[0, 1, 0, 3, -2, -1], [3, -4, 3, 2, 0, -4]]})
} else if (this.state.value==135){
    this.setState({strings : [[1, -4, -1, -3, 0, -3], [-3, -1, 1, -3, 1, -4]]})
} else if (this.state.value==136){
    this.setState({strings : [[3, 1, 2, -3, 2, 0], [-1, 4, -2, 3, 1, -4], [-3, -1, -4, 4, -4, 3]]})
} else if (this.state.value==137){
    this.setState({strings : [[-1, 2, 0, 3, -2, -1], [0, 4, 1, 0, 3, 4]]})
} else if (this.state.value==138){
    this.setState({strings : [[4, 3, -1, -1, 3, 2]]})
} else if (this.state.value==139){
    this.setState({strings : [[-1, 1, 3, 2, -4, -4], [3, 3, -1, -1, -4, -4]]})
} else if (this.state.value==140){
    this.setState({strings : [[2, 1, 3, -2, 4, 0], [-3, -3, 4, 2, -2, -3], [-2, 2, -3, 0, -4, 3]]})
} else if (this.state.value==141){
    this.setState({strings : [[0, -4, 2, -1, -1, 1]]})
} else if (this.state.value==142){
    this.setState({strings : [[-3, 1, 4, -2, -2, 4]]})
} else if (this.state.value==143){
    this.setState({strings : [[3, 3, 2, -4, 4, 1], [1, -1, -1, -4, -3, 3]]})
} else if (this.state.value==144){
    this.setState({strings : [[2, -1, 0, 1, -3, -3], [2, 0, 0, 3, 3, 2]]})
} else if (this.state.value==145){
    this.setState({strings : [[-3, 3, -2, -4, 1, 1]]})
} else if (this.state.value==146){
    this.setState({strings : [[2, -2, -4, 2, 2, -4], [-2, -2, 4, 2, 2, 0], [-4, 2, 2, 2, 1, 1]]})
} else if (this.state.value==147){
    this.setState({strings : [[4, -3, -4, 2, 3, 3], [-1, 2, -1, 2, -1, 2], [-2, -1, 3, -4, 3, 1]]})
} else if (this.state.value==148){
    this.setState({strings : [[-3, 4, 0, -3, -4, -3], [-4, 1, 4, -3, -1, -3]]})
} else if (this.state.value==149){
    this.setState({strings : [[2, 0, 1, 0, 4, 4]]})
} else if (this.state.value==150){
    this.setState({strings : [[0, 2, -4, -4, 2, -4]]})
} else if (this.state.value==151){
    this.setState({strings : [[-4, -4, -3, 1, 4, 2]]})
} else if (this.state.value==152){
    this.setState({strings : [[1, -3, -2, -1, -1, -3], [-1, -2, -2, 2, -1, -3]]})
} else if (this.state.value==153){
    this.setState({strings : [[-4, -1, 3, -4, 2, 0]]})
} else if (this.state.value==154){
    this.setState({strings : [[1, -2, 2, 1, -1, -1], [0, 0, 4, 3, -3, -2], [-2, -2, -3, 1, 0, -4]]})
} else if (this.state.value==155){
    this.setState({strings : [[-4, 4, 2, -3, 4, 3], [0, 0, -2, 3, -4, 4], [-1, 2, 4, 0, 1, 0]]})
} else if (this.state.value==156){
    this.setState({strings : [[-4, 4, -3, 1, -4, -1], [3, -1, 1, 1, -4, -4], [1, -2, -4, 4, -3, -1]]})
} else if (this.state.value==157){
    this.setState({strings : [[0, 3, 0, -3, -4, -4], [1, -4, -1, 1, 2, 3]]})
} else if (this.state.value==158){
    this.setState({strings : [[3, 0, 4, -2, -1, -3]]})
} else if (this.state.value==159){
    this.setState({strings : [[-2, -2, 4, 1, 2, 0]]})
} else if (this.state.value==160){
    this.setState({strings : [[-3, 4, -1, 1, -4, 2], [-3, -3, 1, -2, -2, -2]]})
} else if (this.state.value==161){
    this.setState({strings : [[-2, 3, 0, -4, -2, 0]]})
} else if (this.state.value==162){
    this.setState({strings : [[0, -1, 1, 3, -4, 0]]})
} else if (this.state.value==163){
    this.setState({strings : [[-1, -2, -1, 4, 1, 2], [-1, -4, -2, 3, 4, -4]]})
} else if (this.state.value==164){
    this.setState({strings : [[4, -2, -1, -3, -4, -2], [0, -1, -4, 0, -4, 3], [-2, -3, -2, 3, -1, -1]]})
} else if (this.state.value==165){
    this.setState({strings : [[1, 0, -1, -3, 3, -1]]})
} else if (this.state.value==166){
    this.setState({strings : [[3, 2, 1, 3, -4, -2]]})
} else if (this.state.value==167){
    this.setState({strings : [[-3, -2, -1, 1, 2, -1], [0, 1, 1, 0, -4, -4]]})
} else if (this.state.value==168){
    this.setState({strings : [[1, 2, 1, 3, 3, 2]]})
} else if (this.state.value==169){
    this.setState({strings : [[-3, -3, 3, 2, -4, 0], [3, -2, -3, -3, 2, 2], [1, 4, -1, -4, 4, -4]]})
} else if (this.state.value==170){
    this.setState({strings : [[1, -1, 0, -2, -3, 1], [-3, -4, 3, -3, 0, 3], [3, 3, -3, -3, -2, -4]]})
} else if (this.state.value==171){
    this.setState({strings : [[-3, 0, -2, 0, 0, -2]]})
} else if (this.state.value==172){
    this.setState({strings : [[3, 4, -3, 1, 4, 2], [-1, 2, 1, -3, 3, 0]]})
} else if (this.state.value==173){
    this.setState({strings : [[-2, -1, -2, 2, 0, -4]]})
} else if (this.state.value==174){
    this.setState({strings : [[-2, 2, -1, 2, -4, -3], [3, -4, -2, -2, 2, -1]]})
} else if (this.state.value==175){
    this.setState({strings : [[-4, 1, 3, -4, -2, 4]]})
} else if (this.state.value==176){
    this.setState({strings : [[3, 2, 3, -4, 3, 4], [4, 3, 1, -4, 0, 2], [-4, 3, -1, 3, 4, -4]]})
} else if (this.state.value==177){
    this.setState({strings : [[-3, 4, 0, -3, 3, 1], [1, -3, 1, -1, 3, 2]]})
} else if (this.state.value==178){
    this.setState({strings : [[-2, 1, 0, 4, -1, 2], [0, -1, -4, 4, 0, 4], [3, -4, 0, 1, 2, 0]]})
} else if (this.state.value==179){
    this.setState({strings : [[-2, 1, 2, -1, -3, -4], [2, -1, 4, -2, 4, -1], [3, -4, -3, -2, 0, -4]]})
} else if (this.state.value==180){
    this.setState({strings : [[0, -3, 1, 3, -4, 4]]})
} else if (this.state.value==181){
    this.setState({strings : [[2, 1, -2, -2, -1, 4]]})
} else if (this.state.value==182){
    this.setState({strings : [[-2, 4, -3, -2, -2, 0]]})
} else if (this.state.value==183){
    this.setState({strings : [[-1, 2, -4, 4, -4, -1]]})
} else if (this.state.value==184){
    this.setState({strings : [[0, 1, 1, -2, -1, -1], [3, -2, 3, -1, 3, 3]]})
} else if (this.state.value==185){
    this.setState({strings : [[3, -3, 4, 0, 2, -2]]})
} else if (this.state.value==186){
    this.setState({strings : [[-3, -4, 4, 1, 0, -1], [4, 2, -3, 2, 1, 4]]})
} else if (this.state.value==187){
    this.setState({strings : [[-4, -2, 4, 2, 0, -1], [0, 3, -2, 3, 2, -2], [1, 1, 1, -1, 1, 1]]})
} else if (this.state.value==188){
    this.setState({strings : [[-2, -2, 3, 3, -4, 2], [-2, 1, -3, -1, -4, -1]]})
} else if (this.state.value==189){
    this.setState({strings : [[1, 4, -3, 3, 1, 2], [0, 1, 1, 3, -2, 4]]})
} else if (this.state.value==190){
    this.setState({strings : [[-4, -3, 3, -2, 3, 3], [2, -3, -1, -4, -4, -1]]})
} else if (this.state.value==191){
    this.setState({strings : [[-4, -3, 4, -4, 1, 2], [-4, 2, 0, -3, -2, 4]]})
} else if (this.state.value==192){
    this.setState({strings : [[-2, 0, 2, 4, -1, 4]]})
} else if (this.state.value==193){
    this.setState({strings : [[-3, -4, 2, 4, -2, -4], [0, -4, -3, 3, -4, 4]]})
} else if (this.state.value==194){
    this.setState({strings : [[-2, 4, -2, 4, -4, -2], [-4, -2, -4, 0, 0, -3]]})
} else if (this.state.value==195){
    this.setState({strings : [[-1, 3, 1, -2, 3, 2], [-3, -4, 2, 4, 3, -3], [1, 0, 0, -1, 0, -1]]})
} else if (this.state.value==196){
    this.setState({strings : [[3, -4, -3, -3, 3, 0], [-1, 3, 1, 4, 3, -2], [-1, 0, 2, 2, 0, -1]]})
} else if (this.state.value==197){
    this.setState({strings : [[-2, -2, 4, 0, 2, 4], [3, 0, 2, 1, 0, -4]]})
} else if (this.state.value==198){
    this.setState({strings : [[-4, 2, 4, 2, -4, -4]]})
} else if (this.state.value==199){
    this.setState({strings : [[-1, -2, -3, -3, 0, -3], [2, 0, 3, 4, 4, -2], [-3, -4, -3, -2, 4, -3]]})
} else if (this.state.value==200){
    this.setState({strings : [[-2, 0, 1, 4, -4, -4]]})
} else if (this.state.value==201){
    this.setState({strings : [[0, -4, -2, -4, -4, 3], [-1, -2, 1, 1, -3, -1], [-4, 0, 2, 3, -1, 3]]})
} else if (this.state.value==202){
    this.setState({strings : [[-4, 0, -3, 1, 3, 0]]})
} else if (this.state.value==203){
    this.setState({strings : [[-3, -1, 0, -1, 0, -2]]})
} else if (this.state.value==204){
    this.setState({strings : [[-2, -3, -2, -3, 2, -3], [-3, 0, 4, 3, 2, -3]]})
} else if (this.state.value==205){
    this.setState({strings : [[3, 4, -1, 1, -3, 1], [0, 1, 4, 4, 3, 4]]})
} else if (this.state.value==206){
    this.setState({strings : [[-2, -1, -4, 3, -3, 1], [-2, -2, 2, -3, 1, -4], [4, -4, 1, -1, 0, 2]]})
} else if (this.state.value==207){
    this.setState({strings : [[4, -2, -2, -4, -4, -2], [-1, -1, -1, 0, -2, 3], [2, -3, -2, -1, 1, -4]]})
} else if (this.state.value==208){
    this.setState({strings : [[2, -2, 1, 1, 0, 1], [-4, 3, -2, 4, -3, 1]]})
} else if (this.state.value==209){
    this.setState({strings : [[-4, -4, 1, -4, 0, -1]]})
} else if (this.state.value==210){
    this.setState({strings : [[1, -4, 1, 0, 2, 2], [-1, 3, 4, -1, -3, -2]]})
} else if (this.state.value==211){
    this.setState({strings : [[-4, 2, -3, 0, 2, -4], [2, 2, -1, 4, -3, -1]]})
} else if (this.state.value==212){
    this.setState({strings : [[0, -2, -1, -2, 0, -3], [0, 3, -1, 3, 1, -4], [1, 4, -4, -1, 4, -2]]})
} else if (this.state.value==213){
    this.setState({strings : [[-1, 2, -1, 1, -3, 1], [1, -1, -4, -3, 0, 2]]})
} else if (this.state.value==214){
    this.setState({strings : [[-3, 3, -1, -1, 2, 0]]})
} else if (this.state.value==215){
    this.setState({strings : [[0, 4, -4, -3, -3, -1], [-3, -1, 0, 2, 3, 2]]})
} else if (this.state.value==216){
    this.setState({strings : [[0, 1, 4, -3, -4, 2], [-1, 1, 3, -1, -1, 2], [3, -2, -3, -2, 0, -2]]})
} else if (this.state.value==217){
    this.setState({strings : [[4, -1, -4, -3, 0, -3]]})
} else if (this.state.value==218){
    this.setState({strings : [[1, 1, 2, 1, 3, 3]]})
} else if (this.state.value==219){
    this.setState({strings : [[1, 1, -4, 4, -4, -2]]})
} else if (this.state.value==220){
    this.setState({strings : [[-3, -3, -2, -3, -3, -3]]})
} else if (this.state.value==221){
    this.setState({strings : [[-4, -4, 3, -1, 1, -1], [-3, 3, 4, 3, -1, -2], [0, -3, -1, -1, 3, -4]]})
} else if (this.state.value==222){
    this.setState({strings : [[0, 4, -2, 3, 0, -2]]})
} else if (this.state.value==223){
    this.setState({strings : [[4, -3, -2, 1, 3, -4]]})
} else if (this.state.value==224){
    this.setState({strings : [[-2, 0, 3, -2, -2, 2], [3, -4, 1, 0, -3, -3], [0, 1, -4, 2, 4, 1]]})
} else if (this.state.value==225){
    this.setState({strings : [[2, -1, 0, 1, -1, 4]]})
} else if (this.state.value==226){
    this.setState({strings : [[0, -2, 0, -3, 0, -2]]})
} else if (this.state.value==227){
    this.setState({strings : [[-2, -2, 4, 0, 3, -4]]})
} else if (this.state.value==228){
    this.setState({strings : [[2, 0, -2, -4, 2, -3], [-3, 1, -3, 1, -3, -3], [1, -4, -4, 4, -3, 2]]})
} else if (this.state.value==229){
    this.setState({strings : [[-3, -1, 2, 3, 1, 2]]})
} else if (this.state.value==230){
    this.setState({strings : [[-3, 2, 1, 1, 0, -1], [0, -4, 1, 1, 0, 4]]})
} else if (this.state.value==231){
    this.setState({strings : [[2, 3, 3, 0, -2, 4]]})
} else if (this.state.value==232){
    this.setState({strings : [[2, 3, -2, 4, 0, 4]]})
} else if (this.state.value==233){
    this.setState({strings : [[-3, -2, 1, 1, -1, -1]]})
} else if (this.state.value==234){
    this.setState({strings : [[1, -1, 0, 1, -4, -4], [1, 4, -4, 1, 3, -4], [-1, 4, -2, -4, -1, -4]]})
} else if (this.state.value==235){
    this.setState({strings : [[3, 2, 0, 0, 2, -2]]})
} else if (this.state.value==236){
    this.setState({strings : [[1, 0, 2, -1, 4, -1]]})
} else if (this.state.value==237){
    this.setState({strings : [[0, -4, 2, -4, 2, 1]]})
} else if (this.state.value==238){
    this.setState({strings : [[-3, 4, -1, -3, 1, -1], [2, -2, 1, -4, -1, 2], [3, 4, 0, 2, 1, 1]]})
} else if (this.state.value==239){
    this.setState({strings : [[-3, -1, -3, 2, -2, 1], [1, 1, -2, 1, -2, 1], [-2, 1, 2, 0, -3, 2]]})
} else if (this.state.value==240){
    this.setState({strings : [[4, 3, 2, -3, 2, 4]]})
} else if (this.state.value==241){
    this.setState({strings : [[4, -3, -4, 1, -1, -3], [0, 0, 2, -4, 0, -2]]})
} else if (this.state.value==242){
    this.setState({strings : [[3, 0, -3, -3, -1, -1]]})
} else if (this.state.value==243){
    this.setState({strings : [[3, 1, 0, -4, -3, 4], [0, -3, 2, -2, 3, 0]]})
} else if (this.state.value==244){
    this.setState({strings : [[-3, 0, -1, -4, -1, -1]]})
} else if (this.state.value==245){
    this.setState({strings : [[-3, 1, 0, -4, -4, -4], [-2, 0, 0, 1, -4, -2]]})
} else if (this.state.value==246){
    this.setState({strings : [[1, 3, 1, 1, -3, 4], [-1, 3, -3, 3, 4, 2], [-4, -2, 1, 1, 4, -1]]})
} else if (this.state.value==247){
    this.setState({strings : [[-3, 2, -3, -2, 2, 3], [2, 4, 0, 2, -3, -3], [1, -1, 1, 0, 3, 0]]})
} else if (this.state.value==248){
    this.setState({strings : [[1, 0, 3, -1, -2, -2]]})
} else if (this.state.value==249){
    this.setState({strings : [[-3, 0, -2, -2, 1, 2], [-3, -4, -4, 1, 4, -2], [2, 2, -4, -3, -1, 1]]})
} else if (this.state.value==250){
    this.setState({strings : [[-2, 3, 0, 3, 1, 3]]})
} else if (this.state.value==251){
    this.setState({strings : [[0, -1, 1, -4, -2, 1], [-2, -2, 1, -2, -2, 2], [4, -1, 1, 3, 2, 0]]})
} else if (this.state.value==252){
    this.setState({strings : [[1, -1, 2, 0, 1, 2], [-2, 0, 0, 4, 1, -3], [3, -1, 3, 0, 3, 0]]})
} else if (this.state.value==253){
    this.setState({strings : [[-4, 1, 3, -4, -4, 1], [2, 2, -1, 2, -4, -4]]})
} else if (this.state.value==254){
    this.setState({strings : [[1, -2, 3, -4, 2, 3]]})
} else if (this.state.value==255){
    this.setState({strings : [[1, -2, 4, -4, 1, 4]]})
} else if (this.state.value==256){
    this.setState({strings : [[-3, -4, -4, -2, -2, -1], [3, 0, 3, 0, -1, 2]]})
} else if (this.state.value==257){
    this.setState({strings : [[3, -2, 1, 3, -3, -4], [3, -4, -4, -2, -4, -2], [-1, -2, 2, 2, 3, -1]]})
} else if (this.state.value==258){
    this.setState({strings : [[3, -4, 1, 2, -2, -2]]})
} else if (this.state.value==259){
    this.setState({strings : [[-4, 0, 2, 4, 1, -3], [1, 3, 4, 4, 1, 0], [-4, -3, -1, -1, 2, 2]]})
} else if (this.state.value==260){
    this.setState({strings : [[3, -3, 2, 3, 1, -4], [1, 1, -2, 1, 4, -1], [3, 2, 2, -1, -4, -4]]})
} else if (this.state.value==261){
    this.setState({strings : [[-2, -2, 4, -4, 3, -3], [1, 2, 4, 4, 1, -4], [3, 2, -1, -1, -2, 4]]})
} else if (this.state.value==262){
    this.setState({strings : [[4, -2, 3, -2, 4, 2], [-4, 4, -1, 1, -3, -1]]})
} else if (this.state.value==263){
    this.setState({strings : [[3, 1, 3, -2, 4, 3], [4, -1, -2, 0, 0, -4]]})
} else if (this.state.value==264){
    this.setState({strings : [[-1, 0, 0, 4, 3, 4]]})
} else if (this.state.value==265){
    this.setState({strings : [[4, 0, 1, 0, -2, 3], [0, 3, 3, -4, 0, 1]]})
} else if (this.state.value==266){
    this.setState({strings : [[-1, 0, -4, -2, -2, -4], [2, -1, 0, -1, 2, -1]]})
} else if (this.state.value==267){
    this.setState({strings : [[-1, -2, -4, -1, 2, 0], [-4, -2, -2, -3, -3, 0]]})
} else if (this.state.value==268){
    this.setState({strings : [[-4, 4, -2, 4, 2, -1], [-4, 0, 0, -3, 4, -3], [-2, 2, -1, 2, 1, -1]]})
} else if (this.state.value==269){
    this.setState({strings : [[-3, 2, 4, 0, -4, -3], [-2, -2, 3, -4, -3, 3]]})
} else if (this.state.value==270){
    this.setState({strings : [[3, -2, 0, -2, -2, -2], [-2, -3, 3, 1, 1, 3]]})
} else if (this.state.value==271){
    this.setState({strings : [[-2, 2, -2, 2, -2, 1], [-1, -2, -4, -1, 4, -2], [-4, -3, 3, -2, -3, 2]]})
} else if (this.state.value==272){
    this.setState({strings : [[1, 0, 2, -3, 3, -2], [-1, 1, -1, -1, 1, 3]]})
} else if (this.state.value==273){
    this.setState({strings : [[-3, 3, -1, -3, -1, -1]]})
} else if (this.state.value==274){
    this.setState({strings : [[-2, -3, 3, 2, 2, -2], [1, 2, -4, 2, -4, 0], [2, 1, -1, 4, 2, 3]]})
} else if (this.state.value==275){
    this.setState({strings : [[-2, 2, -2, 1, 0, -3], [3, -1, 1, -4, 0, 3], [2, 2, -3, -4, -3, 1]]})
} else if (this.state.value==276){
    this.setState({strings : [[3, 3, 2, -2, -2, 2], [0, -4, -4, -4, -3, 0]]})
} else if (this.state.value==277){
    this.setState({strings : [[-4, -4, 2, 1, -2, -2]]})
} else if (this.state.value==278){
    this.setState({strings : [[-1, -3, 3, 3, 1, -4], [-4, 1, 3, 3, -4, 2], [0, -4, -2, 2, -2, -3]]})
} else if (this.state.value==279){
    this.setState({strings : [[1, -3, 3, 2, 0, 0], [-3, -3, 4, 1, -4, -2], [-2, -3, -2, 0, 4, -2]]})
} else if (this.state.value==280){
    this.setState({strings : [[3, -1, -4, 4, -2, 2]]})
} else if (this.state.value==281){
    this.setState({strings : [[-2, 4, 4, -2, 0, -3]]})
} else if (this.state.value==282){
    this.setState({strings : [[-1, 2, -2, 2, 0, 0], [-4, -3, -4, 4, 0, -4]]})
} else if (this.state.value==283){
    this.setState({strings : [[1, -2, 3, 1, -3, -3], [3, 4, -3, 3, 2, 0], [1, -4, 2, -2, 1, 0]]})
} else if (this.state.value==284){
    this.setState({strings : [[1, -4, 1, -3, 0, 2], [1, 2, 3, -4, 2, 4]]})
} else if (this.state.value==285){
    this.setState({strings : [[2, -2, -4, -1, -2, 2], [1, 1, 2, -2, -2, 3], [-3, -2, 4, 1, 1, 0]]})
} else if (this.state.value==286){
    this.setState({strings : [[2, -2, -4, 2, 4, 2], [-4, 4, 2, -4, 0, -1]]})
} else if (this.state.value==287){
    this.setState({strings : [[4, -2, -4, 2, 3, 3], [-1, 3, 2, 3, 3, -4], [1, 4, -1, 3, 3, -1]]})
} else if (this.state.value==288){
    this.setState({strings : [[4, -3, 4, -2, -2, 2]]})
} else if (this.state.value==289){
    this.setState({strings : [[-2, 4, -1, 0, -2, -3], [-1, 1, -4, 3, -2, 3]]})
} else if (this.state.value==290){
    this.setState({strings : [[-4, -2, -4, 3, 0, 1], [1, 3, -3, -4, 0, 4]]})
} else if (this.state.value==291){
    this.setState({strings : [[3, 4, -1, 0, 4, -2], [-2, 2, 1, -1, 4, -3]]})
} else if (this.state.value==292){
    this.setState({strings : [[-3, -1, 3, -2, -2, -3]]})
} else if (this.state.value==293){
    this.setState({strings : [[4, 3, 0, 2, 3, -3], [2, 4, -2, -4, 4, 3]]})
} else if (this.state.value==294){
    this.setState({strings : [[3, -4, 4, -3, 3, -3]]})
} else if (this.state.value==295){
    this.setState({strings : [[-3, 0, 0, -3, -2, 1], [3, -3, 2, -1, 0, -1], [-4, 3, -1, 3, 1, 3]]})
} else if (this.state.value==296){
    this.setState({strings : [[1, -4, -1, -3, 1, -2], [-2, 3, -2, 1, 1, 2], [-2, -1, -3, 2, -3, -3]]})
} else if (this.state.value==297){
    this.setState({strings : [[-3, -1, 1, 2, 2, -2]]})
} else if (this.state.value==298){
    this.setState({strings : [[4, -1, -1, 4, 3, 4], [-2, 4, 1, 2, 3, -3], [2, 1, 1, -3, -3, -2]]})
} else if (this.state.value==299){
    this.setState({strings : [[2, -4, 2, -3, 1, 1], [-2, 1, 1, 4, 0, 0], [4, 0, -1, 4, 4, 3]]})
} else if (this.state.value==300){
    this.setState({strings : [[0, 2, -2, -4, -2, -1]]})
} else if (this.state.value==301){
    this.setState({strings : [[-1, 3, -3, -3, 3, -1], [2, -3, 1, 0, -1, 4]]})
} else if (this.state.value==302){
    this.setState({strings : [[4, -4, 1, 2, -4, -2], [2, -1, 4, 2, -3, 2]]})
} else if (this.state.value==303){
    this.setState({strings : [[3, 4, 4, -2, -2, -1]]})
} else if (this.state.value==304){
    this.setState({strings : [[3, -4, 1, 2, 0, 2], [0, 2, -3, -4, 1, -1], [-4, 2, 1, -4, -2, -4]]})
} else if (this.state.value==305){
    this.setState({strings : [[2, 2, -1, -3, -2, 1]]})
} else if (this.state.value==306){
    this.setState({strings : [[4, 2, 1, 0, -2, -2], [-4, -3, -4, -3, -4, 3], [-1, 0, -1, 1, -2, 2]]})
} else if (this.state.value==307){
    this.setState({strings : [[-1, 1, -4, -3, -2, -1]]})
} else if (this.state.value==308){
    this.setState({strings : [[0, 1, -4, -3, -1, -3], [-2, 3, 3, 2, -4, -4]]})
} else if (this.state.value==309){
    this.setState({strings : [[-4, -2, 0, -3, 2, 1]]})
} else if (this.state.value==310){
    this.setState({strings : [[-4, 3, 1, 3, -3, -3], [-2, 1, 1, -4, 2, 3]]})
} else if (this.state.value==311){
    this.setState({strings : [[1, 2, 2, -1, -1, -1], [-1, 2, 4, 2, -3, -1], [3, -3, -3, -3, 0, 0]]})
} else if (this.state.value==312){
    this.setState({strings : [[-4, 1, -2, 1, -1, 4], [-4, 4, 3, 0, 3, -4]]})
} else if (this.state.value==313){
    this.setState({strings : [[3, 4, -4, 0, -4, 2], [-1, -1, 1, 3, 2, -4], [4, -1, -4, -2, 3, -3]]})
} else if (this.state.value==314){
    this.setState({strings : [[1, 4, -3, -4, 2, -4], [-3, 1, -4, -4, -1, -2]]})
} else if (this.state.value==315){
    this.setState({strings : [[-2, -4, 0, -4, 1, -4], [0, 4, 0, 4, 4, -4], [-3, 4, 0, -3, 3, 1]]})
} else if (this.state.value==316){
    this.setState({strings : [[3, -3, 0, 2, -4, 2]]})
} else if (this.state.value==317){
    this.setState({strings : [[-1, 3, 3, -2, 0, 1], [-3, -4, -2, 0, -2, -3]]})
} else if (this.state.value==318){
    this.setState({strings : [[2, -1, 2, 2, 4, -4], [4, 3, 1, 2, -4, -3]]})
} else if (this.state.value==319){
    this.setState({strings : [[-1, -3, -4, 2, -2, 2], [-1, 3, -3, -2, 2, 2], [1, 0, 0, 1, -1, -4]]})
} else if (this.state.value==320){
    this.setState({strings : [[-2, 4, -4, 3, 0, 3], [3, 0, 2, 3, -3, -2]]})
} else if (this.state.value==321){
    this.setState({strings : [[-4, 0, -1, -4, 1, -4], [-1, -1, 4, 1, -4, 4], [-1, -2, -4, 2, -1, -2]]})
} else if (this.state.value==322){
    this.setState({strings : [[0, 3, -4, -3, 0, 1]]})
} else if (this.state.value==323){
    this.setState({strings : [[-3, -3, 3, -2, -4, 2], [0, -1, 4, -2, 0, 1], [0, -1, -1, 1, 3, -4]]})
} else if (this.state.value==324){
    this.setState({strings : [[-4, -2, 2, -1, -2, 0], [0, -1, -1, 0, 3, 1], [3, 3, -4, 1, -2, 3]]})
} else if (this.state.value==325){
    this.setState({strings : [[2, -4, 1, 4, 0, -1]]})
} else if (this.state.value==326){
    this.setState({strings : [[-2, 2, -1, 1, 0, 1]]})
} else if (this.state.value==327){
    this.setState({strings : [[-3, -3, 2, -2, -1, -1], [-2, 1, -3, 1, -3, -4], [-3, -3, -4, 2, -2, -4]]})
} else if (this.state.value==328){
    this.setState({strings : [[2, -3, -4, -4, 2, 2], [3, 0, 0, 1, 3, 1], [2, 1, -4, 0, 2, -4]]})
} else if (this.state.value==329){
    this.setState({strings : [[-4, -4, 4, 1, -2, -3], [2, -3, 0, -2, 3, -3]]})
} else if (this.state.value==330){
    this.setState({strings : [[3, 4, 4, 4, 4, 1], [0, -3, 0, -2, -4, 2]]})
} else if (this.state.value==331){
    this.setState({strings : [[3, 2, 3, 1, -1, 0], [-1, 0, -2, 2, 4, -3]]})
} else if (this.state.value==332){
    this.setState({strings : [[-3, -4, 1, 0, 3, -3]]})
} else if (this.state.value==333){
    this.setState({strings : [[2, -4, 1, -2, -2, -4], [1, 2, -2, 1, -1, 3]]})
} else if (this.state.value==334){
    this.setState({strings : [[-4, 4, -1, 0, -2, -4], [3, -4, 1, 3, -2, -1]]})
} else if (this.state.value==335){
    this.setState({strings : [[-2, 3, 0, 1, 0, -2]]})
} else if (this.state.value==336){
    this.setState({strings : [[1, -3, 3, -2, -1, -1], [4, 0, 4, 1, 0, 2], [4, 1, 2, 0, 3, 4]]})
} else if (this.state.value==337){
    this.setState({strings : [[-2, -3, 3, 3, -4, -1]]})
} else if (this.state.value==338){
    this.setState({strings : [[-2, -2, -4, 3, -2, 1], [-2, 1, -2, 3, 2, 4], [-1, 1, -2, -1, 1, -3]]})
} else if (this.state.value==339){
    this.setState({strings : [[-2, 3, 4, -2, 2, 4], [3, -4, -2, 3, 2, -4]]})
} else if (this.state.value==340){
    this.setState({strings : [[0, -1, -3, 2, 0, -1]]})
} else if (this.state.value==341){
    this.setState({strings : [[-4, 1, 4, -4, 3, -4], [1, 3, -3, -4, -4, -4], [3, 1, 3, 4, 4, -2]]})
} else if (this.state.value==342){
    this.setState({strings : [[-3, 2, -1, 0, 1, -1]]})
} else if (this.state.value==343){
    this.setState({strings : [[0, 3, -4, -3, -1, 3]]})
} else if (this.state.value==344){
    this.setState({strings : [[-3, 3, -2, -2, 2, 4], [4, -2, 3, 4, 1, -2]]})
} else if (this.state.value==345){
    this.setState({strings : [[-2, 4, 2, 0, -3, 3], [-2, 3, -4, 0, -1, -1], [-2, -3, 4, 1, -3, 3]]})
} else if (this.state.value==346){
    this.setState({strings : [[3, 4, -1, -3, 0, -4], [-1, -3, 4, 2, 2, -2]]})
} else if (this.state.value==347){
    this.setState({strings : [[0, -3, 3, 2, 1, 3], [2, -2, -2, -3, 4, 4], [-3, 2, 1, 3, -1, -3]]})
} else if (this.state.value==348){
    this.setState({strings : [[-4, 2, -3, 1, -3, 2], [-2, -4, 3, -1, 3, 4]]})
} else if (this.state.value==349){
    this.setState({strings : [[-3, 4, -4, -4, 4, 1]]})
} else if (this.state.value==350){
    this.setState({strings : [[2, 3, -3, -3, -2, 0], [0, 2, 1, 2, 0, -3], [1, 2, -4, -3, -2, -2]]})
} else if (this.state.value==351){
    this.setState({strings : [[0, 3, 4, -1, 3, 3], [-3, -4, -2, 1, -2, -1], [2, 0, 4, 0, 4, -2]]})
} else if (this.state.value==352){
    this.setState({strings : [[2, 0, -2, 0, 4, 4], [-1, -4, -4, 3, 2, 3]]})
} else if (this.state.value==353){
    this.setState({strings : [[-3, 4, 4, 4, 2, -4]]})
} else if (this.state.value==354){
    this.setState({strings : [[3, -4, 0, 1, 0, 2]]})
} else if (this.state.value==355){
    this.setState({strings : [[-2, 0, -4, -3, 0, 2], [-3, -1, -3, 2, 0, -1]]})
} else if (this.state.value==356){
    this.setState({strings : [[-3, -3, -1, 1, 2, 3], [-1, -1, -3, 2, 3, 2]]})
} else if (this.state.value==357){
    this.setState({strings : [[-3, 4, 4, -2, -3, -3], [2, 0, -4, 3, 4, 2]]})
} else if (this.state.value==358){
    this.setState({strings : [[-2, 1, 2, 4, -3, -1]]})
} else if (this.state.value==359){
    this.setState({strings : [[-4, 1, 3, 3, 3, -1]]})
} else if (this.state.value==360){
    this.setState({strings : [[-4, 1, -4, 0, 4, 3], [3, 4, 1, 1, -2, -1], [0, 3, -1, 2, 4, 2]]})
} else if (this.state.value==361){
    this.setState({strings : [[0, 4, -1, -4, -1, -2]]})
} else if (this.state.value==362){
    this.setState({strings : [[-3, -4, -4, 3, 3, -1], [3, 1, 2, -2, -4, -4], [2, 1, -4, -2, 2, 3]]})
} else if (this.state.value==363){
    this.setState({strings : [[3, -1, 2, 4, -1, -1], [-1, 0, 4, 3, -3, -2]]})
} else if (this.state.value==364){
    this.setState({strings : [[-1, -2, -3, 3, 4, -1], [2, -1, -4, 2, -4, 3]]})
} else if (this.state.value==365){
    this.setState({strings : [[-4, 4, -1, 2, 0, 1], [-4, -3, -4, -2, 1, -2]]})
} else if (this.state.value==366){
    this.setState({strings : [[4, -4, -4, 3, -3, 4], [-4, 0, -4, 4, 2, 2]]})
} else if (this.state.value==367){
    this.setState({strings : [[1, 2, 1, -4, 3, 3]]})
} else if (this.state.value==368){
    this.setState({strings : [[-3, 3, 1, 4, 2, -1]]})
} else if (this.state.value==369){
    this.setState({strings : [[3, -2, 1, 0, 1, -2]]})
} else if (this.state.value==370){
    this.setState({strings : [[0, -1, 0, -4, -3, 3], [-4, 1, 0, 1, 4, -2], [-4, 0, -3, -1, 2, -2]]})
} else if (this.state.value==371){
    this.setState({strings : [[0, -2, 4, 1, 3, -4]]})
} else if (this.state.value==372){
    this.setState({strings : [[0, 3, -3, -4, -2, -3]]})
} else if (this.state.value==373){
    this.setState({strings : [[0, -2, -1, 4, -2, -4], [-3, -3, -4, 0, -2, 2]]})
} else if (this.state.value==374){
    this.setState({strings : [[-3, -4, 3, -4, 4, -1], [3, 1, 4, 2, -2, 3], [-3, -3, 0, 1, 4, -3]]})
} else if (this.state.value==375){
    this.setState({strings : [[0, 2, 0, -1, 3, 4]]})
} else if (this.state.value==376){
    this.setState({strings : [[4, 4, 4, -2, -3, -1]]})
} else if (this.state.value==377){
    this.setState({strings : [[4, -2, -2, 2, 2, 0], [-1, -3, 4, 1, -2, -1], [-4, -2, 1, -1, -2, 2]]})
} else if (this.state.value==378){
    this.setState({strings : [[-3, -1, -1, -1, 0, 4]]})
} else if (this.state.value==379){
    this.setState({strings : [[-3, -1, 3, 4, -4, 1], [-1, 1, 1, -4, -2, -4]]})
} else if (this.state.value==380){
    this.setState({strings : [[0, 3, 2, -3, 2, 1], [-1, 3, 4, -3, 2, 4], [-2, -4, 3, -4, 2, -2]]})
} else if (this.state.value==381){
    this.setState({strings : [[-1, -4, 3, -4, 1, -4], [-1, 2, -3, 0, 2, -2]]})
} else if (this.state.value==382){
    this.setState({strings : [[-2, -4, -4, -4, -3, -2]]})
} else if (this.state.value==383){
    this.setState({strings : [[-3, -1, -2, -4, 4, -1], [-1, 1, 2, -1, 4, 1]]})
} else if (this.state.value==384){
    this.setState({strings : [[-1, -3, -1, -2, 2, 3]]})
} else if (this.state.value==385){
    this.setState({strings : [[-4, 4, -2, -2, 4, 1]]})
} else if (this.state.value==386){
    this.setState({strings : [[-3, 2, -2, -3, -2, 2], [-2, 1, 0, -2, -1, 2], [1, -2, -2, 4, -3, 2]]})
} else if (this.state.value==387){
    this.setState({strings : [[-3, 2, 0, -4, -4, 2], [-4, -1, 1, 4, 0, -2]]})
} else if (this.state.value==388){
    this.setState({strings : [[3, -2, -1, -2, 0, 0], [-4, -1, 3, 1, 3, -1], [0, -3, 3, 0, 0, 0]]})
} else if (this.state.value==389){
    this.setState({strings : [[-1, -4, 1, 0, -1, 2], [-1, 0, 3, -2, 3, -3], [-4, 3, -1, 3, 1, 2]]})
} else if (this.state.value==390){
    this.setState({strings : [[-3, -3, 1, -1, 1, -4], [4, 1, 3, 0, 0, 1]]})
} else if (this.state.value==391){
    this.setState({strings : [[3, -2, -2, 0, -1, 1], [2, 1, -1, -1, -4, -3]]})
} else if (this.state.value==392){
    this.setState({strings : [[2, 1, 1, 1, 1, 3]]})
} else if (this.state.value==393){
    this.setState({strings : [[4, -4, 3, 4, 2, 2]]})
} else if (this.state.value==394){
    this.setState({strings : [[0, -2, 2, -1, 1, -4]]})
} else if (this.state.value==395){
    this.setState({strings : [[-4, 3, -4, -3, 4, -3], [-4, 4, 4, 4, 0, 1], [0, 4, 3, 2, 1, 3]]})
} else if (this.state.value==396){
    this.setState({strings : [[-2, 3, 4, 0, -3, 1], [-2, 3, -4, -1, 0, 4]]})
} else if (this.state.value==397){
    this.setState({strings : [[0, 1, 4, 4, 2, 4], [-3, -2, 2, 0, -1, -1], [3, 1, 1, 1, -4, 0]]})
} else if (this.state.value==398){
    this.setState({strings : [[1, -2, -1, 0, 4, 4], [-4, 4, 0, 4, -4, 0]]})
} else if (this.state.value==399){
    this.setState({strings : [[0, 2, -1, 4, -4, -2], [4, 2, -2, 1, -2, -4], [-4, 2, -1, -1, -2, 2]]})
} else if (this.state.value==400){
    this.setState({strings : [[0, 0, 4, 3, 2, -4], [1, -3, -3, -2, 2, -3], [2, -3, 2, 4, 2, -2]]})
} else if (this.state.value==401){
    this.setState({strings : [[2, -2, 0, -2, -3, -1], [-3, 0, 2, 3, 0, -4], [4, -4, -1, 1, 4, 3]]})
} else if (this.state.value==402){
    this.setState({strings : [[-2, 4, 4, 4, 3, 1], [0, 1, 4, 3, -2, 3], [4, 4, 0, 2, 3, 1]]})
} else if (this.state.value==403){
    this.setState({strings : [[1, 4, -4, -4, 2, 1]]})
} else if (this.state.value==404){
    this.setState({strings : [[-2, -3, -4, 4, -4, -4], [-4, -2, 4, -3, 0, 3]]})
} else if (this.state.value==405){
    this.setState({strings : [[2, -2, -2, -3, -4, -2], [3, -1, 2, 3, 3, -3]]})
} else if (this.state.value==406){
    this.setState({strings : [[-2, -4, -2, 4, 3, 1], [1, -4, 0, 0, -2, 0]]})
} else if (this.state.value==407){
    this.setState({strings : [[-3, 3, 4, 1, 0, -2], [3, 2, -4, -3, 4, -4], [1, 4, -1, -4, 0, 0]]})
} else if (this.state.value==408){
    this.setState({strings : [[-1, 4, 0, -2, -1, -3]]})
} else if (this.state.value==409){
    this.setState({strings : [[-4, 3, -3, 0, -2, -3], [-3, -3, -4, 1, 0, 1]]})
} else if (this.state.value==410){
    this.setState({strings : [[-1, -3, 0, 4, 3, 1], [-4, -3, -1, 1, -1, -1]]})
} else if (this.state.value==411){
    this.setState({strings : [[4, 4, -1, -3, -4, 3], [-4, -1, 3, 4, -4, 3]]})
} else if (this.state.value==412){
    this.setState({strings : [[-2, 0, -1, 4, 4, -1], [-2, 3, 2, 2, 4, 2], [3, -2, 2, 4, -1, 3]]})
} else if (this.state.value==413){
    this.setState({strings : [[3, 0, -1, -4, -2, 1]]})
} else if (this.state.value==414){
    this.setState({strings : [[2, 0, 3, -2, 0, 1]]})
} else if (this.state.value==415){
    this.setState({strings : [[-3, -4, 4, 1, 0, 1], [1, 2, 1, -3, 0, -4]]})
} else if (this.state.value==416){
    this.setState({strings : [[4, 4, 0, 4, 4, -2]]})
} else if (this.state.value==417){
    this.setState({strings : [[-1, 4, 1, -2, 3, -3], [-3, 1, 1, 3, 3, -1]]})
} else if (this.state.value==418){
    this.setState({strings : [[1, -4, -3, -4, 3, 2], [-4, 4, 3, 0, -3, 1]]})
} else if (this.state.value==419){
    this.setState({strings : [[2, 0, -2, 1, -4, -2]]})
} else if (this.state.value==420){
    this.setState({strings : [[-1, -4, -1, 0, 2, -1]]})
} else if (this.state.value==421){
    this.setState({strings : [[3, 2, -2, 2, -3, 0]]})
} else if (this.state.value==422){
    this.setState({strings : [[-1, 0, 1, -2, 0, 2], [3, -4, 4, 1, -4, 1]]})
} else if (this.state.value==423){
    this.setState({strings : [[-3, -2, 1, -3, -1, 1]]})
} else if (this.state.value==424){
    this.setState({strings : [[-4, -1, 2, 2, 1, 4], [1, -1, 0, 3, -4, 0], [1, 0, -2, -1, 0, 4]]})
} else if (this.state.value==425){
    this.setState({strings : [[-1, -1, 2, 3, 0, 0], [3, 3, 3, -3, -4, -3]]})
} else if (this.state.value==426){
    this.setState({strings : [[1, -2, -3, 3, -3, 1]]})
} else if (this.state.value==427){
    this.setState({strings : [[-3, 4, 4, 4, 4, -3], [-4, -4, 3, 3, -4, 0], [-4, 4, 4, 1, 2, 2]]})
} else if (this.state.value==428){
    this.setState({strings : [[1, 4, -4, -3, 4, 3], [2, 1, -2, 3, -2, -3], [3, -4, 1, 0, 3, 1]]})
} else if (this.state.value==429){
    this.setState({strings : [[-1, 2, -4, -2, -1, 4]]})
} else if (this.state.value==430){
    this.setState({strings : [[2, 0, -1, -3, 3, -4], [-2, -1, 2, 0, 3, -2]]})
} else if (this.state.value==431){
    this.setState({strings : [[-2, 4, 0, 3, 3, 3], [-4, 4, -3, 3, -1, -2]]})
} else if (this.state.value==432){
    this.setState({strings : [[-3, 3, 4, -3, 4, 1], [2, -3, 3, 2, 1, 2], [3, -3, 3, -3, 0, -4]]})
} else if (this.state.value==433){
    this.setState({strings : [[0, -2, -2, -2, 0, 4], [2, 0, 0, -1, 2, 1], [4, 1, 2, -2, 4, -1]]})
} else if (this.state.value==434){
    this.setState({strings : [[2, 4, 4, 0, -4, 1], [2, -4, -4, 4, 1, -2], [-2, 2, 4, 0, -1, 4]]})
} else if (this.state.value==435){
    this.setState({strings : [[0, 0, 0, 2, -4, -2], [-2, -1, 1, -2, 1, -3]]})
} else if (this.state.value==436){
    this.setState({strings : [[0, -1, 2, 4, 0, 1]]})
} else if (this.state.value==437){
    this.setState({strings : [[-1, -4, 1, 3, 0, 1]]})
} else if (this.state.value==438){
    this.setState({strings : [[2, -1, -2, -2, 0, -3], [0, -1, 3, 1, 0, -1]]})
} else if (this.state.value==439){
    this.setState({strings : [[1, -3, 1, -2, -2, -3]]})
} else if (this.state.value==440){
    this.setState({strings : [[3, 0, -1, 4, -4, -3], [2, 2, -4, 3, 0, 2]]})
} else if (this.state.value==441){
    this.setState({strings : [[-4, -3, -1, 3, 4, 3], [0, 0, -3, 3, -1, -2], [0, -3, -3, 0, -2, 2]]})
} else if (this.state.value==442){
    this.setState({strings : [[2, -2, -1, 1, -4, 4]]})
} else if (this.state.value==443){
    this.setState({strings : [[0, 3, 3, 0, -3, -1], [0, -2, -1, 1, -3, 1]]})
} else if (this.state.value==444){
    this.setState({strings : [[0, 3, -2, -3, -3, 3]]})
} else if (this.state.value==445){
    this.setState({strings : [[4, 4, 0, 3, 1, 0], [4, 4, 1, -2, 1, 1]]})
} else if (this.state.value==446){
    this.setState({strings : [[0, -3, -1, -2, 0, 4], [0, 1, 1, -2, -3, 3]]})
} else if (this.state.value==447){
    this.setState({strings : [[2, 4, 4, -1, -3, -1], [3, -4, 0, 1, -1, -4], [-4, -2, 4, 4, -4, -2]]})
} else if (this.state.value==448){
    this.setState({strings : [[-2, -4, 2, 3, -1, 1]]})
} else if (this.state.value==449){
    this.setState({strings : [[-2, -3, 1, 2, -2, -1], [-4, -3, -1, 0, 2, -3]]})
} else if (this.state.value==450){
    this.setState({strings : [[-4, 4, -3, -2, 1, 2], [1, -3, -1, -4, 2, -1], [-3, 1, -4, 1, 4, -4]]})
} else if (this.state.value==451){
    this.setState({strings : [[-3, 1, 2, 2, 3, -1], [-2, -2, 3, -2, -4, -2]]})
} else if (this.state.value==452){
    this.setState({strings : [[0, -3, -4, 4, 4, -4], [4, 0, 4, 3, 0, -1], [0, -3, 2, 1, 1, 3]]})
} else if (this.state.value==453){
    this.setState({strings : [[-3, 0, -1, 1, 0, -2], [4, -4, -1, -3, -4, 0]]})
} else if (this.state.value==454){
    this.setState({strings : [[-2, 2, -3, 1, 2, -3], [4, -1, 0, 2, 2, 4], [0, 2, 3, 0, -1, -4]]})
} else if (this.state.value==455){
    this.setState({strings : [[0, -1, 0, 1, -3, 4]]})
} else if (this.state.value==456){
    this.setState({strings : [[-1, 3, -1, -1, 2, -1]]})
} else if (this.state.value==457){
    this.setState({strings : [[-2, 1, 1, -4, 0, -4], [-4, -2, 4, 0, -1, -4], [-3, -3, -3, -2, -2, 0]]})
} else if (this.state.value==458){
    this.setState({strings : [[4, 4, -3, -1, 2, 0], [-3, 1, -2, 1, 1, -2]]})
} else if (this.state.value==459){
    this.setState({strings : [[2, -3, 4, -3, 3, -1], [2, 3, -2, 3, -1, -2]]})
} else if (this.state.value==460){
    this.setState({strings : [[0, -1, -3, 4, 0, 4], [4, 3, 4, -2, 4, -1]]})
} else if (this.state.value==461){
    this.setState({strings : [[4, -3, -3, -4, 1, -3], [4, -3, -3, -1, 0, -1], [2, -1, -4, -4, 0, 1]]})
} else if (this.state.value==462){
    this.setState({strings : [[-2, -1, 1, 4, 2, -4], [1, 3, 1, -1, -4, 0]]})
} else if (this.state.value==463){
    this.setState({strings : [[2, 0, -1, 2, 0, 2]]})
} else if (this.state.value==464){
    this.setState({strings : [[-2, 4, 3, 0, -3, -4], [-2, 0, 2, 3, -2, 0]]})
} else if (this.state.value==465){
    this.setState({strings : [[3, -4, 1, -3, -1, -3], [-3, 0, 0, 0, 3, 2]]})
} else if (this.state.value==466){
    this.setState({strings : [[-2, 0, 1, 4, 4, -2], [-1, 4, 0, 1, -1, -4], [4, -2, -3, -1, -1, 4]]})
} else if (this.state.value==467){
    this.setState({strings : [[-1, 0, 2, 1, -2, -2], [-4, -3, -3, 1, 1, -1], [-2, 2, 3, -1, -1, 2]]})
} else if (this.state.value==468){
    this.setState({strings : [[-1, -2, 0, -2, -3, 1], [-4, -4, 3, -1, 2, -3], [-2, -3, 3, 3, 2, -2]]})
} else if (this.state.value==469){
    this.setState({strings : [[1, -1, 3, 2, 3, 3], [0, 0, -4, 0, 1, 3], [1, -3, 2, -1, -4, 2]]})
} else if (this.state.value==470){
    this.setState({strings : [[1, 1, -4, 0, 4, -2], [0, 4, 1, -3, -1, 2], [1, 2, -4, -3, 0, 2]]})
} else if (this.state.value==471){
    this.setState({strings : [[-4, -1, 1, 2, 4, 0], [2, 0, 0, -2, -4, 3]]})
} else if (this.state.value==472){
    this.setState({strings : [[-1, 0, 4, 2, 0, -2]]})
} else if (this.state.value==473){
    this.setState({strings : [[-1, 2, 4, 1, -4, 3], [-4, -4, 0, 4, 2, -2]]})
} else if (this.state.value==474){
    this.setState({strings : [[0, 4, 2, 2, -3, 3], [-2, 2, 3, 4, 2, -4]]})
} else if (this.state.value==475){
    this.setState({strings : [[2, 0, 0, 0, -4, 2], [3, -3, -4, -3, -2, 4], [1, 0, 2, 4, 1, 0]]})
} else if (this.state.value==476){
    this.setState({strings : [[-3, 3, -1, -3, 4, 1], [2, 4, -2, -4, 3, 2]]})
} else if (this.state.value==477){
    this.setState({strings : [[-3, 4, 3, -2, 2, 4], [-2, 4, -2, 1, -2, -4]]})
} else if (this.state.value==478){
    this.setState({strings : [[3, 0, -4, 2, -1, 3], [2, 3, 3, -1, 1, -4], [-2, -1, 4, -1, 3, -2]]})
} else if (this.state.value==479){
    this.setState({strings : [[4, 2, -1, 3, -1, -1], [0, -1, -4, -1, 4, -2]]})
} else if (this.state.value==480){
    this.setState({strings : [[-1, -4, 3, 3, -3, -3]]})
} else if (this.state.value==481){
    this.setState({strings : [[4, 4, 3, -1, -1, 3], [2, 3, -1, -4, -3, -4]]})
} else if (this.state.value==482){
    this.setState({strings : [[-1, 4, -1, -3, -4, 1], [-4, -4, -2, 4, 3, 4]]})
} else if (this.state.value==483){
    this.setState({strings : [[-2, 0, -2, -3, 0, 2], [0, 0, 1, 4, 1, -2]]})
} else if (this.state.value==484){
    this.setState({strings : [[-4, -2, 1, -3, -2, 3]]})
} else if (this.state.value==485){
    this.setState({strings : [[-2, 4, 0, -2, -2, -3], [0, 0, 4, 1, 2, -1], [0, 0, -3, -4, 0, 2]]})
} else if (this.state.value==486){
    this.setState({strings : [[0, 1, 3, -3, -2, 2], [-1, -4, 3, 0, 1, -3]]})
} else if (this.state.value==487){
    this.setState({strings : [[-4, 4, 4, 0, 4, -4]]})
} else if (this.state.value==488){
    this.setState({strings : [[3, -1, -4, -1, 3, 2], [-4, 0, -2, -4, 3, 4]]})
} else if (this.state.value==489){
    this.setState({strings : [[-3, 0, 0, 2, -1, 2], [2, -3, 2, -1, 2, -3]]})
} else if (this.state.value==490){
    this.setState({strings : [[-2, -1, 3, -1, 1, 2], [3, -1, 0, 4, -4, -3], [2, 3, -3, -1, 0, 3]]})
} else if (this.state.value==491){
    this.setState({strings : [[3, 2, -2, 1, 3, 2]]})
} else if (this.state.value==492){
    this.setState({strings : [[0, -3, -3, 4, -2, 2]]})
} else if (this.state.value==493){
    this.setState({strings : [[2, -4, 4, -4, -4, 1], [2, 2, 2, 1, -2, 1], [0, 2, -4, 2, 3, -2]]})
} else if (this.state.value==494){
    this.setState({strings : [[0, 1, 4, -3, -3, 2], [3, 4, 0, -4, 0, 4], [3, 2, 3, -3, 1, 4]]})
} else if (this.state.value==495){
    this.setState({strings : [[3, -4, 3, -1, 1, 4], [0, -4, 2, 3, -2, 2], [-1, 3, -1, 1, -3, 2]]})
} else if (this.state.value==496){
    this.setState({strings : [[-1, -1, 2, -2, -4, 1], [-4, 4, 0, 0, 3, 4], [-2, 2, 3, 0, 4, -1]]})
} else if (this.state.value==497){
    this.setState({strings : [[-3, 3, -1, 3, -2, -1], [3, -2, -1, 2, -2, -1], [-4, 0, 1, -1, 0, -2]]})
} else if (this.state.value==498){
    this.setState({strings : [[-2, -4, -1, 2, -3, 3], [4, 4, 4, -3, 2, 3]]})
} else if (this.state.value==499){
    this.setState({strings : [[1, -2, -1, 1, 1, -4], [4, 2, 4, 3, 4, 3], [2, 2, 2, 0, -2, 1]]})
} else if (this.state.value==500){
    this.setState({strings : [[0, 2, 4, -2, -3, 0], [1, 0, -3, 1, -2, 0]]})
} else if (this.state.value==501){
    this.setState({strings : [[-2, -2, 2, -4, 0, -4]]})
}

    this.setState()

  }


  render() {
   
     let  guitar= (<>
     <div className="container">
        <div className="row">
          <div className="container">
            <image src="logo.svg" width="300" height="100" />
          </div>
        </div>
        <div className="row">
          <div className="container">
            {this.state.strings.map((string) => (
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
    </>)
    
    return (
      <>
        <div>
        <form >        <label>
          Config:
          <input type="number" value={this.state.value} onChange={this.handleChange} />        </label>
        <input  type="button" onClick={this.handleSubmit} value="Submit" />
      </form>
      </div >
      {guitar}
      </>


      // document.getElementById("root")

    );
  }


}


export default App;

