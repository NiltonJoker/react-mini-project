import { useEffect } from 'react';
import { useAuth } from '@workos-inc/authkit-react';

import RedirectLoading from 'src/components/redirect/redirect-loading';

export function SignInView() {
  const { signIn } = useAuth();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const context = searchParams.get('context') ?? undefined;

    signIn({ context });
  }, [signIn]);

  return <RedirectLoading />;
}
