import React, { useState, useEffect } from "react";
import axios from "axios";

const IpAddress = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [getInfo, setGetInfo] = useState([]);

  const getVisitorIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org/");
      const data = await response.text();
      setIpAddress(data);
    } catch (error) {
      console.error("Failed to fetch Ip", error);
    }
  };

  const handleInputChange = (e) => {
    setIpAddress(e.target.value);
  };

  const fetchIpInfo = async () => {
    try {
      const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
      const data = await response.json();
      setGetInfo([data]);
    } catch (error) {
      console.error("Failed to location infor:", error);
    }
  };

  useEffect(() => {
    getVisitorIp();
  }, []);
  return (
    <div>
      <h3>Ip to Location</h3>
      <div>
        <input type="text" value={ipAddress} onChange={handleInputChange} />
        <button onClick={fetchIpInfo}>Get Info</button>

        <div style={{ marginTop: "50px" }}>
          <table>
            <tr>
              <th>As</th>
              <th>City</th>
              <th>Country</th>
              <th>Country Code</th>
              <th>ISP</th>
              <th>Lat</th>
              <th>Lon</th>
              <th>Org</th>
              <th>Query</th>
              <th>Region</th>
              <th>Region Name</th>
              <th>Status</th>
              <th>Time Zone</th>
              <th>Zip</th>
            </tr>
            {getInfo.map((p) => {
              return (
                <>
                  <tr>
                    <td>{p?.as}</td>
                    <td>{p?.city}</td>
                    <td>{p?.country}</td>
                    <td>{p?.countryCode}</td>
                    <td>{p?.isp}</td>
                    <td>{p?.lat}</td>
                    <td>{p?.lon}</td>
                    <td>{p?.org}</td>
                    <td>{p?.query}</td>
                    <td>{p?.region}</td>
                    <td>{p?.regionName}</td>
                    <td>{p?.status}</td>
                    <td>{p?.timezone}</td>
                    <td>{p?.zip}</td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default IpAddress;
