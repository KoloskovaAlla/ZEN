import classes from './Policy.module.scss';

const Policy = ({ inputPolicy, parentClassName, isChecked, setIsChecked }) => {
  const { url, content, type } = inputPolicy;

  return (
    <label className={classes.policy}>
      <input
        type={type}
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <a href={url}>{content}</a>
    </label>
  );
};

export default Policy;
