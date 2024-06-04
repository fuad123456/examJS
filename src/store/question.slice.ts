import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionItemType, QuestionType, QuestionsType, VariantIdType } from "../types";
import { questionsData } from "../data";

type AnswerQuestionType = { questionId: number, type:QuestionType, isAnswered: boolean, answers: Array<VariantIdType> }
type UserType = {
	firstName:string
	lastName:string
	workedTech:Array<string>
}
type inititalStateType = {
	questions: QuestionsType
	user:UserType
}

const initialState: inititalStateType = {
	questions: (JSON.parse(localStorage.getItem("questions") as string )as QuestionsType ) || questionsData,
	user: (JSON.parse(localStorage.getItem("questions") as string )as UserType ) || {} as UserType
};



export const questionSlice = createSlice({
	name: 'qeustions',
	initialState,
	reducers: {
		setAnswerQuestion: (state, action: PayloadAction<AnswerQuestionType>) => {
			const currentQuestion = state.questions.find(q => q.id === action.payload.questionId) as QuestionItemType
			currentQuestion.isAnswered = action.payload.isAnswered;
			currentQuestion.answers={
				id:action.payload.questionId,
				type:"multiple",
				choosedVariants:action.payload.answers
			}
			// if diffrent length
			const correctVariantsArr = currentQuestion.variants?.filter(v=>v.correct).map(v=>v.variantID)
			if(action.payload.answers.length!==correctVariantsArr?.length){
				currentQuestion.isCorrectAnswered = false
			}
			// if every correct
			const isEveryCorrect = correctVariantsArr?.every(correctVariant=>action.payload.answers.map(answer=>answer.variantID).includes(correctVariant))
			if(isEveryCorrect){
				currentQuestion.isCorrectAnswered = true;
			}
			else{
				currentQuestion.isCorrectAnswered=false
			}
		localStorage.setItem("questions", JSON.stringify(state.questions))
		},
		setUserFullName: (state, action:PayloadAction<{ id:number, firstName:string, lastName:string }>)=> {
			const {firstName,lastName, id} = action.payload;
			const question = state.questions.find(q=>q.id === id) as QuestionItemType

			state.user.firstName = firstName;
			state.user.lastName = lastName
			question.isAnswered=true
			localStorage.setItem("user", JSON.stringify(state.user))
		},
		setUserTech:(state, action:PayloadAction<{id:number, tech:Array<string>}>)=>{
			const {id, tech} = action.payload
			const question = state.questions.find(q=>q.id === id) as QuestionItemType
			question.isAnswered=true
			state.user.workedTech = tech
			localStorage.setItem("user", JSON.stringify(state.user))
		}
	},

});
export const { setAnswerQuestion, setUserFullName, setUserTech } = questionSlice.actions
export default questionSlice;
