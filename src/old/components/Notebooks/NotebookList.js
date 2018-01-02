import React from 'react';

const NotebookList = ({notebooks, searchTerm}, ...props) => {
  const items = notebooks.filter((t) => searchTerm === '' || t.title.includes(searchTerm)).map((item, i) => (
    <div key={i} >
      {item.title}
    </div>
  ));

  return (
    <div>`
      <h4>Notebook List</h4>
      {items}
    </div>
  )
};

export default NotebookList;