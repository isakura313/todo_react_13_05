function Button({text, handleClick}) {
  return <button onClick={(text)=>handleClick(text)} className="button_ui">{text}</button>;
}
export default Button;
