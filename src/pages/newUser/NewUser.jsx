import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Data</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Question</label>
          <input type="text" placeholder="Hello World!" />
        </div>
        <div className="newUserItem">
          <label>Answer</label>
          <input type="text" placeholder="Answer Here" />
        </div>
        <div className="newUserItem">
          <label>Support Email</label>
          <input type="email" placeholder="sagi5@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+91 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
