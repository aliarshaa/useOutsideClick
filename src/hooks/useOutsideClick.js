import { useEffect } from "react"


export default function useOutsideClick(ref, exceptionID ,callback) {
  useEffect(()=>{
    const handleOutSideClick = (event)=> {
      if(ref.current && !ref.current.contains(event.target) && event.target.id !== exceptionID)
      callback()
    }

    document.addEventListener('mousedown', handleOutSideClick)
    return ()=>{document.removeEventListener('mousedown', handleOutSideClick)}
  }, [ref, exceptionID, callback])

}

