import './App.css';
import Card from './Components/Card';
import data from './Components/Data';
function nCard(val) {
    return <Card key={val.imdbID} episode={val.Episode} imgsrc={val.Poster} year={val.Year} title={val.Title} type={val.Type} />
}
const App = () => {
    return (
        <>
            <div className='heading'>star Wars</div>
            <div className="cards">
                {data.map(nCard)}
            </div>
        </>
    );
};
export default App;