import { ReactElement, useEffect, useState } from 'react'
import { QuestionVariants } from "../types"
import { Checkbox, Form, GetProp } from 'antd'
import { useAppDispatch } from '../store/hooks'
import { setAnswerQuestion } from '../store/question.slice'
import AnswerButton from './Button'
type propsType = {
	questionId: number
	variants: QuestionVariants
	time: number
}
export default function MultipleQuestion({ variants, questionId, time }: propsType): ReactElement {
	const [values, setValues] = useState<Array<number>>([])
	const dispatch = useAppDispatch()
	const [timer, setTimer] = useState(time)
	const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
		setValues(checkedValues as Array<number>)
	};
	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(prev => prev - 1)
		}, 1000)
		if (timer < 0) {
			dispatch(setAnswerQuestion(
				{
					isAnswered: true,
					questionId,
					type:"multiple",
					answers: [...values.map(v => ({ variantID: v }))]
				}
			))
			clearInterval(interval)
		}
		return () => {
			clearInterval(interval)
		}
	}, [dispatch, questionId, timer, values])
	function answerQuestion(): void {

		if (values.length > 0) {
			dispatch(setAnswerQuestion(
				{
					isAnswered: true,
					questionId,
					type:"multiple",
					answers: [...values.map(v => ({ variantID: v }))]
				}
			))
		}
	}
	return (
		<>
			<div className='df w100 jcsb'>
				<div>
					<Form.Item
						rules={[{ required: true, message: 'Выберите варианты ответа' }]}
						name={"checkbox"}
					>
						<Checkbox.Group
							options={variants.map(v => ({ label: v.variant, value: v.variantID }))}
							onChange={onChange}
							className='df fdc gap2 fs16'
						/>
					</Form.Item>
				</div>
				<div >
					<span className='mr20 fs16'>Времени осталось</span>
					<span className='timer'>{timer}</span>
					<span className='fs16'> секунд</span>
				</div>
			</div>
			<AnswerButton onClick={answerQuestion} />
		</>
	)
}

