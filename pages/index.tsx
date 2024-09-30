// pages/index.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomeRedirect = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to /home when the component mounts
        router.push('/home');
    }, [router]);

    return null; // Optionally return a loading message or spinner
};

export default HomeRedirect;