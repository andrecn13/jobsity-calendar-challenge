import React from 'react';
import { format } from 'date-fns';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Container } from './styles';

interface TopbarProps {
  currentDate: Date;
  nextMonth(): void;
  prevMonth(): void;
}

const Topbar: React.FC<TopbarProps> = ({
  currentDate,
  nextMonth,
  prevMonth,
}) => (
  <Container>
    <div>
      <strong>{format(currentDate, 'MMMM yyyy')}</strong>
    </div>
    <div>
      <button type="button" onClick={prevMonth}>
        <FiArrowLeft />
      </button>
      <button type="button" onClick={nextMonth}>
        <FiArrowRight />
      </button>
    </div>
  </Container>
);

export default Topbar;
