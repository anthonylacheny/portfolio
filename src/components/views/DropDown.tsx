import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './DropDown.css';

interface ItemType {
    id: number | string;
    title: string | JSX.Element;
    selected?: boolean;
}

interface PropsType {
    title: string | JSX.Element;
    list: Array<ItemType>;
    onSelectItem(item: ItemType): void;
}

const DropDown: React.FC<PropsType> = ({ title, list, onSelectItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [headerTitle, setHeaderTitle] = useState<string | JSX.Element>(title);
    const [selectedItem, setSelectedItem] = useState<ItemType | null>(
        list.find((item) => item.selected) || null,
    );

    const toogle = () => {
        setIsOpen(!isOpen);
    };

    const close = () => {
        setIsOpen(false);
    };

    const selectItem = (item: ItemType) => {
        if (item !== selectedItem) {
            setSelectedItem(item);
            onSelectItem(item);
        }
        setIsOpen(false);
    };

    useEffect(() => {
        setHeaderTitle(selectedItem ? selectedItem.title : title);
    }, [selectedItem, title]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('click', close);
        } else {
            window.removeEventListener('click', close);
        }
    }, [isOpen]);

    const renderItem = (item: ItemType) => {
        return (
            item.id !== selectedItem?.id && (
                <div className="DropDown-list-item" key={item.id} onClick={() => selectItem(item)}>
                    {item.title}
                </div>
            )
        );
    };

    return (
        <div className="DropDown">
            <div
                className={isOpen ? 'DropDown-header DropDown-header-opened' : 'DropDown-header'}
                onClick={(e) => {
                    e.stopPropagation();
                    toogle();
                }}>
                <div className="DropDown-header-title">{headerTitle}</div>
                <FontAwesomeIcon
                    icon={isOpen ? 'angle-up' : 'angle-down'}
                    className="DropDown-header-icon"
                />
            </div>

            {isOpen && (
                <div role="list" className="DropDown-list">
                    {list.map((item) => renderItem(item))}
                </div>
            )}
        </div>
    );
};

export default DropDown;
