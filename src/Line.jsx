export default function Line({ message, billTotal, onHandleChange, children }) {
  return (
    <div>
      <p>
        {message} {children}
      </p>
    </div>
  );
}
