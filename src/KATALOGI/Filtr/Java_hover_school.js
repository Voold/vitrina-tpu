import './Filtr2.css'
export default function App(props) {
    const handleClick = event => {
      
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
      <button onClick={(event) => handleClick (event)} className='menu_item_name_inside'>ИШИТР</button>
      <button onClick={(event) => handleClick (event)} className='menu_item_name_inside'>ИШЭ</button>
      <button onClick={(event) => handleClick (event)} className='menu_item_name_inside'>ИШНКБ</button>
      <button onClick={(event) => handleClick (event)} className='menu_item_name_inside'>ИЯТШ</button>
      <button onClick={(event) => handleClick (event)} className='menu_item_name_inside'>ИШНПТ</button>
      <button onClick={(event) => handleClick (event)} className='menu_item_name_inside'>ИШПР</button>
      <button onClick={(event) => handleClick (event)} className='menu_item_name_inside'>БШ</button>
    </div>
    );
  }