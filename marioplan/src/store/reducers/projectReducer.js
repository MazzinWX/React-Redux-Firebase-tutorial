const initState = {
    projects: [
        { id: '1', title: 'Help me find Peach', content: 'blah blah blah' },
        { id: '2', title: 'Collect all the stars', content: 'blah blah blah' },
        { id: '3', title: 'Egg hunt with Yoshi', content: 'blah blah blah' }
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;