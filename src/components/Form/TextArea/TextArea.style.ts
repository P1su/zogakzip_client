import styled from 'styled-components';

export const TextAreaWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column', justify: 'flex-start'})};
  width: 100%;
  gap: 1rem;
`;
export const TitleText = styled.div`
  ${({ theme }) => theme.fonts.font_05};
`;
export const GroupTextarea = styled.textarea`
  ${({ theme }) => theme.fonts.font_08};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.G_03};
  border-radius: 6px;
  &:focus{
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
  height: 12rem;
  padding: 1.4rem 2rem 0 2rem;
  resize: none;
`;