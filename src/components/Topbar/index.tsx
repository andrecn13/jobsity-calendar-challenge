import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Container } from './styles';

const Topbar: React.FC = () => (
  <Container>
    <button type="button">
      <FiArrowLeft />
    </button>
    <div>
      <strong>Maio, 2020</strong>
    </div>
    <button type="button">
      <FiArrowRight />
    </button>
  </Container>
);

export default Topbar;
