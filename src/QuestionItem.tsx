import { Form } from 'antd'
import { ReactElement } from 'react'
import { QuestionItemType } from './types'
import SingleQuestion from './components/SingleQuestion';
import MultipleQuestion from './components/MultipleQuestion';
import SimpleQuestion from './components/SimpleQuestion';
import ExpandQuestion from './components/ExpandQuestion';


type propsType = Omit<QuestionItemType, "isAnswered">
export default function QuestionItem({ id, questionTitle, time, type, variants }: propsType): ReactElement {
    const [form] = Form.useForm();
    return (
        <div>
            <h2 className="question-item">{questionTitle}</h2>
            <Form form={form}
                onFinish={async () => await form.validateFields()}
            >
                {
                    type === 'single' ? <SingleQuestion variants={variants ?? []} questionId={id} time={time as number}/> :
                    type === 'multiple' ? <MultipleQuestion variants={variants ?? []} questionId={id} time={time as number}/>:
                    type === 'simple' ? <SimpleQuestion id={id}/>:
                    type === 'expanded' ? <ExpandQuestion id={id}/>:
                    null
                }
            </Form>
        </div>
    )
}
