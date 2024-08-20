import axios from 'axios';
import { faker } from '@faker-js/faker';

import urls from 'src/routes/hooks/urls';

// ----------------------------------------------------------------------

export const mockShows = [...Array(10)].map((_, index) => ({
  id: faker.string.uuid(),
  title: faker.lorem.words(3),
  photo: `/assets/images/movies/movie_${index + 1}.jpg`,
  description: faker.lorem.sentences(2),
  duration: `${faker.number.int({ min: 60, max: 180 })} minutes`,
  rating: `${faker.number.float({ min: 1, max: 5 }).toFixed(1)}`,
  price: faker.number.int({ min: 100000, max: 500000 }),
  theaterId: faker.string.uuid(),
  showtimeId: faker.string.uuid(),
}));

// ----------------------------------------------------------------------

export async function getShows() {
  try {
    // Melakukan request ke API
    const response = await axios.get(urls.getShow(), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    // Mengambil data yang dibutuhkan dari response
    const shows = response.data.data.map((show) => ({
      id: show.id,
      title: show.title,
      photo: show.photo || '/assets/images/movies/default.jpg', // Default photo jika null
      description: show.description,
      duration: show.duration,
      rating: show.rating,
      price: show.price,
      theaterName: show.theater.name, // Mengambil name dari theater
      showDate: show.showtime.showDate, // Mengambil showDate dari showtime
    }));

    return shows;
  } catch (error) {
    console.error('Failed to fetch shows:', error);
    return []; // Return empty array on failure
  }
}
