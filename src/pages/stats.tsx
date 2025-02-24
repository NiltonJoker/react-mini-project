import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { StatsView } from 'src/sections/stat/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Stats - ${CONFIG.appName}`}</title>
      </Helmet>

      <StatsView />
    </>
  );
}
