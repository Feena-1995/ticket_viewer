import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  min-width: 400px;
  margin: 40px 0 40px 0;
  border: 1px #d9d9d9 solid;
`;

const ButtonContainer = styled.div`
  height: 60px;
  width: 60px;
  cursor: ${(props) => (props.disable ? null : "pointer")};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.disable ? "grey" : "black")};

  :hover {
    background: ${(props) => (props.disable ? null : "grey")};
  }
`;

const Pagination = ({ totalPage, page, handleChangePage }) => {
  return totalPage > 0 ? (
    <Container data-testid={"pagination"}>
      <ButtonContainer
        disable={page === 0}
        onClick={() => handleChangePage(-1)}
        data-testid={"pagination-back"}
      >
        {"<"}
      </ButtonContainer>
      <div>
        Page {page + 1} of {totalPage}
      </div>
      <ButtonContainer
        disable={page === totalPage - 1}
        onClick={() => handleChangePage(1)}
        data-testid={"pagination-forward"}
      >
        {">"}
      </ButtonContainer>
    </Container>
  ) : (
    <Container />
  );
};

export default Pagination;
