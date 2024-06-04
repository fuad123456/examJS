
import './App.css'
import { useAppSelector } from './store/hooks';
import QuestionItem from './QuestionItem';
import { getClassProgressItem } from './helpers/getClassProgressItem';
import { ReactElement } from 'react';
import { Table, TableProps } from 'antd';
import { QuestionItemType } from './types';


function App() {

	const questions = useAppSelector(state => state.qustion.questions)
	const filteredQuestionsByAnswer = questions.filter(q => !q.isAnswered)
	const question = filteredQuestionsByAnswer[0]

	return (
		<>
			<div className="container">
				<div className='progress'>
					{questions.map((item) => {
						return <div className={`progress-item ${getClassProgressItem(item, item.id === question?.id)}`} key={item.id}></div>
					})}
				</div>
				{filteredQuestionsByAnswer.length !== 0 ?
					<QuestionItem
						id={question.id}
						questionTitle={question.questionTitle}
						time={question.time}
						type={question.type}
						variants={question.variants}
						key={question.id}
					/>
					:
					<DefaultPage />
				}
			</div>
		</>
	)
}

function DefaultPage() {
	const questions = useAppSelector(state => state.qustion.questions)
	const user = useAppSelector(state => state.qustion.user)
	localStorage.clear()
	return (
		<div className='container'>
			<h1>{(questions.filter(q => (q.isCorrectAnswered)).length < 5) ? "Тест не сдан" : "Поздравляем тест сдан"}</h1>
			<h3>Результаты теста по JavaSctipt {user.firstName} {user.lastName} </h3>
			<ResultTable questions={questions}/>
		</div>
	)
}

export default App

type propsType = {
	questions:QuestionItemType[]
}
function ResultTable({questions}:propsType): ReactElement {
	interface DataType {
		key: number;
		title: string;
		yourAnswer: string[];
		result: string;
	}

	const columns: TableProps<DataType>['columns'] = [
		{
			title: 'Название вопроса',
			dataIndex: 'title',
			key: 'name',
			render: (text: string) => <span>{text}</span>,
		},
		{
			title: 'Ваш ответ',
			dataIndex: 'yourAnswer',
			key: 'yourAnswer',
			render: (arr: string[]) => <ul>{arr.map(el=><li key={el}>{el}</li>)}</ul>,
		},
		{
			title: 'Результат',
			dataIndex: 'result',
			key: 'result',
		},
	];
	
	const colsData: DataType[] = 
	questions
		.filter(q=>q.type!=="expanded" && q.type!=="simple")
		.map((question, qIndex) => {
			const choosedVariants = question.answers?.choosedVariants
			const filteredByType = questions.filter(q=>q.type!=="expanded" && q.type!=="simple")[qIndex].variants
			const filtered = filteredByType?.filter(qd=>choosedVariants?.map(cv=>cv.variantID).includes(qd.variantID))

			const answers = filtered?.map(el=>el.variant)
			return {
				key:question.id+question.id,
				title:question.questionTitle,
				result:question.isCorrectAnswered?"Верно":"Неверно",
				yourAnswer:answers
			}
		}) as  DataType[]

	return (<Table columns={columns} dataSource={colsData} />)
}