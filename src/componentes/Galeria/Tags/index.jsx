import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 60px 0 40px 0;
  @media (max-width: 744px) {
    margin: 48px 0 42px 0;
    gap: 18px;
  }
  @media (max-width: 360px) {
    display: inline-block;
    margin: 32px 0;
  }
`;

const TagTitulo = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: #d9d9d9;
  margin-right: 40px;
  @media (max-width: 744px) {
    margin: 0;
  }
  @media (max-width: 360px) {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover,
  &:focus {
    border-color: #c98cf1;
  }
  @media (max-width: 744px) {
    padding: 10px 7px;
  }
  @media (max-width: 360px) {
    font-size: 16px;
    padding: 6px;
    margin: 3px;
  }
`;
const Tags = ({ setTag }) => {
  return (
    <TagsContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      {tags.map((tag) => (
        <Tag key={tag.id} onClick={() => setTag(tag.tag)}>
          {tag.titulo}
        </Tag>
      ))}
    </TagsContainer>
  );
};

export default Tags;
