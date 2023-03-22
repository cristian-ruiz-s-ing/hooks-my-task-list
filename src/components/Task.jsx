import { useState } from "react";
import { myTaskList } from '../utils/tasks';

export const Task = (props) => {
	const { name, state, onChange, isCompleted } = props;
	const [isChecked, setIsChecked] = useState(
		new Array(myTaskList.length).fill(false)
	);

	const handleOnChange = () =>{
		onChange(name);
	}

    
	return(
		<div>
			{ isCompleted ? (<><input type="checkbox" onChange={handleOnChange} checked /><del>{name}</del></>) : (<><input type="checkbox" onChange={handleOnChange} />{name} </>)}
		</div>
			
	);
}