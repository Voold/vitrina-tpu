import "./User_card.css"

export default function User_card(props) {

    const func1 = (event) => {
      props.GoToProject(props);};
  
    const dateToDate = (date) => {
      return date.split("-").reverse().join(".");
    }
  
    return (
        <div class = "user_card_main">
            <div class='User_icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
                    <rect width="66" height="66" rx="33" fill="black" fill-opacity="0.12"/>
                    <path d="M41.0091 52H23.9909C22.1372 51.932 20.4104 51.0325 19.2822 49.5472C18.154 48.0618 17.7422 46.1459 18.1592 44.3225L18.5994 42.2135C19.1056 39.3585 21.5383 37.2605 24.4127 37.2H40.5873C43.4617 37.2605 45.8944 39.3585 46.4006 42.2135L46.8408 44.3225C47.2578 46.1459 46.846 48.0618 45.7178 49.5472C44.5896 51.0325 42.8628 51.932 41.0091 52Z" fill="black" fill-opacity="0.56"/>
                    <path d="M33.4169 33.5H31.5831C27.5318 33.5 24.2476 30.1869 24.2476 26.1V21.216C24.2428 19.5659 24.8904 17.982 26.047 16.8152C27.2036 15.6484 28.7737 14.9951 30.4094 15H34.5906C36.2263 14.9951 37.7964 15.6484 38.953 16.8152C40.1096 17.982 40.7572 19.5659 40.7524 21.216V26.1C40.7524 28.0626 39.9795 29.9448 38.6039 31.3326C37.2282 32.7204 35.3624 33.5 33.4169 33.5Z" fill="black" fill-opacity="0.56"/>
                </svg>
            </div>
            <div class = "UserCard_name">
                Шахзод Фахриддинович
            </div>
            <div class = "User_last_online">
                21.02.2012
            </div>

        </div>
    
      )
  }