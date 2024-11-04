import { useLocation } from 'react-router-dom'


export default function Error(props) {

    const location = useLocation()
    const { from, error } = location.state

    return(
    <div>

        <h1>Что-то пошло не так.... {error}</h1>
        <h1>Something went wrong... {props.location.state.error}</h1>
        {console.log(from)}
        {console.log(props.location.state.error)}

    </div>
    )

};