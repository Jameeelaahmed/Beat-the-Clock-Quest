import './ResultModal.css'
import { forwardRef , useImperativeHandle, useRef} from 'react'
import { createPortal } from 'react-dom'

const ResultModal = forwardRef(function ResultModal({remainingTime,targetTime,onReset},ref){
    const dialog=useRef()

    useImperativeHandle(ref,() => ({
        open: () => {
            dialog.current.showModal()
        }
    }))

    const time=(remainingTime/1000).toFixed(2);
    const youLost=remainingTime<=0;
    const score =Math.round( (1- remainingTime/(targetTime*1000))*100);
    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {youLost && <h2>You Lost</h2>}
            {!youLost && <h2>Your Score : {score}</h2>}
            <p>
                The target time was <strong>{targetTime}</strong>
            </p> 
            <p>
                You stopped the timer with <strong>{time} seconds left</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
})

export default ResultModal;
