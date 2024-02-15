import Steps from "./Steps";



const Rightmain=()=>{
    const nat=false;
    let count=4;
    return <div className="rightmainslide">
    <Steps namme={nat ? "kowo":"kedar"} class={count>=1 ? "steps":"stepsblur"}/>
    <Steps namme={"kowo"} class={count>=2 ? "steps":"stepsblur"}/>
    <Steps namme={"kowo"} class={count>=3 ? "steps":"stepsblur"}/>
    <Steps namme={"kowo"} class={count>=4 ? "steps":"stepsblur"}/>
    <Steps namme={"kowo"} class={count>=5 ? "steps":"stepsblur"}/>
    <Steps namme={"kowo"} class={count>=6 ? "steps":"stepsblur"}/>
    <Steps namme={"kowo"} class={count>=7 ? "steps":"stepsblur"}/>

    
    </div>
}

export default Rightmain;