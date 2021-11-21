import styled from "styled-components";

export const Calculator = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 5rem);
  grid-template-rows: minmax(5rem, auto) repeat(5, 5rem);
  justify-content: center;
  gap: 0.5rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
  border-radius: 15px;
  background: rgba(248, 245, 245, 0.1);
  backdrop-filter: blur(0.5px);
  -webkit-backdrop-filter: blur(0.5px);

  .display {
    font-size: 3rem;
    grid-column: 1 / -1;
    /* grid-column: span 4; */
    padding: 1.5rem;
    text-align: right;
    align-self: center;
    word-wrap: break-word;
    word-break: break-all;
  }

  .span-two {
    grid-column: span 2;
  }

  button {
    color: white;
    font-size: 1rem;
    background: unset;
    border: unset;
    cursor: pointer;
    outline: none;
    /* border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  border-right: 1px solid rgba(255, 255, 255, 0.05); */
  }

  button:hover {
    /* transition: ease-in-out 0.1s; */
    background: rgba(240, 238, 238, 0.1);
    border-radius: 15px;
  }

  button:active {
    background: unset;
    /* background: rgba(229, 173, 173, 0.1); */
    /* color: #192f00; */
    transform: scale(1.2);
    color: whitesmoke;
    font-weight: 500;
  }
`;
