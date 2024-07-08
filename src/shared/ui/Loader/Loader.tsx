import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProprs {
    className?: string;
}

export const Loader = ({ className }: LoaderProprs) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
