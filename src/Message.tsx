function Message() {
  const name = "Leo";
  if (name) {
    return <h1>Hello {name}</h1>;
  }
  return <h1>Hello World</h1>;
}

export default Message;
