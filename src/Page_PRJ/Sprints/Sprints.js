import SprintContainer from "./Sprints_UI/SprintContainer";


function Sprints(props) {
    return (
      <>
        <div class = "sprints_main_header">
            <div class="sprints_main_title">Спринты</div>
            <div class="sprints_main_add_task">+ добавить новый спринт</div>
        </div>
        <SprintContainer sprintNum = {1}/>
        <SprintContainer sprintNum = {2}/>
        <SprintContainer sprintNum = {3}/>
      </>
    );
  };
  
  export default Sprints;