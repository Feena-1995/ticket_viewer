import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  min-height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  min-width: 400px;
  border: 3px #d9d9d9 solid;
  border-radius: 10px;
  height: 65px;
`;

const PageNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100%;
`;

const PageNumber = styled.div`
  font-weight: bold;
  margin: 0 10px 0 10px;
`;

const ButtonContainer = styled.button`
  height: 60px;
  width: 60px;
  cursor: ${(props) => (props.disable ? null : "pointer")};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.disable ? "grey" : "black")};
  border: none;
  font-size: 20px;
  :hover:enabled {
    background: ${(props) => (props.disable ? null : "grey")};
  }

  :disabled {
    color: grey;
  }
`;

const Pagination = ({ totalPage, page, handleChangePage }) => {
  return totalPage > 0 ? (
    <OuterContainer>
      <Container data-testid={"pagination"}>
        <ButtonContainer
          disabled={page === 0}
          onClick={() => handleChangePage(-1)}
          data-testid={"pagination-back"}
        >
          {"<"}
        </ButtonContainer>
        <PageNumberContainer>
          Page <PageNumber>{page + 1}</PageNumber> of{" "}
          <PageNumber>{totalPage}</PageNumber>
        </PageNumberContainer>
        <ButtonContainer
          disabled={page === totalPage - 1}
          onClick={() => handleChangePage(1)}
          data-testid={"pagination-forward"}
        >
          {">"}
        </ButtonContainer>
      </Container>
    </OuterContainer>
  ) : (
    <Container />
  );
};

export default Pagination;
