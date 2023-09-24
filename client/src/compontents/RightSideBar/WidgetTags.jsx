import React from 'react';

const WidgetTags = () => {
    const tags=['css',"js",'python','react.js','express','sql','node.js','javascript','html',"java","mangodb"]
  return (
    <div className='widget-tags'>
      <h3>Watched Tags</h3>
      <div className='widget-tags-div'>
        {
            tags.map((each)=>(
                <p key={each}>{each}</p>
            ))
        }
      </div>
    </div>
  );
}

export default WidgetTags;
