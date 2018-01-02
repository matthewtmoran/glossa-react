
const defaultState =[
    {
      id: '123',
      title: 'Title Text',
      desc: 'Description Text',
    }
];

const transcriptions = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TRANSCRIPTION': {
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          desc: action.desc
        }
      ]
    }
    case 'REMOVE_TRANSCRIPTION': {
      return []
    }
    default:
      return state;
  }
};

export default transcriptions;