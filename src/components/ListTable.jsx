const ListTable = (props)=>{
    let start = (props.currPage-1)*props.limit;
    let end = start+(props.limit-1);
    // let random = Math.random();

    // if(random > 0.7){
    //     throw new Error("Something went wrong");
    // }

    return(
        <div className="list-table">
            <table border="1">
                <thead>
                    {
                        props.headings.map((heading)=>{
                            return(
                                <th className="table-heading">{heading}</th>
                            )
                        })
                    }
                </thead>
                <tbody>
                    {
                        props.data.map((row,index)=>{
                            if(index>=start && index<=end)
                            return(
                                <tr>
                                    {
                                        Object.keys(row).map((col)=>{
                                            return(
                                                <td className="table-body-cell">{row[col]}</td>
                                            )
                                        })
                                    }
                                </tr>
                            );
                            else return null;
                            
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListTable;