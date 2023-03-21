import styled from "styled-components";
import { xs, md } from "../responsiveness/responsive";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  overflow: hidden;
`;

const PaginationButton = styled.button`
  border: none;
  background: none;
  color: ${({ active }) => active ? '#3498db' : 'black'};
  text-align: center;
  padding: 0 0.9rem;
  text-decoration: none;
  display: inline-block;
  font-weight: 100;
  font-size: 1rem;
  cursor: pointer;

  ${xs({ fontSize: '0.8rem' })};
  ${md({ fontSize: '1.09rem' })};

`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    
    // Page counting Logic
    let startPage = currentPage - 2;
    if (startPage < 1) {
      startPage = 1;
    }
    let endPage = startPage + 4;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - 4;
      if (startPage < 1) {
        startPage = 1;
      }
    }

    const handlePageChange = (page) => {
        onPageChange(page);
        window.scrollTo(0, 0);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
          handlePageChange(currentPage - 1);
        }
      };
    
      const handleNextPage = () => {
        if (currentPage < totalPages) {
          handlePageChange(currentPage + 1);
        }
      };

      const handleFirstPage = () => {
        handlePageChange(Math.max(1, currentPage - 10));
        window.scrollTo(0, 0);

      };
      
      const handleLastPage = () => {
        handlePageChange(Math.min(currentPage + 10, totalPages));
        window.scrollTo(0, 0);

      };
  
    const pages = [...Array(endPage - startPage + 1).keys()].map(i => startPage + i);

  return (
    <PaginationWrapper>
        <PaginationButton
        key="first"
        onClick={handleFirstPage}
        disabled={currentPage === 1}
      >
        &lt;&lt;
      </PaginationButton>
        <PaginationButton
        key="prev"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        &lt;
      </PaginationButton>
      {pages.map(page => (
        <PaginationButton
          key={page}
          active={currentPage === page}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </PaginationButton>
      ))}
      <PaginationButton
        key="next"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        &gt;
      </PaginationButton>
      <PaginationButton 
      key="last"
      active={false}
      onClick={handleLastPage} 
      disabled={currentPage === totalPages}>
        &gt;&gt;
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;