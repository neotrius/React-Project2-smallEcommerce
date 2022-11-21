import {useEffect} from 'react'

function Alert(props) {
    const {name = '', closeAlert} = props

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3e3)
        return () => {
            clearTimeout(timerId)
        }
    }, [name])

    return <div id="toast-container">
        <div className="toast">{name} added</div>
    </div>
}

export default Alert
