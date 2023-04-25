import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/340998279_1672817976497399_7914835423085353824_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=PGkYA8e2Cw0AX9857AL&_nc_ht=scontent.fdad1-2.fna&oh=00_AfCjXd7tytzYp21Kxid0at-bPOzN1jpzvbw-5AqngJvwvw&oe=643B27D3" className={cx('avt')} alt="Nhat Linh" />
            <div className={cx('info')}>
                <h4 className={cx("info-username")}>
                    lina26@
                    <span className={cx('check')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </h4>
                <p className={cx('info-name')}>Nhat Linh</p>
            </div>
        </div>
    );
}

export default AccountItem;