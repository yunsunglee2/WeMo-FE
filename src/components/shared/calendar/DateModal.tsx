import React, { useState } from 'react';
import ModalFrame from '../../../components/shared/modals/ModalFrame';
import CalendarPicker from './CalendarPicker';

export default function DateModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 달력에서 날짜를 선택했을 때 실행되는 함수
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(false);
  };

  const buttonText = selectedDate
    ? selectedDate.toLocaleDateString() // or 원하는 포맷
    : '날짜 전체';

  return (
    <div>
      <button onClick={handleOpenModal}>{buttonText}</button>
      <ModalFrame
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="날짜 선택 모달"
      >
        <div>
          <CalendarPicker onChange={handleDateChange} />
          <p>
            선택된 날짜:{' '}
            {selectedDate ? selectedDate.toLocaleDateString() : '없음'}
          </p>
        </div>
      </ModalFrame>
    </div>
  );
}
