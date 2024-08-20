/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import axios from 'axios';  // Tambahkan import axios

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

// Ambil token dari localStorage
const token = localStorage.getItem('token');

// Jika token ada, tambahkan ke header `X-API-TOKEN`
if (token) {
  axios.defaults.headers.common['X-API-TOKEN'] = token;
}

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
