

export const ParentComponent = () => {
    return (
        <section
        className="p-4 h-lvh w-[100vw] font-display tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white"
        >
            <h1>Component A</h1>
            <ChildComponent data={"React JS"}/>
        </section>
    )
}

const ChildComponent = ({data}) => {
    return (
       <section>
            <h1>Component B</h1>
            <GrandChildComponent data={data}/>
       </section>
    )
}

const GrandChildComponent = ({data}) => {
    return (
        <section>
            <h1>Component C</h1>
            <GrandGrandChildComponent data={data}/>
        </section>
    )
}

const GrandGrandChildComponent = ({data}) => {
    return (
        <section>
            <h1>I Love {data}</h1>
        </section>
    )
}