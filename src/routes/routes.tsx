import { Routes, Route } from 'react-router-dom';
import Calculator from '../pages/calculator';
import ResultsTable from '../pages/resultsTable';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Calculator />} />
      <Route path='/history' element={<ResultsTable />} />
    </Routes>
  );
};