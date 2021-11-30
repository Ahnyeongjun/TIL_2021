import React from 'react';
import Responsive from '../components/common/Responsive';
import Editer from '../components/write/Editor';
import TagBox from '../components/write/TagBox';
const WritePage = () => {
    return (
        <Responsive>
            <Editer />
            <TagBox />
        </Responsive>
    )
}
export default WritePage;
