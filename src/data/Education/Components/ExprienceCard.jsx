const ExprienceCard = ({ data }) => {
    //logic

    //ui
    return (
        <div style={{ margin: 10, display: 'flex', flexDirection: 'row' }}>
            <div>
                <div className='p-8 flex-fill' style={{ textAlign: 'left' }}><h5>{data.year}</h5></div>
                <div className='p-8 flex-fill' style={{ textAlign: 'right' }}><h5>{data.name}</h5></div>
            </div>
            <div className='p-8 flex-fill' style={{ textAlign: 'right' }}><h5>{data.job}</h5></div>
        </div>

    )



}
export default ExprienceCard  