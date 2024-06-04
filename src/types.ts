export type QuestionsType = Array<QuestionItemType>;
export type  QuestionItemType = {
	id:number,
	type:QuestionType,
	questionTitle:string,
	time?:number,
	variants?:QuestionVariants
	isAnswered:boolean,
	isCorrectAnswered?:boolean
	answers?:AnswerType
}
export type QuestionType="single"|"multiple"| "detailed" | "simple" | "expanded"
export type QuestionVariants = Array<{variantID:number,correct:boolean, variant:string}>
export type AnswerType = {
	id:number,
	type:"single"|"multiple"| "detailed" | "simple",
	answer?:Array<string | number>
	choosedVariants?:Array<VariantIdType>
}
export type VariantIdType = {variantID:(number | string)}