import logoImg from '../img/Logo.png'
import Smallbox from './Smallbox';




const Leftdiv =()=>{
return <div className='leftdiv'>
<div className='imgbox'><img className='img1' src={logoImg} alt=':('></img></div>
<Smallbox text={"Cart"} >lftsml</Smallbox>
<Smallbox text={"Market"}>lftsmlx</Smallbox>
<Smallbox text={"Settings"}>lftsml</Smallbox>
<Smallbox text={"logout"}>lftsml</Smallbox>
<div className='lastleftdiv'></div>

</div>
} 

export default Leftdiv;