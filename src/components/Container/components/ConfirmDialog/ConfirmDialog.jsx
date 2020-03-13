import React, { useContext } from 'react';
import './ConfirmDialog.scss';
import { UIContext } from '../../../../contexts';
import Button from '../../../Shell/components/Button/Button';
import Lang from '../../../../assets/i18n/en';

const ConfirmDialog = () => {
    const { confirmDialog } = useContext(UIContext);

    const onConfirmClick = (e) => {
        e.stopPropagation();
        confirmDialog.setResult(true);
        confirmDialog.close();
    };

    const onCancelClick = (e) => {
        e.stopPropagation();
        confirmDialog.close();
    };

    const dialog = (
        <div
            className="dialog-container"
            onClick={ (e) => onCancelClick(e) }
        >
            <div className="dialog confirm-dialog">
                <p>{ confirmDialog.content }</p>
                <div className="confirm-dialog__controls">
                    <Button
                        type="submit"
                        buttonStyle="solid main"
                        className="confirm-dialog__confirm-button"
                        click={ (e) => onConfirmClick(e) }
                    >{ Lang.confirm.confirm }</Button>
                    <Button
                        type="cancel"
                        buttonStyle="solid gray"
                        className="confirm-dialog__cancel-button"
                        click={ (e) => onCancelClick(e) }
                    >{ Lang.confirm.cancel }</Button>
                </div>
            </div>
        </div>
    );

    return confirmDialog.visible ? dialog : '';
};

export default ConfirmDialog;
