import locimg from '../img/Iconinteractions.png';
import Maindiv from './Maindiv';
import mainimg from '../img/main.png';
import arrow from '../img/Arrow 7.svg';
import num2 from '../img/num2.png';
import num3 from '../img/num3.png';

const Rightdiv=()=>{
    return <div className='rightdiv'>
        <div className="topdiv1">
            <div className='topbtn'>Complete Profile</div>
             <img className='img2' src={locimg} alt=':('></img>

        </div>

        <div className="topdiv2">
            <div>Choose your new site</div> 
            <div className="topdiv2rightdiv"> 
                    <img className='' src={mainimg} alt=':('></img>
                    <img className='' src={arrow} alt=':('></img>
                    <img className='' src={num2} alt=':('></img>
                    <img className='' src={arrow} alt=':('></img>
                    <img className='' src={num3} alt=':('></img>
                </div>
            </div>
        <Maindiv></Maindiv>
  </div>
}

export default Rightdiv;