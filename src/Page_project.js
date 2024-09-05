import Header from './UI/Header/Header.js'
import Main from './Page_PRJ/Main/Main.js'


function Page_Project(props) {

  const GoToBackPageSubHandler =(event) => {
    props.GoToBackPageMain();
  }

  return (
    <>
      {/* <Header autorz = {props.autorization.status} UID = {props.autorization.UID}  path = "/MyProfil"/> */}
      <Main data = {props.data}  GoToBackPageSub = {GoToBackPageSubHandler} />
    </>
  );
}

export default Page_Project;