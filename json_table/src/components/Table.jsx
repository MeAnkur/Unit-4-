import { useEffect,useState } from "react";

export const Table = () => {
    const [Data, setData] = useState([]);

  useEffect(() => {

    const getData = async () =>{
      let res = await fetch(`http://localhost:3000/Products`);
      let data = await res.json();
      setData([...data]);
    }
    getData();
  },[])
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById">Sort by ID</button>
        <button className="sortByRentAsc">Rent Low to high</button>
        <button className="sortByRentDesc">Rent High to low</button>
        <button className="sortByAreaAsc">Area Low to high</button>
        <button className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>age</th>
            <th>Address</th>
            <th>salary</th>
            <th>MaritalStatus</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((Data, index) => {
            return (
              <tr key={Data.id} className="houseDetails">
                <td className="houseId">{Data.id}</td>
                <td className="houseName">{Data.username} </td>
                <td className="ownersName">{Data.age}</td>
                <td className="address">{Data.address}</td>
                <td className="areaCode">{Data.salary}</td>
                <td className="rent">{(Data.maritalstate) ?"married":"unmarried"}</td>
                <td className="rent">{Data.department}</td>

                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
