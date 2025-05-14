// frontend/src/components/AlgoUpload.jsx

import React, { useState } from 'react';
import axios from 'axios';

export default function AlgoUpload() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const uploadAlgo = async () => {
    if (!code.trim()) {
      setError('Please enter your algorithm code before uploading.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:5000/api/algo-upload',
        { userId: 'testUser', code }
      );
      setResult(response.data.result);
    } catch (err) {
      console.error(err);
      setError('Failed to run algorithm. Please check your backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-2">Upload Trading Algorithm</h2>
      <textarea
        className="w-full h-40 p-2 border rounded"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="// Write your JS trading algorithm here"
      />
      {error && <p className="text-red-500 mt-1">{error}</p>}
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        onClick={uploadAlgo}
        disabled={loading}
      >
        {loading ? 'Running...' : 'Upload & Run'}
      </button>

      {result && (
        <div className="mt-4 p-3 bg-gray-50 border rounded">
          <h3 className="font-medium">Algorithm Result:</h3>
          {result.error ? (
            <pre className="text-red-600">{result.error}</pre>
          ) : (
            <pre>{JSON.stringify(result.updatedPortfolio, null, 2)}</pre>
          )}
        </div>
      )}
    </div>
  );
}
