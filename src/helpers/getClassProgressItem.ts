import { QuestionItemType } from "../types";

export function getClassProgressItem(questionItem: QuestionItemType, isCurrent:boolean):string{
	if(questionItem.isAnswered && !isCurrent){
		return 'bgcr'
	}
	else if(!questionItem.isAnswered && !isCurrent){
		return 'bgcgr'
	}
	return 'bgcb'
}