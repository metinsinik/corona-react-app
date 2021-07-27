import React from "react";
import { Modal, Embed } from "semantic-ui-react";

const LiveTrackingModal = ({ open, setOpen }) => {
    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='large'
        >
            <Modal.Content>
                <Embed
                    id='NMre6IAAAiU'
                    source='youtube'
                    autoPlay={true}
                    defaultActive={true}
                    hd={true}
                    color='white'
                    iframe={{
                        allowFullScreen: true,
                        style: {
                            padding: 10,
                        },
                    }}
                />
            </Modal.Content>
        </Modal>
    )
}

export default LiveTrackingModal;