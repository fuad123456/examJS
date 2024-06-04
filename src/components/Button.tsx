import { Form, Button } from 'antd'
import { ReactElement } from 'react'


type propsType = {
	onClick:()=>void
}
export default function AnswerButton({onClick}:propsType):ReactElement {
	return (
		<Form.Item>
			<Button
				htmlType="submit"
				type="primary"
				onClick={onClick}
			>Ответить</Button>
		</Form.Item>
	)
}
