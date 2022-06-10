export default{
    SET_NEWS(state , news){
        state.news = news;        //2   news 는 response.data임 다른 이름으로 써도 된다.!
    },
    SET_JOBS(state, jobs){
        state.jobs = jobs;
    },
    SET_ASK(state, asks){
        state.asks = asks;
    }
}