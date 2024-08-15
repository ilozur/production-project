import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AboutPage">
            <VStack gap="32" max>
                <Card>
                    {/* eslint-disable-next-line max-len */}
                    <Text title={t('О сайте')} text={t('Этот сайт является частью моего резюме и служит для того, чтобы показать, на что я способен как профессионал. Моя цель — продемонстрировать не только свои технические навыки, но и навыки промышленного программирования и умение работать с современными frontend-технологиями')} />
                </Card>
            </VStack>
        </Page>
    );
};

export default AboutPage;
