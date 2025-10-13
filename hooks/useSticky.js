import { useEffect, useState } from "react";

const useSticky = () => {
    const [headerSticky, setHeaderSticky] = useState(false);

    useEffect(() => {
        let mounted = true;
        function stickyHeader() {
            if (!mounted) return;
            if (window.scrollY > 120) {
                setHeaderSticky(true);
            } else {
                setHeaderSticky(false);
            }
        }
        window.addEventListener("scroll", stickyHeader);
        return () => {
            mounted = false;
            window.removeEventListener("scroll", stickyHeader);
        };
    }, []);

    return {
        headerSticky,
    };
};

export default useSticky;