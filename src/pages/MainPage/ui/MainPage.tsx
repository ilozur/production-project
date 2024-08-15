import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page data-testid="MainPage">
            <VStack gap="32" max>
                <Card>
                    {/* eslint-disable-next-line max-len */}
                    <Text title={t('ilozur habr')} text={t('Добро пожаловать на ilozur habr! Этот проект был создан с целью продемонстрировать мои навыки и возможности в веб-разработке')} />
                </Card>
            </VStack>
        </Page>
    );
};

export default MainPage;
