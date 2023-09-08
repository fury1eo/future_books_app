import { Modal } from "antd";

export const modalError = (e: string) => {
    Modal.error({
      title: 'Error',
      content: e
    });
};