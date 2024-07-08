import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProprs {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProprs) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Page not Found')}
        </div>
    );
};
