import { Helmet } from 'react-helmet-async';

import { ShowView } from 'src/sections/show/view';

// ----------------------------------------------------------------------

export default function ShowPage() {
  return (
    <>
      <Helmet>
        <title> Show | Teater JKT48 </title>
      </Helmet>

      <ShowView />
    </>
  );
}
