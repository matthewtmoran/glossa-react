let nextId = 0;
let nextNotebookId = 0;
export function addTranscription(title, desc) {
  return {
    type: 'ADD_TRANSCRIPTION',
    id: nextId++,
    title,
    desc
  }
}

export function selectTranscription(transcription) {
  return {
    type: 'SELECT_TRANSCRIPTION',
    transcription
  }
}

export function addNotebook(title) {
  console.log('addNotebook Title', title);
  return {
    type: 'ADD_NOTEBOOK',
    id: nextNotebookId++,
    title
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setFilter = text => {
  return {
    type: 'SET_FILTER',
    text
  }
};

export const showNotebooks = (notebooksVisible) => {
  return {
    type: 'TOGGLE_NOTEBOOKS',
    notebooksVisible
  }
};
export const toggleDrawer = (drawerOpen) => {
  console.log('toggle Drawer action', drawerOpen)
  return {
    type: 'TOGGLE_DRAWER',
    drawerOpen
  }
};