import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register, Error } from './pages';
import {
  Addcar,
  DeleteCar,
  Models,
  MyReservations,
  Reserve,
  SharedLayout,
} from './pages/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Models />} />
          <Route path="add-car" element={<Addcar />} />
          <Route path="delete-car" element={<DeleteCar />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="my-reservations" element={<MyReservations />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
