import "./App.css";
import User from "./components/User";
function App() {
  const users = [
    { id: 1, name: "Daniel Kristeen", dateOfBirth: "15 Mar 1988" },
    { id: 2, name: "Emma Smith", dateOfBirth: "15 Mar 1855" },
    { id: 3, name: "Olivia Johnson", dateOfBirth: "17 Mar 1988" },
    { id: 4, name: "Isabella Williams", dateOfBirth: "26 Mar 1999" },
    { id: 5, name: "Sophia Jones", dateOfBirth: "16 Aug 2001" },
    { id: 6, name: "Charlotte Brown", dateOfBirth: "15 Mar 1988" },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-uppercase mb-0">MANAGER USER</h5>
            </div>
            <div className="table-responsive">
              <table className="table no-wrap user-table mb-0">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium pl-4"
                    />
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                    >
                      Dateofbirth
                    </th>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                    >
                      Manage
                    </th>
                    <th
                      scope="col"
                      className="border-0 text-uppercase font-medium"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <User
                      key={index}
                      name={user.name}
                      dateOfBirth={user.dateOfBirth}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
