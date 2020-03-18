

const initialState = {
    f_name: null,

    l_name: null,

    email: null,

    phone: null,


    cardState: 'QuizCard',

    count: 0,

    currentQuiz: null,

    statistics: null
};

export default (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }

}
