import React from "react";
import { useRouter } from "next/router";

const Andre = () => {
    const router = useRouter();
    const { id = [] } = router.query;

    console.log(id);
    console.log(id.length);

    if (id.length === 4) {
        return <h1>this last</h1>;
    } else if (id.length === 3) {
        return <h1>this 3 page</h1>;
    } else if (id.length === 2) {
        return <h1>this 2 page</h1>;
    } else if (id.length === 1) {
        return <h1>this 1 page</h1>;
    } else {
        return <h1>Anjing</h1>;
    }

    return (
        <div>
            <h1>Andre Page</h1>
        </div>
    );
};

export default Andre;
