import { useState } from "react";
import { myTaskList } from '../utils/tasks';

export const Task = (props) => {
	const { name, state, onChange, isCompleted } = props;

	const handleOnChange = () =>{
		onChange(name);
	}

    
	return(
		<div>
			{ isCompleted ? (<><input type="checkbox" onChange={handleOnChange} checked /><del>{name}</del></>) : (<><input type="checkbox" onChange={handleOnChange} />{name} </>)}
		</div>
			
	);
}