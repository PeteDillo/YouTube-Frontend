const DisplayComments = (comments) => {
    return (
        <div>
            {comments.displayComments.map((entry) => {
                return (
                    <div className="card-body">
                        <h5 className="card-title">{entry.name}</h5>
                        <p className="card-date">{entry.dateAdded}</p>
                        <p className="card-text">{entry.body}</p>
                    </div>
                );
            })}
        </div>
    );
}
 
export default DisplayComments;
