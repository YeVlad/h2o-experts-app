import WaterForm from './WaterForm/WaterForm.jsx';
import styles from './WaterModal.module.css';

const WaterModal = ({ add, edit }) => {
  return (
    <>
      {edit ? (
        <h1 className={styles.title}> Edit the entered amount of water</h1>
      ) : add ? (
        <h1 className={styles.title}> Add water</h1>
      ) : (
        <h1 className={styles.title}>
          {' '}
          Default text if neither add nor edit is true
        </h1>
      )}
      <WaterForm add={add} edit={edit}></WaterForm>
    </>
  );
};

export default WaterModal;
