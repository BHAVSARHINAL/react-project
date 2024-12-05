import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  // const { id } = useParams();
  let token = localStorage.getItem("authToken");
  function getData() {
    if (token) {
      axios
        .get("http://localhost:8080/auth/getalluser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setData(res.data);
          setData(res.data);
        });
    }
  }
  useEffect(() => {
    getData();
  }, []);
  // Render the table with the fetched data
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData, index) => (
            <tr key={index}>
              <td>{eachData.id}</td>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>{eachData.username}</td>
              <td>{eachData.password}</td>
              <td>{eachData.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
