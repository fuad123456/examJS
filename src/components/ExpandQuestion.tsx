import { ReactElement, useState } from 'react'
import { Button, Form } from 'antd'
import { useAppDispatch } from '../store/hooks'
import { setUserTech } from '../store/question.slice'
import TextArea from 'antd/es/input/TextArea';


export default function ExpandQuestion({id}:{id:number}): ReactElement {
	const [value, setValue] = useState('');
	const dispatch = useAppDispatch()

	function setWorkTech(): void {
		dispatch(setUserTech({id, tech:value.split(",")}))
	}
	return (
		<>
			<Form.Item
				rules={[{ required: true, message: 'Заполните поле' }]}
				name={"tech"}
			>
				<TextArea style={{ maxWidth: "300px" }} placeholder='Имя' onChange={(e) => setValue(e.currentTarget.value)} />
			</Form.Item>

			<Form.Item>
				<Button htmlType="submit" type="primary" onClick={setWorkTech}>Ответить</Button>
			</Form.Item>
		</>
	)
}
