import './App.scss';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Example from './components/Example/Example';
import { useState } from 'react';
import { HomeContainer } from './components/Home/HomeContainer';
import { OfficialContainer } from './components/Official/OfficialContainer';
import { RecoilRoot } from 'recoil';
import { StandingsContainer } from './components/Standings/StandingsContainer';
import { GameCalendarContainer } from './components/GameCalendar/GameCalendarContainer';
import { FindOfficialsContainer } from './components/FindOfficials/FindOfficialsContainer';
import { InfoContainer } from './components/Info/InfoContainer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const router = createBrowserRouter([
    {
      element: <div>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/> 
        <Outlet />
        </div>,
      children: [
        {
          path: "/",
          element: <HomeContainer darkMode={darkMode}></HomeContainer>,
        },
        {
          path: '/official/:officialId',
          element: <OfficialContainer darkMode={darkMode}></OfficialContainer>,
        },
        {
          path: '/referees',
          element: <FindOfficialsContainer darkMode={darkMode}></FindOfficialsContainer>,
        },
        {
          path: '/standings',
          element: <StandingsContainer darkMode={darkMode}></StandingsContainer>,
        },
        {
          path: '/previous-games',
          element: <GameCalendarContainer></GameCalendarContainer>,
        },
        {
          path: '/info',
          element: <InfoContainer></InfoContainer>,
        }
      ],
    },
  ]);

  return (
    <RecoilRoot>
    <div className={darkMode ? 'dark' : 'light'}>
      <RouterProvider router={router} />
    </div>
    </RecoilRoot>
  );
}

export default App;
