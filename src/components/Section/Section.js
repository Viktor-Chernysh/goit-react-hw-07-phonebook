import s from './Section.module.css';
function Section({ children }) {
  return <div className={s.section}>{children}</div>;
}
export default Section;
