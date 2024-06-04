import { ReactElement, useEffect, useState } from 'react'
import { QuestionVariants } from "../types"
import { Form, Radio, RadioChangeEvent, Space } from 'antd'
import { useAppDispatch } from '../store/hooks'
import { setAnswerQuestion } from '../store/question.slice'
import AnswerButton from './Button';

type propsType = {
	questionId: number
	variants: QuestionVariants
	time:number
}
export default function SingleQuestion({ variants, questionId, time }: propsType): ReactElement {
	const [value, setValue] = useState(0);
	const [timer,setTimer] =useState(time)
	const dispatch = useAppDispatch()
	function onChange(e: RadioChangeEvent): void {
		setValue(e.target.value);
	}
	useEffect(()=>{
		const interval=setInterval(()=>{
			setTimer(prev=>prev-1)
		},1000)
		if(timer<0){
			dispatch(setAnswerQuestion({ isAnswered: true, questionId, answers:[{variantID:value}], type:"single" }))
			clearInterval(interval)
		}
		return ()=>{
			clearInterval(interval)
		}
	},[dispatch, questionId, timer, value])
	
	function answerQuestion(): void {
		const isValid = !(value === 0);
		if(isValid){
			dispatch(setAnswerQuestion({ isAnswered: true, questionId, answers:[{variantID:value}], type:"single" }))
		}
	}
	return (
		<>
			<div  className='df w100 jcsb'>
				<div>
					<Form.Item
						rules={[{ required: true, message: 'Выберите один из вариантов' }]}
						name="radio-button"
					>
						<Radio.Group value={value} onChange={onChange}>
							<Space direction="vertical">
								{variants?.map(variant => (
									<Radio value={variant.variantID} key={variant.variantID} required={true}>{variant.variant}</Radio>
								))}
							</Space>
						</Radio.Group>
					</Form.Item>
				</div>
				<div >
					<span className='mr20 fs16'>Времени осталось</span>
					<span className='timer'>{timer}</span>
					<span className='fs16'> секунд</span>
				</div>
			</div>
			<AnswerButton onClick={answerQuestion}/>
		</>
	)
}
