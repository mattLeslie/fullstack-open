
const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
}
const Content = (props) => {
    return (
        <div>
            {props.parts.map(({ name, exercises, id }) => {
                return <Part name={name} exercises={exercises} key={id} />
            })}
        </div>
    )
}

const Total = (props) => {
    const sum = props.parts.reduce((s, { exercises }) => s + exercises, 0)
    return (
        <h4>
            total of {sum} exercises
        </h4>
    )
}

const Part = (props) => {
    return (
        <p>{props.name} {props.exercises}</p>
    )
}

const Course = (props) => {
    return (
        <>
            <Header course={props.course} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </>
    )
}

export default Course