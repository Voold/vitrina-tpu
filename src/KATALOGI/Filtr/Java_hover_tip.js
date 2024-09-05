import './Filtr2.css'
export default function App(props) {
    const handleClick = event => {
      // 👇️ toggle styles on click
      if (event.currentTarget.style.backgroundColor) {
        event.currentTarget.style.backgroundColor = null;
        event.currentTarget.style.color = null;
        props.onChange({val : event.currentTarget.innerHTML, ch : "rem",});
      } else {
        event.currentTarget.style.backgroundColor = 'rgba(34, 159, 59, 0.3)';
        event.currentTarget.style.color = 'rgba(0, 0, 0, 0.80)';
        props.onChange({val : event.currentTarget.innerHTML, ch : "add",});
      }
    };
  
    return (
    <div>
      <button onClick={(event) => handleClick (event)} className='menu_item_name_inside'>ВКР</button>
      <button onClick={(event) => handleClick (event)} className='menu_item_name_inside'>УИРС</button>
      <button onClick={(event) => handleClick (event)} className='menu_item_name_inside'>НИРС</button>
      <button onClick={(event) => handleClick (event)} className='menu_item_name_inside'>Творческий проект</button>
    </div>
    );
  }