const initialState = {
    counters: [{
        key: 1,
        name: 'Counter1',
        value: 3
    },
    {
        key: 2,
        name: 'Counter2',
        value: 3
    }],

    isOpenModal: false,
    counterForDelete: {},

    headerItems: [{
        text: "Home",
        link: "home-page"
    },
    {
        text: "Products",
        link: "goods",
    },
    {
        text: "Service",
        link: "serv",
    },
    {
        text: "Contact",
        link: "contact",
    }],

    footersItems: [{
        text: "bla1",
        link: "bla1"
    },
    {
        text: "bla2",
        link: "bla2",
    },
    {
        text: "bla3",
        link: "bla3",
    },
    {
        text: "bla4",
        link: "bla4",
    }],

    footerText: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",

}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case 'MODALCLOSE':
            return {
                ...state,
                isOpenModal: false,
                counterForDelete: {}
            }
        case 'MODALOPEN':
            return {
                ...state,
                isOpenModal: true,
                counterForDelete: action.payload
            }
        case 'COUNTERS':
            return {
                ...state,
                counters: action.payload
            }
        default:
            return state
    }
}