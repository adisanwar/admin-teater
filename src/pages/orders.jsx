import { Helmet } from 'react-helmet-async';

import { ProductsView } from 'src/sections/products/view';

// ----------------------------------------------------------------------

export default function Order() {
  return (
    <>
      <Helmet>
        <title> Order | Teater JKT48 </title>
      </Helmet>

      <ProductsView />
    </>
  );
}
