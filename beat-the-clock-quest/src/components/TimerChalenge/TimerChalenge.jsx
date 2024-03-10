import './TimerChalenge.css'
import { useState ,useRef} from 'react'
import ResultModal from '../ResultModal/ResultModal'


export default function TimerChalenge({title,targetTime}){

    const timer=useRef()  
    const dialoge=useRef();

    const[timeRemaining,setTimeRemaining]=useState(targetTime*1000);

    const timerisActive=timeRemaining > 0 && timeRemaining< targetTime*1000;

    if(timeRemaining<=0){
        clearInterval(timer.current)
        dialoge.current.open()
    }

    function handleReset(){
        setTimeRemaining(targetTime*1000);
    }

    function handleStart(){
        timer.current=setInterval(()=>{
            setTimeRemaining((time)=>time - 10)
        },10)
    }

    function handleStop(){
        clearInterval(timer.current)
        dialoge.current.open()
    }

    return(
        <>
        <ResultModal ref={dialoge} remainingTime={timeRemaining} targetTime={targetTime} onReset={handleReset}/>
        <section className='challenge'>
            <h2>{title}</h2>
            <div className='challenge-time'>
                {targetTime} second{targetTime > 1 ?'s':''}
            </div>
            <div>
                <button onClick={timerisActive?handleStop:handleStart}>
                    {timerisActive? "Stop" : "Start"} Challenge
                </button>
            </div>
            <p className={timerisActive? 'active':""}>
                {timerisActive? "Time is running...":"Timer inactive"}
            </p>            
        </section>
        </>
    )
}