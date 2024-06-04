import { ReactElement, useState } from 'react'
import { Button, Form, Input } from 'antd'
import { useAppDispatch } from '../store/hooks'
import { setUserFullName } from '../store/question.slice'
 type propsType = {
	id:number
 }
export default function SimpleQuestion({id}:propsType): ReactElement {
	const [firstName, setfirstName] = useState('');
	const [lastName, setlastName] = useState('');
	const dispatch = useAppDispatch()

	function setFullName(): void {
		dispatch(setUserFullName({firstName, lastName, id}))
	}
	return (
		<>
			<Form.Item
				rules={[{ required: true, message: 'Заполните поле' }]}
				name={"firstName"}
			>
				<Input style={{ maxWidth: "300px" }} placeholder='Имя' onChange={(e) => setfirstName(e.currentTarget.value)} />
			</Form.Item>
			<Form.Item
				rules={[{ required: true, message: 'Заполните поле' }]}
				name={"lastName"}
			>
				<Input style={{ maxWidth: "300px" }} placeholder='Фамилия' onChange={(e) => setlastName(e.currentTarget.value)} />
			</Form.Item>
			<Form.Item>
				<Button htmlType="submit" type="primary" onClick={setFullName}>Ответить</Button>
			</Form.Item>
		</>
	)
}
