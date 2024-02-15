import land from '../img/land.png';
import '../Styles/main.css';
import arrow from '../img/arrow.png';
import address from '../img/address.png';
import small1 from '../img/small1.png';
import small2 from '../img/small2.png';
import small3 from '../img/small3.png';
import small4 from '../img/small4.png';
import north_east from '../img/north_east.png';
import Frame69 from '../img/Frame 69.png';
import sitearrow from '../img/sitearrow.png';
import StatusBar from '../img/StatusBar.png';
import Rightmain from './Rightmain';

import Overviews from './Overviews';

const Maindiv=()=>{

    return <div className='mainbox'>
        {/* <img className='' src={filter} alt=':('></img>  */}
        <div className="filterdiv"> 
        <div className="filters">jMarket<img className='' src={arrow} alt=':('></img></div>
        <div className="filters">Category 1<img className='' src={arrow} alt=':('></img></div>
        <div className="filters">Theme park site <img className='' src={arrow} alt=':('></img></div>
        </div>
        <img className='' src={land} alt=':(' style={{marginTop:'10px', width: "1110px"}}></img>
        <div className="contentdiv">
            <div className="headingdiv">
                <div className="lefthead">
                    <t id="heading">Theme Park Site</t>
                    <div className="addressdiv">
                        <div style={{display:'flex',alignItems:'center'}}>
                        <img className='locimg' src={address} alt=':(' style={{}}></img><t className='addrtxt'>Address of the site</t>

                        </div>
                    </div>
                    <div className="address2div">
                    <div className='smallicons'><img className='icons' src={small1} alt=':('></img><span className='icontxt'>Adult rides</span></div>
                    <div className='smallicons'><img className='icons' src={small2} alt=':('></img><span className='icontxt'>Family rides </span></div>
                    <div className='smallicons'><img className='icons' src={small3} alt=':('></img><span className='icontxt'>Restaurants</span></div>
                    <div className='smallicons'><img className='icons' src={small4} alt=':('></img><span className='icontxt'>Premum</span></div>

                    </div>
                    <div className='linkdiv'>
                        <span className='linkbox'>
                        <img className='' src={north_east} alt=':('></img> View opprtunity on polygon
                        </span>
                    </div>
                    <div>
                    <img className='' src={Frame69} alt=':('></img>
                    </div>

                </div>
                <div className="righthead">
                    <div className="completebtn ">
                        Complete
                    </div>
                    <div  style={{display:"flex",justifyContent:'end',marginTop:'5px'}}>
                           <div className="sitevisitbtn"> Site visit <span className="sitearrow"><img className='siteimg' src={sitearrow} alt=':(' style={{marginLeft:'10px'}}></img></span></div>
                    </div>
                    <img className='' src={StatusBar} alt=':('></img>
                    
                </div>
                
            </div>

            <div style={{display:'flex'}}>
            <div className="leftbox"><div className="leftoverviewmain">
                    <Overviews></Overviews>
            </div></div>
            <div className="rightmain">
            <Rightmain></Rightmain>

            </div>
            </div>
            
        </div>
    </div>
}

export default Maindiv;