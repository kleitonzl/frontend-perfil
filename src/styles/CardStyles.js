import styled from "styled-components";

export const Container = styled.div`
margin-top: 250px;
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  
`;

export const Card = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #333;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)
  `
;

export const ProfileImage = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
  `
;

export const ProfileInfo = styled.div`
  h2 {
    margin-bottom: 5px;
  }
  `
;

export const Form = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)
   `
;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  `
;

export const TextArea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  `
;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
  `
;