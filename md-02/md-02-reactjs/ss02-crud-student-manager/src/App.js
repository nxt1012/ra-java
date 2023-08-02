import logo from "./logo.svg";
import "./App.css";
import CardHeader from "./components/CardHeader";
import Student from "./components/Student";

function App() {
  const students = [
    {
      id: 1,
      studentCode: "SV001",
      studentName: "Nguyễn Văn A",
      studentAge: 25,
      studentGender: "Male",
    },
    {
      id: 2,
      studentCode: "SV002",
      studentName: "Nguyễn Thị B",
      studentAge: 26,
      studentGender: "Female",
    },
    {
      id: 3,
      studentCode: "SV003",
      studentName: "Nguyễn Văn C",
      studentAge: 27,
      studentGender: "Male",
    },
    {
      id: 4,
      studentCode: "SV004",
      studentName: "Nguyễn Thị D",
      studentAge: 28,
      studentGender: "Female",
    },
  ];
  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          {/* START CONTROL */}
          <CardHeader />
          {/* END CONTROL */}
          {/* START LIST STUDENT */}
          <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <Student
                      key={index}
                      id={student.id}
                      studentCode={student.studentCode}
                      studentAge={student.studentAge}
                      studentName={student.studentName}
                      studentGender={student.studentGender}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* END LIST STUDENT */}
        </div>
      </div>
      {/* START FORM SINH VIEN */}

      {/* END FORM SINH VIÊN */}
    </div>
  );
}

export default App;
