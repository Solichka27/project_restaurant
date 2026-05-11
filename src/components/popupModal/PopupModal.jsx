import Modal from 'react-modal';
import style from './PopupModal.module.css';

const PopupModal = ({ listConst,
    selectedItem,
    setSelectedItem,
    RenderComponent }) => {
    return (
        <Modal
            isOpen={!!selectedItem}
            onRequestClose={() => setSelectedItem(null)}
            className={style.modalContent}
            overlayClassName={style.modalOverlay}
            contentLabel="PopupModal"
        >
            {selectedItem && (
                <RenderComponent
                    item={selectedItem.item}
                    onClose={() => setSelectedItem(null)}
                    onPrev={() => {
                        const prevIndex = selectedItem.index - 1;

                        if (prevIndex >= 0) {
                            setSelectedItem({
                                item: listConst[prevIndex],
                                index: prevIndex
                            });
                        }
                    }}
                    onNext={() => {
                        const nextIndex = selectedItem.index + 1;

                        if (nextIndex < listConst.length) {
                            setSelectedItem({
                                item: listConst[nextIndex],
                                index: nextIndex
                            });
                        }
                    }}
                />
            )}
        </Modal>
    )
}

export default PopupModal;