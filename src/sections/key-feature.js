/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Creativité',
    title: 'Creativité',
    text:
      'Stimuler le talent créatif de notre communauté.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Evolution',
    title: 'Evolution',
    text:
      'Evoluer dans le monde de l’audiovisuel',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Partage',
    title: 'Partage',
    text:
      'Organiser des expositions annuelles afin de présenter le fruit du travail artistique du club au publique.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Développement personnel',
    title: 'Développement personnel',
    text:
      'Assurer des formations continues en audiovisuel et en développement personnel.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Nos objectifs"
          title="Le club vise les objectifs suivants :"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
