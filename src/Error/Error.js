import { useLocation } from 'react-router-dom'


export default function Error(props) {

    const location = useLocation()
    const { from } = location.state

    return(
    <div>

        <h1>Error {props.error}</h1>

    </div>
    )

};