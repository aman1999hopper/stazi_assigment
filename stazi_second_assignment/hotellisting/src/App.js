import logo from './logo.svg';
import './App.css';
import Tabcontainer from './components/tabcontainer';
import mumb from './images/download1.jpeg';
import mum from './images/download2.jpeg';
import mum4 from './images/m4.jpeg';
import M3 from './images/download3.jpeg';
import M5 from './images/m5.jpeg';
import M6 from './images/m6.jpeg';
import pari from './images/p1.jpeg';
import pari2 from './images/p2.jpeg';
import pari3 from './images/p3.jpeg';
import pari4 from './images/p4.jpeg';
import pari5 from './images/p5.jpeg';
import pari6 from './images/p6.jpeg';
import new1 from './images/n1.jpeg';
import new2 from './images/n2.jpeg';
import new3 from './images/n3.jpeg';
import new4 from './images/n4.jpeg';
import new5 from './images/n5.jpeg';
import new6 from './images/n6.jpeg';
import lon1 from './images/l1.jpeg';
import lon2 from './images/l2.jpeg';
import lon3 from './images/l3.jpeg';
import lon4 from './images/l4.jpeg';
import lon5 from './images/l5.jpeg';
import lon6 from './images/l6.jpeg';

function App() {
  const Parisdata= [
    { id: 1, name: 'Paris Las Vegas', add:'8558 Green Rd', price: '$840', url: pari },
    { id: 2, name: 'Hotel & Casino', add:'8558 Green Rd', price: '$1000', url: pari2 },
    { id: 3, name: 'Oyster Hotel', add:'8558 Green Rd', price: '$640', url: pari3 },
    { id: 4, name: 'Candy Hotel', add:'8558 Green Rd', price: '$690', url: pari4 },
    { id: 5, name: 'Elysees Hotel', add:'8558 Green Rd', price: '$670', url: pari5 },
    { id: 6, name: 'Mr & Ms Hotel', add:'8558 Green Rd', price: '$880', url: pari6 },
    { id: 7, name: 'Paris Las Vegas', add:'8558 Green Rd', price: '$840', url: pari },
    { id: 8, name: 'Hotel & Casino', add:'8558 Green Rd', price: '$1000', url: pari2 },
    { id: 9, name: 'Oyster Hotel', add:'8558 Green Rd', price: '$640', url: pari3 },
  ];
  const Mumbaidata = [
    { id: 10, name: 'Martin Hotel', add:'4558 Green Rd', price: '$440', url: mumb },
    { id: 11, name: 'Taj Hotel', add:'6658 Green Rd', price: '$460', url: mum},
    { id: 12, name: 'Holiday Inn Mumbai', add:'4458 Green Rd', price: '$440', url: M3},
    { id: 13, name: 'Santorini Hotel', add:'5558 Green Rd', price: '$200', url: mum4 },
    { id: 14, name: 'Kayaka Hotel', add:'6658 Green Rd', price: '$330', url: M5 },
    { id: 15, name: 'ITC Maratha', add:'7758 Green Rd', price: '$450', url: M6 },
    { id: 16, name: 'chinuu', add:'6658 Green Rd', price: '$440', url: mumb },
    { id: 17, name: 'chinuu', add:'6658 Green Rd', price: '$440', rl: mumb },
    { id: 18, name: 'chinuu', add:'6658 Green Rd', price: '$440', url: mumb },
  ];
  const Newyorkdata= [
    { id: 19, name: 'Mint Hotel', add:'7758 Green Rd', price: '$550', url: new1 },
    { id: 20, name: 'Pod Times Square', add:'7758 Green Rd', price: '$600', url: new2 },
    { id: 21, name: 'Hayyat Palace ', add:'7758 Green Rd', price: '$640', url: new3 },
    { id: 22, name: 'Doubletree Hotel', add:'7758 Green Rd', price: '$690', url: new4 },
    { id: 23, name: 'Edisons Times', add:'7758 Green Rd', price: '$770', url: new5 },
    { id: 24, name: 'Wandhyam Hotel', add:'7733 Green Rd', price: '$580', url: new6 },
    { id: 25, name: 'Mint Hotel', add:'7758 Green Rd', price: '$550', url: new1 },
    { id: 26, name: 'Pod Times Square', add:'7758 Green Rd', price: '$600', url: new2 },
    { id: 27, name: 'Hayyat Palace ', add:'7758 Green Rd', price: '$640', url: new3 },
  ];
  const Londondata= [
    { id: 28, name: 'Park Plaza', add:'8559 Green Rd', price: '$840', url: lon1 },
    { id: 29, name: 'Hotel & Mall', add:'8556 Green Rd', price: '$500', url: lon2 },
    { id: 30, name: 'Secret Escape', add:'8565 Green Rd', price: '$740', url: lon3 },
    { id: 31, name: 'Cardic Hotel', add:'8555 Green Rd', price: '$690', url: lon4 },
    { id: 32, name: 'Elite Hotel', add:'8800 Green Rd', price: '$660', url: lon5 },
    { id: 33, name: 'Sunrise Hotel', add:'5562 Green Rd', price: '$880', url: lon6 },
    { id: 34, name: 'Park Plaza', add:'8559 Green Rd', price: '$840', url: lon1 },
    { id: 35, name: 'Hotel & Mall', add:'8556 Green Rd', price: '$500', url: lon2 },
    { id: 36, name: 'Secret Escape', add:'8565 Green Rd', price: '$740', url: lon3 },
  ];
  return (
    <div className="App">
      <Tabcontainer mumbaidata={Mumbaidata} parisdata={Parisdata} newyork={Newyorkdata} london={Londondata}/>
    </div>
  );
}

export default App;
