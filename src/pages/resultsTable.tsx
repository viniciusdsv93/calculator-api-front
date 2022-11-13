import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type ResultType = {
  id: string;
  mathExpression: string;
  result: string;
  date: string;
};

const ResultsTable = () => {

  const [resultsList, setResultsList] = useState<ResultType[]>([]);
  const navigate = useNavigate();

  const getData = async () => {
    const list = await axios.get('http://localhost:3334/results');
    setResultsList(list.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="resultsListGrid">
      <button className="linkButton" onClick={() => navigate('/')}>Calculator</button>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Math Expression</th>
              <th>Result</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {resultsList.map((result) => {
              return (
                <tr key={result.id}>
                  <td>{result.id.substring(0, 8) + "..."}</td>
                  <td>{result.mathExpression}</td>
                  <td>{result.result}</td>
                  <td>{result.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsTable;