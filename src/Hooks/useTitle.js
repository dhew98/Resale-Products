import React, { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Jawad's Cuisine`;
    }, [title])

};

export default useTitle;
