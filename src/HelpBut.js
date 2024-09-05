
const HelpBut = (props) => {

    const HelpButHandler = () => {
        console.log(props.info)
      }

    return (
        <div id = "help_but_for_dev" onClick={HelpButHandler}>PUSH</div>
    )
}

export default HelpBut;
