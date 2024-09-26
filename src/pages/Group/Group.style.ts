import styled from 'styled-components';

export const GroupWrapper = styled.div`
  ${({ theme : { mixin }}) => mixin.flexCenter({})};
  width: 100%;
  height: 100vh;
  padding-top: 6rem;
`;
export const MemoryBox = styled.div`
  width: 100%;
`;
export const MemoryHeader = styled.div`
  ${({ theme : { mixin }}) => mixin.flexBox({justify: 'center' })};
  width: 100%;
  margin-bottom: 6rem;
`;
export const MemoryListTitle = styled.span`
  ${({ theme }) => theme.fonts.title};
  position: absolute;
`;
export const ButtonField = styled.div`
  padding-left: 135rem;
`;
