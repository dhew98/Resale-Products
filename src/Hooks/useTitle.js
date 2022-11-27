import React, { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - GetALap`;
    }, [title])

};

export default useTitle;
