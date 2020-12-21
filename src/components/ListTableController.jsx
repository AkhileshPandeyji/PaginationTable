const ListTableController = (props)=>{
    function limitChange(e){
        let target = e.target;
        let value = target.value;
        props.changeLimit(value);
    }
    return(
        <div className="list-controller">
            <button title={"First Page"} onClick={props.firstPage}>{"<<"}</button>
            <button title={"Previous Page"} onClick={props.prevPage}>{"<"}</button>
            <div className="list-controller-page" title={"Current Page"}>
                {props.currPage}
            </div>
            <button title={"Next Page"} onClick={props.nextPage}>{">"}</button>
            <button title={"Last Page"} onClick={props.lastPage}>{">>"}</button>
            <select onChange={(e)=>{limitChange(e)}}>
                {
                    props.limits.map((limit)=>{
                        return(
                            <option value={limit}>{limit}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default ListTableController;