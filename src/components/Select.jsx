const Select = ({ sortByGenre, sortByLength }) => {

    return (
        <div className="select" onChange={(e) => sortByGenre(e.target.value)}>
            <select id="genre" className="btn">
                <option style={{color: 'white', backgroundColor: '#40d1f5'}} value="science-fiction">Science Fiction</option>
                <option style={{color: 'white', backgroundColor: '#40d1f5'}} value="action">Action</option>
                <option style={{color: 'white', backgroundColor: '#40d1f5'}} value="mafia">Mafia</option>
                <option style={{color: 'white', backgroundColor: '#40d1f5'}} value="all">All movies</option>
            </select>
            <button className="btn" onClick={() => sortByLength()}>Sort by length</button>
        </div>
    );
}

export default Select;