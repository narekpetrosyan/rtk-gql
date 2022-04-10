import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { SingleItem } from './pages/SingleItem/SingleItem';

const App = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path=":charId" element={<SingleItem />} />
    </Routes>
  );
};

export default App;
