import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header({ data }) {
    return (
        <header className={cx('wrapper')}>
            <FontAwesomeIcon icon={faHeart} />
            Header
        </header>
    );
}

Header.propTypes = {
    data: PropTypes.node.isRequired,
};

export default Header;
