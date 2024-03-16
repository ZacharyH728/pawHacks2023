
import { useState, useEffect } from "react";


export function Form() {
    const [name, setName] = useState('');

    const [submission, setSubmit] = useState('');

    const handleInputChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmit(name)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Please enter the required infomation
                </label>
                <input type="text" value={name} onChange={handleInputChange} ></input>
            </form>
            <div>
                {submission ? <h1>{submission}</h1> : ""}
            </div>
        </div>
    );
}

export function DropdownForm({ label, label2 }) {

    const majors = ["Computer Science", "Computer Engineering", "Business"]

    const [majorList, setMajorList] = useState(majors)

    useEffect(() => {
        //TODO add api
        fetch('')
            .then(response => {
                if (!response.ok) { throw Error(response.statusText); }
                return response.json();
            })
            .then(jsonData => {
                setMajorList(jsonData)
            })
            .catch(error => {
                ;
            })
    }, []);

    const [currentMajor, setCurrentMajor] = useState('');
    const [desiredtMajor, setDesiredMajor] = useState('');
    const [submission, setSubmit] = useState([]);
    const [inputs, setInputs] = useState(['']);

    const handleCurrentMajorChange = (event) => {
        setCurrentMajor(event.target.value);
    };

    const handleDesiredMajorChange = (event) => {
        setDesiredMajor(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmit(new Array(currentMajor, desiredtMajor, ...inputs))
    }

    const handleAddInput = () => {
        setInputs([...inputs, '']);
    };

    const handleRemoveInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

    const handleInputChange = (index, event) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        setInputs(newInputs);
    };


    console.log(submission)

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="courseInput">
                    <label>{label}:</label>
                    <select value={currentMajor} onChange={handleCurrentMajorChange}>
                        <option value="">Select...</option>
                        {majorList.map(major => {
                            return <option key={major} value={major}>{major}</option>
                        })}
                    </select>
                </div>
                <div className="courseInput">
                    <label>{label2}:</label>
                    <select value={desiredtMajor} onChange={handleDesiredMajorChange}>
                        <option value="">Select...</option>
                        {majorList.map(major => {
                            return <option key={major} value={major}>{major}</option>
                        })}
                    </select>
                </div>
                <div className="courses">
                    <label>Please enter your course(s) id:</label>
                    {inputs.map((input, index) => (
                        <div className="courseInput" key={index}>
                            <input
                                type="text"
                                value={input}
                                onChange={event => handleInputChange(index, event)}
                            />
                            <button type="button" onClick={() => handleRemoveInput(index)}>Remove</button>
                        </div>
                    ))}
                </div>
                <div className="formButtons">
                    <input type="submit" value={"Submit"} />
                    <button type="button" onClick={handleAddInput}>Add input</button>
                </div>
            </form>
            <div className="response">
                {submission.map((sub) => {
                    return <h1>{sub}</h1>
                })}
            </div>
        </div >
    );
}