const EducationCard = ({ data }) => {
    //logic

    //ui
    return (
        <div style={{ margin: 10, display: 'flex', flexDirection: 'row'}}>
            <div className='p-8 flex-fill' style={{textAlign: 'left'}}><h5>{data.year}</h5></div>
            <div className='p-8 flex-fill' style={{textAlign: 'right'}}><h5>{data.name}</h5></div>
        </div>

    )



}
export default EducationCard    