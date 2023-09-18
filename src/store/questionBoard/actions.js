import {
    MANAGEMENT_QUESTION_BOARD_LIST,
    MANAGEMENT_QUESTION_BOARD
} from './mutation-types'
import axiosInst from '@/utility/axiosInst'

export default {
    // 관리자 - 1:1 게시판 리스트 불러오기
    requestManagementQuestionBoardToSpring({ commit }) {
        return axiosInst.get("/question/list")
        .then((res) => {
            commit(MANAGEMENT_QUESTION_BOARD_LIST, res.data);
            return res.data;
        })
    },
    // 관리자 - 1:1 게시판 해당 게시물 받아오기
    requestManagementQuestionBoardReadToSpring({ commit }, questionId) {
        return axiosInst.get(`/question/${questionId}`)
        .then((res) => {
            commit(MANAGEMENT_QUESTION_BOARD, res.data.questBoard);
            return res.data.questBoard;
        })
    },
    // 관리자 - 1:1 게시판 해당 게시물에 댓글 달기
    responseManagementQuestionAnswerSaveToSping(context, payload) {
        const { answer, questionId, userId } = payload
        console.log("전달받은 데이터: "+ answer, questionId, userId);

        return axiosInst.post("/question/managerAnswer", {
            answer,
            questionId,
            userId
        }) .then((res) => {
            return res.data;
        })
    }
}