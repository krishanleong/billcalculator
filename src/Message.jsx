export default function Message({ billTotal, tip }) {
  const total = billTotal + tip;

  return (
    <div>
      <h1>
        You pay ${Math.round(parseInt(billTotal) + parseInt(tip), 2)} ($
        {billTotal} + ${Math.round(tip, 2)} tip)
      </h1>
    </div>
  );
}
