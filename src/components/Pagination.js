import React from 'react'
import ReactPaginate from 'react-paginate';
const Pagination = ({fetchData}) => {
    let pageCount =500; // num of Pages in Api
    //in react Pagination we can use the classes of bootstrab as props or customize classes from css
    const handlePageClick = (data)=>{
        console.log(data.selected + 1);
        fetchData(data.selected + 1)
    }

    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="التالي "
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}//هتعرض من500 صفحه كام في الاول   
                marginPagesDisplayed={2}//هتعرض من500  صفحه  كام في الاخر
                pageCount={pageCount} //num of Pages in Api
                previousLabel="السابق"
                containerClassName={"pagination justify-content-center"}//num Of CLasses We can use It for big Div
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                previousLinkClassName='page-link'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                activeClassName='active'
            />
        </div>
    )
}

export default Pagination
