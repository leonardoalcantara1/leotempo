import React, { useEffect } from 'react';

// CSS
import { ThemeProvider } from 'styled-components'
import style from './style.json'
import GlobalStyle from './globalStyle';
import './reset.css'

// Components
import { Header } from './compositions/Header';
import { Content } from './components/Content';

// Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Forecasts } from './routes/forecasts';
import { AddForecasts } from './routes/add-forecasts';

// Store
import { forecastsStore } from './store';

const App: React.FC = () => {
  useEffect(() => {
    forecastsStore.recoverForecasts()
  }, [])
  return (
    <ThemeProvider theme={style}>
      <GlobalStyle />
      <Header />
      <Content>
        <BrowserRouter>
          <Routes>
            <Route path="/forecasts" element={<Forecasts />} />
            <Route path="/add-forecasts" element={<AddForecasts />} />
            <Route path="*" element={<Forecasts />} />
          </Routes>
        </BrowserRouter>
      </Content>
    </ThemeProvider>
  )
}

export default App;