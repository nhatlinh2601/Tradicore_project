import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

function Button({ to, href, link, primary, children, onClick, outline, rounded, small, large, text, className,
    leftIcon,
    rightIcon, }) {

    let Comp = 'button';

    const props = {
        onClick,
        to,
        href,
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        small,
        large,
        text
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;