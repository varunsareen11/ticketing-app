import { useState } from "react";

const AddTicket = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    priority: "",
    desc: "",
  });

  const [error, setError] = useState({});

  const [message, setMessage] = useState("");

  // handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validation
  const validateForm = () => {
    const newError = {};
    if (!formValues.title.trim()) newError.title = "Title is required";
    if (!formValues.priority) newError.priority = "Priority is required";
    if (!formValues.desc.trim()) newError.desc = "Description is required";
    return newError;
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate on submit
    const validationErrors = validateForm();
    if (Object.values(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
    // get localStorageValue
    let data = [];
    let dataId = 1;
    const getTicketing = JSON.parse(localStorage.getItem("ticketingData"))

    if(getTicketing){
      data = getTicketing
      dataId = data[data.length - 1].id + 1
    }

    data.unshift({
      id: dataId,
      ...formValues
    })

    // set values to localStorage
    localStorage.setItem("ticketingData", JSON.stringify(data));
    // Reset form if needed
    setFormValues({ title: "", desc: "", priority: "" });

    setMessage("Form submit successfully");
    
    setTimeout(() => {
      setMessage("")
    }, 1000)
  };
  return (
    <div className="add_ticketing">
      <h1 className="heading">Add Ticket Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form_box">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Add title"
            onChange={handleChange}
            value={formValues.title}
          />
          {error.title && <span className="error">{error.title}</span>}
        </div>
        <div className="form_box">
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            id="priority"
            onChange={handleChange}
            value={formValues.priority}
          >
            <option value="">Add priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {error.priority && <span className="error">{error.priority}</span>}
        </div>
        <div className="form_box">
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            placeholder="Add description"
            onChange={handleChange}
            value={formValues.desc}
          ></textarea>
          {error.desc && <span className="error">{error.desc}</span>}
        </div>
              {message && <span className="success_message">{message}</span>}
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};

export default AddTicket;
