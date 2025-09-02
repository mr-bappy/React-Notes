import './EventPropagation.css'

export const EventPropagation = () => {

    const handleGrandParent = () => {
        console.log('Grandparent clicked');
    }
    const handleParent = () => {
        console.log('Parent clicked');
    }
    const handleChild = (event) => {
        event.stopPropagation();
        console.log('Child clicked');
    }

    return (
        <section className="main-div">
            {/* onClickCapture follows capturing phase (top-down approach) */}
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParent}>
                    <button className="c-div" onClickCapture={handleChild}>
                        Child Div
                    </button>
                </div>
            </div>
        </section>
    )
}