


const Steps=(props)=>{
        const checked=false;
return <div className={props.class}>
        <input type='checkBox' className="inpbox" value={checked} disabled></input> <span className="stepsname">{props.namme}</span>
        <div style={{display:'flex',justifyContent:'end'}}><div className="completebtn2">Complete</div></div>
</div>
}
export default Steps;