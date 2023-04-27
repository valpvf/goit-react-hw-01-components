import PT from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ key, label, percentage, data }) => {
  const title = 'Upload stats';
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {data.map(el => (
          <li key={el.id} className={s.item}>
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}> {el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  label: PT.string,
  percentage: PT.number,
  data: PT.arrayOf(PT.object).isRequired,
};

export default Statistics;
