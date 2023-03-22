import { useEffect, useState } from "react";
import { Task } from "./Task";

export const TaskList = (props) =>{
	const {list} = props;
	const [completed, setCompleted] = useState([]);

	const handleOnChange = (taskName) => {

		let newCompleted = [...completed];

        if(!completed.includes(taskName)){
			newCompleted = [...newCompleted, taskName];
		}else{
			newCompleted = newCompleted.filter((task) => taskName != task);
		}
		setCompleted(newCompleted);
		localStorage.setItem('completed', JSON.stringify(newCompleted));
    };

	useEffect(()=>{
		const localStorageData = localStorage.getItem('completed');
		const storedCompleted = JSON.parse(localStorageData);
		setCompleted(storedCompleted);
	}, [])

	return(
		<ul>
			{
				list.map((task) => (
					<Task key = {task.name} 
					name = {task.name}
					state = {task.state}
					onChange={handleOnChange}
					isCompleted={completed.includes(task.name)} />
				) )
			}
		</ul>
	);
}