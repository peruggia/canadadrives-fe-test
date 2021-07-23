import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ErrorElement = styled.div`
  align-items: center;
  background-color: #c70e0e;
  border-radius: 8px;
  color: white;
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  padding: 10px 15px;
`;

const Button = styled.button`
  background-color: #ea8585;
  border-radius: 5px;
  border: 1px #792d2d solid;
  cursor: pointer;
  margin-left: 10px;
  padding: 5px 8px;
  white-space: nowrap;
`;

function Error({ message, onRetry }) {
  return (
    <ErrorElement>
      <p>{message}</p>
      <p>
        <Button onClick={onRetry}>Try again</Button>
      </p>
    </ErrorElement>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func,
};

Error.defaultProps = {
  onRetry: () => {},
};

export default Error;
