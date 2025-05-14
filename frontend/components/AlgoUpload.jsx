import React, { useState } from 'react';
import axios from 'axios';

export default function AlgoUpload() {
  const [code, setCode] = useState("");

  const uploadAlgo = () => {
    axios.post("http://localhost:5000/api/algo-upload", {
      userId: "testUser",
      code
    }).then(res => {
      alert("Algorithm executed. See console for result.");
      console.log(res.data.result);
    });
  };

  return (
    <div>
      <h2>Upload Trading Algorithm</h2>
      <textarea
        className="w-full h-40"
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder="Enter your JS trading algorithm here"
      />
      <button onClick={uploadAlgo}>Upload</button>
    </div>
  );
}