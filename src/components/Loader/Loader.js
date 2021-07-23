import styled from '@emotion/styled';
import logo from 'assets/logo.svg';

const LoaderElement = styled.div`
  margin: 32px auto;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    & {
      animation: App-logo-spin infinite 1s linear;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function Loader() {
  return (
    <LoaderElement>
      <Image src={logo} />
    </LoaderElement>
  );
}

export default Loader;
