import React from "react";
import "./App.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function FAQ({ questions }) {
	// create state dynamically w.r.t questions length
	// fill(value, start, end);

	let booleanArr = new Array(questions.length - 1).fill(false);
	const [open, setOpen] = React.useState([true, ...booleanArr]);

	function changeOpenState(i) {
		setOpen((prevState) => {
			const newUpdatedOpen = [...prevState];
			newUpdatedOpen[i] = !prevState[i];
			console.log(newUpdatedOpen, "newUpdatedOpen");
			return newUpdatedOpen;
		});
	}

	return (
		<div>
			{questions.map((item, index) => {
				return (
					<div className="faq" key={index}>
						<div className="question">
							{open[index] ? (
								<ArrowDropDownIcon onClick={() => changeOpenState(index)} />
							) : (
								<ArrowRightIcon onClick={() => changeOpenState(index)} />
							)}
							<p>{item?.question}</p>
						</div>
						{open[index] && <p className="answer">{item?.answer}</p>}
					</div>
				);
			})}
		</div>
	);
}

export default FAQ;
