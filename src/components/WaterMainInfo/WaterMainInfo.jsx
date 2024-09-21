import AddWaterBtn from '../AddWaterBtn/AddWaterBtn.jsx';
import css from './WaterMainInfo.module.css';
import Logo from '../Logo/Logo.jsx';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma.jsx';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar.jsx';
import { ModalTemplate } from 'components/Modal/Modal.jsx';
import WaterModal from 'components/WaterModal/WaterModal.jsx';
import { useModal } from 'components/Modal/UseModal.jsx';

export default function WaterMainInfo() {
  const { modalIsOpen, closeModal, openModal } = useModal();

  return (
    <section className={css.trackerSection}>
      <Logo />

      <WaterDailyNorma />
      <WaterProgressBar />

      <AddWaterBtn btnType="primary" isAbsolute={true} onClick={openModal} />

      <ModalTemplate modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <WaterModal actionType="add" closeModal={closeModal} />
      </ModalTemplate>
    </section>
  );
}
