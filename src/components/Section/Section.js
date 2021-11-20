import s from './Section.module.css';
function Section(props) {
  const { children } = props;
  return <div className={s.section}>{children}</div>;
}
export default Section;
